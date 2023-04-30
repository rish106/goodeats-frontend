'use client'

import LargeHeading from '@/ui/LargeHeading';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { RecipeCard } from '@/components/RecipeCard';
import { Pagination } from '@mui/material';
import Link from 'next/link';

interface PageProps {
  params: {
    username: string
  }
}

async function fetcher(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

async function getRecipesByPage(username: string, page: number) {
  return await fetcher(`/api/${username}/recipes?page=${page}`);
}

export default function Page({ params }: PageProps) {
  const { data, error } = useSWR(`/api/${params.username}/recipes`, fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const [feedRecipes, setFeedRecipes] = useState<any[]>([]);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    if (data) {
      setFeedRecipes(data.recipe_data);
      setMaxPage(data.max_pages);
    }
  }, [data])

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

  async function handlePageChange (event, value: number) {
    if (value !== currentPage) {
      const recipes = await getRecipesByPage(params.username, value);
      setFeedRecipes(recipes.recipe_data);
      setCurrentPage(value);
    }
  };

  if (Array.isArray(feedRecipes) && feedRecipes.length === 0) {
    return (
      <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
        <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
          <div className='h-full gap-8 flex flex-col justify-start items-center'>
            <div className='flex flex-col items-center gap-6 w-full sm:w-4/5 md:w-3/5 lg:2/5'>
              <LargeHeading>
                Recipes by {params.username}
              </LargeHeading>
              <LargeHeading size='xs'>
                No recipes found
              </LargeHeading>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-8 flex flex-col justify-start items-center'>
          <div className='flex flex-col items-center gap-6 w-full sm:w-4/5 md:w-3/5 lg:2/5'>
            <LargeHeading>
              Recipes by {params.username}
            </LargeHeading>
          </div>
          <div className='h-full flex flex-col justify-start place-items-start px-8 min-w-[360px] w-4/5'>
              {feedRecipes.map((recipe: any) => (
                <Link href={`/recipes/${recipe.recipe_id}`} key={recipe.recipe_id} className='w-full mb-8'>
                  <RecipeCard
                    recipeId={recipe.recipe_id}
                    recipeName={recipe.name}
                    recipeImage={recipe.recipe_image}
                    recipeAuthor={params.username}
                    recipeDescription={recipe.description}
                    recipeRating={recipe.avgRating}
                    recipeReviewCount={recipe.reviewCount} />
                </Link>
              ))}
            <div className='w-full flex flex-col items-center'>
              <Pagination
                count={maxPage}
                boundaryCount={0}
                size='medium'
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
