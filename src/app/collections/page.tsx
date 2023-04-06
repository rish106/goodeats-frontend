import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import { RecipeActions } from '@/components/RecipeActions';
import Image from 'next/image';
import React from 'react';
import { feedCollections } from '@/public/data';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Collections',
}

const page: React.FC = () => {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden pb-32'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-8 flex flex-col justify-start items-center'>
          <div className='flex flex-col items-center gap-3'>
            <LargeHeading>
              My Collections
            </LargeHeading>
          </div>
          <div className='h-full gap-6 flex flex-col justify-start items-center w-4/5 min-w-[300px] px-8'>
            {feedCollections.map((collection) => (
              <div key={collection.collectionId} className='flex flex-col md:flex-row gap-4 w-4/5 min-w-[250px] items-start'>
                <div className=''>
                  <Image
                    src={collection.imageUrl}
                    height={250}
                    width={250}
                    alt='thumbnail'
                    className='rounded-lg'
                  />
                </div>
                <div className='flex flex-col gap-1 w-[250px] md:w-[500px]'>
                  <LargeHeading className='text-start' size='xs'>
                    {collection.name}
                  </LargeHeading>
                  <Paragraph size='sm' className='text-start'>
                    {collection.description}
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
