import { Metadata } from 'next'
import LargeHeading from '@/ui/LargeHeading'
import { ScrollArea } from '@/components/RecipeSlide'
import Image from 'next/image'
import { feedRecipes } from '@/public/data'
import Link from 'next/link'
export const metadata: Metadata = {
  title: 'Goodeats',
  description: 'What would you like to cook today',
}

async function getTopRecipes() {
  const res = await fetch(`http://127.0.0.1:5000/`);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const topRecipesPromise = getTopRecipes();
  const [topRecipes] = await Promise.all([topRecipesPromise]);

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden bg-slate-200 overflow-y-scroll'>
      <div className='container pt-32 max-w-full w-full h-full mx-2 md:mx-5'>
        <div className='h-full w-full gap-6 grid grid-row-flow grid-cols-2 justify-start lg:justify-center items-center  lg:items-start rounded-md'>
          <div className='relative w-full gap-10 flex flex-col h-[530px] items-center justify-center '>
            <LargeHeading className='font-semibold'>
              Looking for a snack?
            </LargeHeading>
            <LargeHeading className='text-wrap font-semibold' size='sm'>
              Whether you want easy to make homemade food or exquisite dishes and delicacies, We&apos;ve got you covered.
            </LargeHeading>
            <LargeHeading className='font-semibold'>
              Welcome to GoodEats!
            </LargeHeading>
          </div>
          <div className='w-full h-[600px]'>
            <Image className='w-full h-600 object-cover' src='fryingpantop.jpg' alt='frying pan' width={1000} height={1000} />
          </div>
        </div>

        <ScrollArea feedRecipes={topRecipes} header='Top Rated' />

        <ScrollArea feedRecipes={feedRecipes} header='Recommended for you' />

        <div className='flex flex-row justify-center h-[500px] items-center gap-6  bg-slate-300'>
          <Link href='/recipes' className='flex flex-col h-2/3 w-1/4 items-center hover:scale-102 hover:shadow-2xl hover:bg-gray-700 bg-slate-600 rounded-3xl align-middle'>
            <div className='h-1/3'></div>
              <LargeHeading size={'sm'} className='font-light w-4/5 align-middle text-white'>
                Want something more appetising?
                View all recipes
              </LargeHeading>

          </Link>

          <Link href='/post-recipe' className='flex flex-col h-2/3 w-1/4 items-center hover:scale-102 hover:shadow-2xl hover:bg-gray-700 bg-slate-600 rounded-3xl align-middle'>
            <div className='h-1/3'></div>
            <LargeHeading size={'sm'} className='font-light w-4/5 align-middle text-white'>
                Got a new creation?
                Post it here!
              </LargeHeading>
          </Link>
        
        </div>
      </div>
    </div>
  )

}