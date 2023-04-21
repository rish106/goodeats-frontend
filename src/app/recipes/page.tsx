'use client'

import LargeHeading from '@/components/ui/LargeHeading';
import React, { useState } from 'react';
import { Metadata } from 'next'
import useSWR from 'swr';
import SearchBar from '@/components/SearchBar';
import { RecipeCard } from '@/components/RecipeCard';
import { Pagination } from '@mui/material';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'Goodeats | Browse Recipes',
// }

interface RecipeCardProps {
  name: string
  description: string
  username: string
  id: number
  recipe_image: string
  rating: number
}

async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function getRecipesByPage(page: number) {
  const res = await fetch(`http://127.0.0.1:5000/home?page=${page}`);
  const data = await res.json();
  return data;
}

export default function page() {
  const { data, error } = useSWR('http://127.0.0.1:5000/home', fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedRecipes, setFeedRecipes] = useState<RecipeCardProps[]>(data || []);

  if (error) return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <LargeHeading>
          Error loading recipes
        </LargeHeading>
      </div>
    </div>
  )
  if (!data) return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <LargeHeading>
          Loading recipes...
        </LargeHeading>
      </div>
    </div>
  )

  async function handlePageChange (event, value) {
    const recipes = await getRecipesByPage(value);
    setFeedRecipes(recipes);
    setCurrentPage(value);
  };

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-8 flex flex-col justify-start items-center'>
          <div className='flex flex-col items-center gap-6'>
            <LargeHeading>
              Browse all Recipes
            </LargeHeading>
            <SearchBar />
          </div>
          <div className='h-full flex flex-col justify-start place-items-start px-8'>
            {feedRecipes.map((recipe: RecipeCardProps) => (
              <Link href={`/recipes/${recipe.id}`} key={recipe.id} className='mb-8'>
                <RecipeCard recipeId={recipe.id} recipeName={recipe.name} recipeImage={recipe.recipe_image} recipeAuthor={recipe.username} recipeDescription={recipe.description} recipeRating={recipe.rating} />
              </Link>
            ))}
            <div className='w-full flex flex-col items-center'>
              <Pagination count={100} size='large' shape='rounded' color='standard' page={currentPage} onChange={handlePageChange} className='mb-16'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
