'use client'

import Image from 'next/image';
import useSWR from 'swr';
import LargeHeading from '@/components/ui/LargeHeading';
import Paragraph from '@/components/ui/Paragraph';
import Icons from '@/components/Icons';
import CommentForm from '@/components/CommentForm';
import { RecipeActions } from '@/components/RecipeActions';
import { CommentCard } from '@/components/CommentCard';
// import { useRouter } from 'next/router';

interface ingredient {
  amount: string;
  name: string;
}

interface PageProps {
  params: { id: string };
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

const Page = ({ params }: PageProps) => {

  const recipeData = useSWR(`/api/recipe/${params.id}`, fetcher)
  const commentData = useSWR(`/api/recipe/${params.id}/reviews`, fetcher)

  if (recipeData.error || commentData.error) return (
    <div className='pt-32'>
      <LargeHeading>
        Error fetching data
      </LargeHeading>
    </div>
  )

  if (!recipeData.data || !commentData.data) return (
    <div className='pt-32'>
      <LargeHeading>
        Loading...
      </LargeHeading>
    </div>
  )

  const post = recipeData.data;
  let comments = commentData.data.other_reviews || [];
  // comments += commentData.data.user_reviews || [];
  const comment = comments[0];

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container max-w-full mx-auto w-full h-full'>
        <div className='h-full gap-0 flex flex-col justify-start items-center'>
          <div className='flex pt-32 flex-col justify-between items-center gap-8 md:flex-row md:px-10 bg-violet-800 w-full px-8 pb-8'>
            <div className='flex flex-col justify-center items-center'>
              <LargeHeading className='text-white text-center w-full pb-2'>
                {post.name}
              </LargeHeading>
              <LargeHeading size='xs' className='text-white font-bold pb-2'>
                {`${post.username}`}
              </LargeHeading>
              <Paragraph className='text-white flex flex-row items-center pb-1'>
                {`${post.avgRating}  `} <Icons.Star size={16} />
              </Paragraph>
              <Paragraph className='text-white pb-1'>
                {`Cook : ${post.cooktime}`}
              </Paragraph>
              <Paragraph className='text-white pb-1'>
                {`Prep : ${post.preptime}`}
              </Paragraph>
              <RecipeActions />
            </div>
            <Image src={`/static/recipe_pics/${post.recipe_image}`} alt='Recipe Image' width={500} height={500} />
          </div>
          <div className='flex flex-col justify-center gap-6 md:gap-32 md:flex-row bg-slate-100 w-full pt-8 pb-8'>
            <div className='flex flex-col justify-start items-center gap-1'>
              <LargeHeading size='xs'>
               Ingredients
              </LargeHeading>
              <div className='flex flex-row justify-start items-center gap-8'>
                <div className='flex flex-col justify-center items-center'>
                  {post.ingredients.map((ingredient: ingredient) => (
                    <Paragraph key={ingredient.name} className='text-end'>
                        {ingredient.amount}
                    </Paragraph>
                  ))}
                </div>
                <div className='flex flex-col justify-center items-center'>
                  {post.ingredients.map((ingredient: ingredient) => (
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
          <div className='flex flex-col items-center justify-center bg-purple-800 w-full pt-8 pb-8'>
            <CommentForm id={params.id} />
            {
              comments.length === 0 ? (
                <Paragraph className='text-white'>
                  No reviews yet
                </Paragraph>
              ) : (
                <>
                  <CommentCard id={comment.id} key={comment.review_id} author={comment.user_id} message={comment.reviewText} rating={comment.rating} />
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
