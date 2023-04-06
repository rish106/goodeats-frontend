'use client'

import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import Image from 'next/image';
import { feedRecipes } from '@/public/data';
import Icons from '@/components/Icons';

// import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const id: number = 1;
let post = feedRecipes[0];

const Post : React.FC = () => {
  // const router = useRouter()

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container max-w-full mx-auto w-full h-full'>
        <div className='h-full gap-0 flex flex-col justify-start items-center'>
          <div className='flex pt-32 flex-col-reverse justify-between items-center gap-8 md:flex-row md:px-10 bg-violet-800 w-full pb-8'>
            <div className='flex flex-col justify-center items-center gap-2 sm:gap-[1px]'>
              <LargeHeading className='text-white text-center w-full'>
                {post.name}
              </LargeHeading>
              <LargeHeading size='xs' className='text-white font-bold'>
                {`${post.username}`}
              </LargeHeading>
              <Paragraph className='text-white flex flex-row items-center'>
                {`${post.rating}  `} <Icons.Star size={16} />
              </Paragraph>
              <Paragraph className='text-white'>
                {`Cook : ${post.cooktime}`}
              </Paragraph>
              <Paragraph className='text-white'>
                {`Prep : ${post.preptime}`}
              </Paragraph>
            </div>
            <Image src={post.imageUrl} height={500} width={500} alt='thumbnail' className='rounded-xl' />
          </div>
          <div className='flex flex-col justify-center gap-32 md:flex-row bg-slate-100 w-full pt-8 pb-8'>
            <div className='flex flex-col justify-start items-center gap-1'>
              <LargeHeading size='xs'>
               Ingredients
              </LargeHeading>
              <div className='flex flex-row justify-start items-center gap-8'>
                <div className='flex flex-col justify-center items-center gap-1'>
                  {post.ingredients.map((ingredient) => (
                    <Paragraph className='text-end'>
                        {ingredient.quantity}
                    </Paragraph>
                  ))}
                </div>
                <div className='flex flex-col justify-center items-center gap-1'>
                  {post.ingredients.map((ingredient) => (
                    <Paragraph className='text-start w-full'>
                        {ingredient.name}
                    </Paragraph>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-center gap-1'>
              <LargeHeading size='xs'>
                Instructions
              </LargeHeading>
              <Paragraph size='sm' className='text-start'>
                {post.instructions}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
