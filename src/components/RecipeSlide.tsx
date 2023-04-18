
'use client'

import Image from 'next/image'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import type {RecipeCardProps} from '@/components/RecipeCard'
import Link from 'next/link'
import { RecipeCard } from '@/components/RecipeCard'
async function getAllRecipes() {
  const res = await fetch('http://127.0.0.1:5000/');
  return res.json();
}

export async function scrollArea() {
  let feedRecipes = await getAllRecipes();
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-8 flex flex-col justify-start items-center'>
          <div className='flex flex-col items-center gap-6'>
            <LargeHeading>
              Browse Trending Recipes
            </LargeHeading>
            <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
              recipeImage={feedRecipes[0].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>                    
          </div>
        </div>
      </div>
    </div>

  )
}



export function RecipeBox({recipeName, recipeAuthor, recipeImage, recipeDescription, recipeId, recipeRating}: RecipeCardProps) {
  return (
    
    <Link key={recipeId} className='grid grid-flow-row grid-cols-1 flex-col justify-center h-[450px] items-center gap-4 lg:w-72 sm:w-44 max-w-7xl rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-orange-300 transition-transform'
        href= {`/recipes/${recipeId}`}>
        <Image src={recipeImage} alt={recipeName} width={300} height={500} className='rounded-lg lg:h-80 lg:w-72  object-cover sm:h-40 sm:w-36' />
        <LargeHeading className='text-center flex-wrap max-w-xs max-h-5 gap-5 sm:text-sm font-medium' size='xs'>
            {recipeName} 
        </LargeHeading>
        <div className='text-center font-semibold'> {recipeRating} ★ </div>

    </Link>
  )
}
