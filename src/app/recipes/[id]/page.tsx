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

export async function generateMetadata({ params }) {
  const postPromise = getRecipeById(params.id);
  const [post] = await Promise.all([postPromise]);
  return {
    title: `Goodeats | ${post.name}`,
  };
}

async function getRecipeById(id: string) {
  const res = await fetch(`http://127.0.0.1:5000/recipe/${id}`);
  const data = await res.json();
  return data;
}

async function getCommentsById(id: string) {
  const res = await fetch(`http://127.0.0.1:5000/recipe/${id}/reviews`);
  const data = await res.json();
  return data;
}

const Page = async ({ params }: PageProps) => {

  const postPromise = getRecipeById(params.id);
  const commentDataPromise = getCommentsById(params.id);

  const [post, commentData] = await Promise.all([postPromise, commentDataPromise]);

  const comments = [...commentData.user_reviews, ...commentData.other_reviews];

  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container max-w-full mx-auto w-full h-full'>
        <div className='h-full gap-0 flex flex-col justify-start items-center'>
          <div className='flex pt-32 flex-col-reverse justify-between items-center gap-8 md:flex-row bg-violet-800 w-full px-8 pb-8'>
            <div className='flex flex-col md:w-1/2 justify-center gap-3 items-center'>
              <LargeHeading className='text-white text-center w-full'>
                {post.name}
              </LargeHeading>
              <LargeHeading size='xs' className='text-white font-bold'>
                {`${post.username}`}
              </LargeHeading>
              <LargeHeading size='xs' className='text-white flex flex-row items-center gap-1'>
                {`${post.avgRating}  `} <Icons.Star size={28} fill='white' />
              </LargeHeading>
              <div className='flex flex-col md:flex-row md:gap-6 -mb-2'>
                <Paragraph className='text-white'>
                  {`Cook : ${post.cooktime}`}
                </Paragraph>
                <Paragraph className='text-white'>
                  {`Prep : ${post.preptime}`}
                </Paragraph>
              </div>
              <RecipeActions />
            </div>
            <Image
              src={`/static/recipe_pics/${post.recipe_image}`}
              alt='Recipe Image'
              className='md:w-1/2'
              width={500}
              height={500} />
          </div>
          <div className='flex flex-col justify-center gap-6 md:gap-32 md:flex-row bg-slate-100 w-full px-8 py-8'>
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
          <div className='flex flex-col items-center justify-center bg-violet-800 gap-8 w-full py-8 px-8'>
            <CommentForm id={params.id} />
            {
              comments.length === 0 ? (
                <Paragraph className='text-white'>
                  No reviews yet
                </Paragraph>
              ) : (
                <div className='flex flex-col items-center justify-start w-full gap-4 pt-4'>
                  {
                    comments.map((comment: any) =>
                      <CommentCard id={comment.id} key={comment.review_id} author={comment.user_id} message={comment.reviewText} rating={comment.rating} />
                    )
                  }
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
