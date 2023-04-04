import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import Image from 'next/image';
import React from 'react';
import { feedRecipes } from '@/public/data';

const page: React.FC = () => {
  return (
    <div className='max-w-full items-center flex flex-col px-8 py-4 flex-wrap gap-6 flex-1 mt-[80px]'>
      {feedRecipes.map((recipe) => (
        <div className='flex flex-col md:flex-row gap-3 min-w-[360px] md:w-[520px] lg:w-[800px] max-w-7xl'>
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
            <div className='flex justify-between'>
              <LargeHeading size='sm'>
                { recipe.name }
              </LargeHeading>
            </div>
            <div className='text-md text-slate-700'>
              <Paragraph size='default' className='start'>{ recipe.username }</Paragraph>
              <div className='flex items-center gap-2'>
                <span>{ recipe.reviewcount }</span>
                <span>{ recipe.datepublished.toDateString() }</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page
