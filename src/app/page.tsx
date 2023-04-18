import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
// import { scrollArea } from '@/components/RecipeSlide'
import Image from 'next/image'
import {RecipeBox}from '@/components/RecipeSlide'
import { feedRecipes } from '@/public/data'
import Paragraph from '@/components/ui/Paragraph'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Goodeats',
  description: 'What would you like to cook today',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden bg-slate-200 overflow-y-scroll'>
      <div className='container pt-32 max-w-full w-full h-full mx-2 md:mx-5'>
        <div className='h-full w-full gap-6 grid grid-row-flow grid-cols-2 justify-start lg:justify-center items-center  lg:items-start'>
        <div className='relative w-full gap-10 flex flex-col h-[530px] items-center justify-center '>
          <LargeHeading className='font-semibold'> Looking for a snack? </LargeHeading>  
          <LargeHeading className='text-wrap font-semibold' size='sm'> Whether you want easy to make homemade food or 
          exquisite dishes and delicacies, We've got you covered.</LargeHeading>  
          <LargeHeading className='font-semibold'>
           welcome to GoodEats! </LargeHeading>     
        </div>
          <div className='w-full h-[600px]'>
          <Image className='w-full h-600 object-cover' src='fryingpantop.jpg' alt='frying pan' width={1000} height={1000} />
          </div>
        </div>
         <div className='items-center  justify-center flex flex-col gap-10 h-[900px] bg-slate-100'>
          <LargeHeading className='font-sans font-medium'>Top Rated</LargeHeading>
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


         </div>
       </div>
  )
 
}