'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import LargeHeading from '@/ui/LargeHeading';
import NewCollectionDialog from './NewCollectionDialog';
import Paragraph from './myUI/Paragraph';
import { feedCollections } from '@/public/data';

interface collectionProps {
  secret: string
}

export const UserCollections = ({ secret }: collectionProps) => {
  let token = '' as string | null;
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }
  useEffect(() => {
    localStorage.getItem('token') ? setIsAuthenticated(true) : setIsAuthenticated(false);
  }, [token, secret]);

  if (token === '') return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden pb-32'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='flex flex-col items-center'>
          <LargeHeading>
            Loading...
          </LargeHeading>
        </div>
      </div>
    </div>
  )

  if (!isAuthenticated) return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden pb-32'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='flex flex-col items-center'>
          <LargeHeading>
            You must be logged in to view this page
          </LargeHeading>
        </div>
      </div>
    </div>
  )

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden pb-32'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-8 flex flex-col justify-start items-center'>
          <div className='flex flex-row items-center gap-6'>
            <LargeHeading>
              My Collections
            </LargeHeading>
            <NewCollectionDialog />
          </div>
          <div className='h-full flex flex-col justify-start items-center w-full px-8'>
            {
              feedCollections.length === 0 ? (
                <div className='flex flex-col items-center'>
                  <LargeHeading size='xs'>
                    You have no collections
                  </LargeHeading>
                  <Paragraph>
                    Create a new collection to get started
                  </Paragraph>
                </div>
              ) : feedCollections.map((collection) => (
                <div key={collection.collectionId} className='flex flex-col items-center md:items-start md:flex-row gap-4 md:w-[720px] lg:w-[900px] max-w-7xl pb-6'>
                  <div className=''>
                    <Image
                      src={collection.recipe_image}
                      height={250}
                      width={250}
                      alt='thumbnail'
                      className='rounded-xl'
                    />
                  </div>
                  <div className='flex flex-col gap-1 w-[250px] md:w-full'>
                    <LargeHeading className='text-start' size='xs'>
                      {collection.name}
                    </LargeHeading>
                    <Paragraph size='sm' className='text-start'>
                      {collection.description}
                    </Paragraph>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
