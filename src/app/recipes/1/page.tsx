'use client'

import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import { feedRecipes } from "@/public/data";

// import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const id: number = 1;
const post = feedRecipes.find((recipe) => recipe.recipeId === id);

const Post : React.FC = () => {
  // const router = useRouter()

  return (
    <div>
      <LargeHeading>
        Post {post?.recipeId}
      </LargeHeading>
      <div>
        <Paragraph>
          {`by ${post?.username}`}
        </Paragraph>
        <Paragraph>
          {post?.description}
        </Paragraph>
        <Paragraph>
          {`Posted on ${post?.datepublished}`}
        </Paragraph>
      </div>
    </div>
  )
}

export default Post
