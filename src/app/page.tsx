import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
// import { scrollArea } from '@/components/RecipeSlide'
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
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center bg-slate-800 lg:items-start'>
        <div className='relative gap-4 flex flex-col h-screen overflow-x-hidden items-center justify-center bg-slate-400'>
          <LargeHeading> Looking for a snack? </LargeHeading>  
          <LargeHeading className='text-wrap' size='xs'> Whether you want easy to make homemade food <br></br>or 
          exquisite dishes and delicacies,<br></br> We've got you covered.</LargeHeading>  
          <Paragraph className=''>
           welcome to GoodEats! </Paragraph>     
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