import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { RecipeActions } from '@/components/RecipeActions';
import Image from 'next/image';
import React from 'react';
import { feedRecipes } from '@/public/data';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browse Recipes',
}

const page: React.FC = () => {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-8 flex flex-col justify-start items-center'>
          <div className='flex flex-col items-center gap-3'>
            <LargeHeading>
              Browse all Recipes
            </LargeHeading>
          </div>
          <div className='h-full flex flex-col justify-start items-center px-8'>
            {feedRecipes.map((recipe) => (
              <div key={recipe.recipeId} className='flex flex-col md:flex-row gap-4 min-w-[300px] md:w-[720px] lg:w-[900px] max-w-7xl pb-6'>
                <div className=''>
                  <Image
                    src={recipe.imageUrl}
                    height={320}
                    width={320}
                    alt='thumbnail'
                    className='rounded-lg'
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex flex-row lg:w-[600px] md:w-[450px] min-w-[300px] justify-between'>
                    <LargeHeading className='text-start' size='xs'>
                      {recipe.name}
                    </LargeHeading>
                    <RecipeActions />
                  </div>
                  <Paragraph className='text-start font-bold'>
                    {recipe.username}
                  </Paragraph>
                  <Paragraph size='sm' className='text-start'>
                    {recipe.description}
                  </Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page
