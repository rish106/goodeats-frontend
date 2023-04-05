import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants, IconButton } from '@/ui/Button'
import { RecipesMenu } from '@/components/RecipesMenu'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const id = 'yoyo';

const Navbar = () => {
  // const session = await getServerSession()

  return (
    <div className='fixed backdrop-blur-sm bg-orange-400/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 shadow-sm flex'>
      <div className='container max-w-full w-full flex justify-between items-center mx-2 md:mx-5'>
        <Link href='/'>
          <Image src='/logo.png' alt='Goodeats' width={50} height={50} className='transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 ' />
        </Link>

        <div className='md:hidden'>
          <IconButton icon={Search} variant='ghost' className='hover:bg-transparent' />
        </div>

        <div className='hidden md:flex gap-5 md:gap-4'>
          <IconButton icon={Search} variant='ghost' className='hover:bg-transparent focus:ring-black' />
          <Link
            href='/about-us'
            className={buttonVariants({ variant: 'link' })}>
            About Us
          </Link>

          <Link  href={`/recipes/${id}`} className={buttonVariants({ variant : 'link'})}>
            RecipeID
          </Link>

          <RecipesMenu />

          <Link
            href='/login'
            className={cn(buttonVariants({ variant: 'link' }), 'hover:bg-transparent')}>
            Login
          </Link>

          <Link
            href='/signup'
            className={cn(buttonVariants({ variant: 'outline' }), 'text-black border-black hover:text-slate-600 hover:border-slate-600')}>
            Sign up
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar
