'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const id = "r";

const Post : React.FC = () => {
  const router = useRouter()

  return <p>Post: {id}</p>
}


export async function getStaticPaths() {
    // Return a list of possible value for id
  }

export default Post
