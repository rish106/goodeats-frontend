import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { RecipeActions } from '@/components/RecipeActions';
import Image from 'next/image';
import React from 'react';
import { feedRecipes } from '@/public/data';
import Icons from '@/components/Icons';

const page: React.FC = () => {
  return (
    <div className='max-w-full items-center flex flex-col px-8 py-4 flex-wrap gap-6 flex-1 mt-[80px]'>
      <div className='flex flex-col items-center gap-3'>
        <LargeHeading>
          Browse all Recipes
        </LargeHeading>
      </div>
      {feedRecipes.map((recipe) => (
        <div key={ recipe.recipeId } className='flex flex-col md:flex-row gap-3 min-w-[300px] md:w-[540px] lg:w-[900px] max-w-7xl'>
          <div className=''>
            <Image
              src={ recipe.imageUrl }
              height={320}
              width={320}
              alt='thumbnail'
              className='rounded-lg'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row lg:w-[600px] md:w-[450px] min-w-[300px] justify-between'>
              <LargeHeading size='sm'>
                { recipe.name }
              </LargeHeading>
              <RecipeActions />
            </div>
            <div className='text-md text-slate-700'>
              <Paragraph className='text-start'>{ recipe.username }</Paragraph>
              <div className='flex items-center gap-2'>
                <Paragraph size='sm'>
                  { recipe.reviewcount > 1 ? `${recipe.reviewcount} Reviews` : `${recipe.reviewcount} Review` }
                </Paragraph>
                <Paragraph size='sm'>
                  { `Posted on ${recipe.datepublished.toDateString()}` }
                </Paragraph>
              </div>
              <Paragraph size='sm' className='text-start'>
                { recipe.description }
              </Paragraph>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page
