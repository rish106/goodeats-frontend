import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
// import { scrollArea } from '@/components/RecipeSlide'
import {RecipeBox}from '@/components/RecipeSlide'
import { feedRecipes } from '@/public/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goodeats',
  description: 'What would you like to cook today',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden overflow-y-scroll'>
      <div className='container pt-32 max-w-full w-full h-full mx-2 md:mx-5'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
        <div className='relative flex flex-col h-screen overflow-x-hidden items-center justify-center '>
          <LargeHeading> Ready to eat your heart out?</LargeHeading>         
        </div>
          </div>
         <div className='items-center justify-center flex flex-col h-[440px]'>
          <div className='flex-none justify-center inset-x-12 grid grid-rows-1 grid-flow-col gap-4 overflow-x-scroll 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm'>
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[0].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
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
                <RecipeBox recipeName= {feedRecipes[0].name} recipeAuthor={feedRecipes[0].username} recipeId={feedRecipes[0].recipeId} 
                recipeImage={feedRecipes[1].imageUrl} recipeDescription={feedRecipes[0].description} recipeRating={feedRecipes[0].rating}/>
            </div>
          </div>


         </div>
       </div>
  )
 
}