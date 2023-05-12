'use client'

import { useState } from 'react'
import * as jose from 'jose';
import { Icons } from '@/components/Icons'
import AddToCollectionDialog from '@/components/AddToCollectionDialog'
import { toast } from '@/ui/toast';

export function RecipeActions({recipe_id}:{recipe_id:number}){
  const [isLiked, setIsLiked] = useState(false);
  const token = localStorage.getItem('token');
  let user_id = 0;
  let username = '';
  if (token) {
    try {
      const payload = jose.decodeJwt(token as string);
      user_id = payload.user_id as number;
      username = payload.user as string;
    } catch (err) {
      user_id = 0;
      username = '';
    }
  }
  if (!username) {
    return null;
  }
  let favouritesId = -1;
  const getIsLiked = async () => {
    const response = await fetch(`/api/${username}/collections`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    if (response.status === 200) {
      const favouritesCollection = json.find((collection:any) => collection.collection_name === 'Favourites');
      favouritesId = favouritesCollection.collection_id;
      if (favouritesCollection.recipes.includes(recipe_id)) {
        setIsLiked(true);
      }
    }
  }
  getIsLiked();

  const likeRecipe = async () => {
    if (isLiked) {
      toast({
        title: 'Recipe already in favourites',
        message: '',
        type: 'default',
        duration: 1500,
      });
      return;
    }
    const data = {
      user_id: user_id as number,
      collection_id: favouritesId as number,
    };
    const response = await fetch(`/api/recipe/collection/${recipe_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    if (response.status === 200) {
      toast({
        title: 'Success',
        message: 'Recipe added to Favourites',
        type: 'success',
        duration: 2000,
      });
      setIsLiked(true);
    } else {
      toast({
        title: 'Error',
        message: json.message,
        type: 'error',
        duration: 2000,
      });
    }
  }

  return (
    <div className='flex flex-row items-center gap-2 text-white'>
      <button
        onClick={likeRecipe}
        className='w-10 h-10 active:scale-95 inline-flex items-center justify-center rounded-full transition-colors disabled:opacity-50 disabled:pointer-events-none bg-transparent hover:bg-slate-700 data-[state=open]:bg-transparent'>
        <Icons.Heart
          fill={isLiked ? 'white' : 'transparent'}
        />
      </button>
      <AddToCollectionDialog
        username={username}
        user_id={user_id}
        recipe_id={recipe_id}
      />
    </div>
  )
}
