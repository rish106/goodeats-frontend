
'use client'

import Image from 'next/image'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import type {RecipeCardProps} from '@/components/RecipeCard'
import Link from 'next/link'
import type {Recipe} from '@/public/data'
import { RecipeCard } from '@/components/RecipeCard'
async function getAllRecipes() {
  const res = await fetch('http://127.0.0.1:5000/');
  return res.json();
}

interface scrollAreaProps
{
  feedRecipes: Array<Recipe>
  header: string
}

export function ScrollArea({feedRecipes, header}:scrollAreaProps) {
  // let feedRecipes = await getAllRecipes();
  return (
    <div className='items-center  justify-center flex flex-col gap-10 h-[900px] bg-slate-100'>
          <LargeHeading className='font-sans font-medium'>{header}</LargeHeading>
          <div className=' flex-row h-[600px] justify-start items-center inset-x-20 grid grid-rows-1 grid-flow-col gap-8 overflow-y-visible overflow-x-scroll 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm'>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[0].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
                <RecipeBox recipeName= {feedRecipes[1].name} recipeAuthor={feedRecipes[1].username} recipeId={feedRecipes[1].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[1].description} recipeRating={feedRecipes[1].rating}/>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
            </div>
          </div>
  )
}


export function RecipeBox({recipeName, recipeAuthor, recipeImage, recipeDescription, recipeId, recipeRating}: RecipeCardProps) {
  return (
    
    <Link key={recipeId} className='snap-start flex flex-col justify-center lg:h-[450px] sm:h-[350px] items-center gap-10  lg:w-72 sm:w-44 max-w-7xl rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-orange-100 transition-transform hover:overflow-visible'
        href= {`/recipes/${recipeId}`}>
        <Image src={recipeImage} alt={recipeName} width={300} height={500} className='rounded-lg lg:h-80 lg:w-72  object-cover sm:h-40 sm:w-36' />
        <LargeHeading className='text-center flex-wrap max-w-xs max-h-5 gap-5 sm:text-sm font-medium' size='xxs'>
            {recipeName} 
        </LargeHeading>
        <div className='text-center font-semibold'> {recipeRating} ★ </div>

    </Link>
  )
}
