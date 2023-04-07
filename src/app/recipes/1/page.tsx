'use client'

import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import Image from 'next/image';
import { feedRecipes } from '@/public/data';
import Icons from '@/components/Icons';
import CommentForm from '@/components/CommentForm';

// import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const id: number = 1;
let post = feedRecipes[0];

const Post : React.FC = () => {
  // const router = useRouter()

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container max-w-full mx-auto w-full h-full'>
        <div className='h-full gap-0 flex flex-col justify-start items-center'>
          <div className='flex pt-32 flex-col-reverse justify-between items-center gap-8 md:flex-row md:px-10 bg-violet-800 w-full px-8 pb-8'>
            <div className='flex flex-col justify-center items-center'>
              <LargeHeading className='text-white text-center w-full pb-2'>
                {post.name}
              </LargeHeading>
              <LargeHeading size='xs' className='text-white font-bold pb-2'>
                {`${post.username}`}
              </LargeHeading>
              <Paragraph className='text-white flex flex-row items-center pb-1'>
                {`${post.rating}  `} <Icons.Star size={16} />
              </Paragraph>
              <Paragraph className='text-white pb-1'>
                {`Cook : ${post.cooktime}`}
              </Paragraph>
              <Paragraph className='text-white pb-1'>
                {`Prep : ${post.preptime}`}
              </Paragraph>
            </div>
            <Image src={post.imageUrl} height={500} width={500} alt='thumbnail' className='rounded-xl' />
          </div>
          <div className='flex flex-col justify-center gap-6 md:gap-32 md:flex-row bg-slate-100 w-full pt-8 pb-8'>
            <div className='flex flex-col justify-start items-center gap-1'>
              <LargeHeading size='xs'>
               Ingredients
              </LargeHeading>
              <div className='flex flex-row justify-start items-center gap-8'>
                <div className='flex flex-col justify-center items-center'>
                  {post.ingredients.map((ingredient) => (
                    <Paragraph key={ingredient.quantity} className='text-end'>
                        {ingredient.quantity}
                    </Paragraph>
                  ))}
                </div>
                <div className='flex flex-col justify-center items-center'>
                  {post.ingredients.map((ingredient) => (
                    <Paragraph key={ingredient.name} className='text-start w-full'>
                        {ingredient.name}
                    </Paragraph>
                  ))}
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-start items-center gap-1 px-8'>
              <LargeHeading size='xs'>
                Instructions
              </LargeHeading>
              <Paragraph size='sm' className='text-start'>
                {post.instructions}
              </Paragraph>
            </div>
          </div>
          <div className='flex flex-col justify-center bg-purple-800 w-full pt-8 pb-8'>
            <CommentForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post