'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const id = "r";

const Post : React.FC = () => {
  const router = useRouter()
  const { id } = useSearchParams();

  return <p>Post: {id}</p>
}


export async function getStaticPaths() {
    // Return a list of possible value for id
  }
  
  export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
  }
export default Post