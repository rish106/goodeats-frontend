'use client'

import LargeHeading from '@/ui/LargeHeading';
import React, { useState } from 'react';
import { Metadata } from 'next'
import useSWR from 'swr';
import { RecipeCard } from '@/components/RecipeCard';
import { Pagination } from '@mui/material';
import Link from 'next/link';
import Icons from '@/components/Icons';
import { Button } from '@/ui/Button';

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

async function getRecipesByPage(search: string, page: number) {
  if (search) {
    return await fetcher(`/api/search?keywords=${search}&page=${page}`);
  } else {
    return await fetcher(`/api/home?page=${page}`);
  }
}

let onLoad = true;

export default function Page() {
  const { data, error } = useSWR('/api/home', fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedRecipes, setFeedRecipes] = useState<RecipeCardProps[]>(data || []);
  const [search, setSearchValue] = useState('');

  async function handleSearch () {
    setCurrentPage(1);
    const recipes = await getRecipesByPage(search, 1);
    setFeedRecipes(recipes);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

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

  if (onLoad && data) {
    setFeedRecipes(data);
    onLoad = false;
  };

  async function handlePageChange (event, value: number) {
    const recipes = await getRecipesByPage(search, value);
    setFeedRecipes(recipes);
    setCurrentPage(value);
  };

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-8 flex flex-col justify-start items-center'>
          <div className='flex flex-col items-center gap-6 w-full sm:w-4/5 md:w-3/5 lg:2/5'>
            <LargeHeading>
              Browse all Recipes
            </LargeHeading>
            <div className='flex flex-row gap-3 w-full items-center justify-center px-8'>
              <div className='relative w-full'>
                <input
                  type='text'
                  className='block h-[40px] w-full pl-10 pr-3 py-2 border rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 sm:text-sm'
                  placeholder='Search recipes'
                  value={search}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                />
                <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <Icons.Search className='h-5 w-5 text-gray-400' aria-hidden='true' />
                </div>
              </div>
              <Button variant='default' onClick={() => handleSearch()} className='bg-orange-300 hover:bg-orange-400 text-black'>
                Search
              </Button>
            </div>
          </div>
          <div className='h-full flex flex-col justify-start place-items-start px-8 w-full sm:w-4/5'>
            {feedRecipes.map((recipe: RecipeCardProps) => (
              <Link href={`/recipes/${recipe.id}`} key={recipe.id} className='w-full mb-8'>
                <RecipeCard recipeId={recipe.id} recipeName={recipe.name} recipeImage={recipe.recipe_image} recipeAuthor={recipe.username} recipeDescription={recipe.description} recipeRating={recipe.rating} />
              </Link>
            ))}
            <div className='w-full flex flex-col items-center'>
              <Pagination
                count={100}
                size='large'
                color='standard'
                page={currentPage}
                onChange={handlePageChange}
                className='mb-16'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
