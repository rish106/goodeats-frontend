import { Metadata } from 'next'
import LargeHeading from '@/components/ui/LargeHeading'
import { ScrollArea } from '@/components/RecipeSlide'
import Image from 'next/image'
import { feedRecipes } from '@/public/data'

export const metadata: Metadata = {
  title: 'Goodeats',
  description: 'What would you like to cook today',
}
async function getAllRecipes() {
  const res = await fetch('http://127.0.0.1:5000/');
  return res.json();
}
export default async function Home() {
  // let feedRecipes = await getAllRecipes();

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
        <div className='h-full w-full gap-6 grid grid-row-flow grid-cols-2 justify-start lg:justify-center items-center  lg:items-start'>
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
      </div>
    </div>
  )

}
