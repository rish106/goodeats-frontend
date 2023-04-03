import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/ui/Button'
import { RecipesMenu } from '@/components/RecipesMenu'
import { EnterMenu } from '@/components/EnterMenu'

interface NavbarProps {}

const Navbar = () => {
  // const session = await getServerSession()

  return (
    <div className='absolute backdrop-blur-sm bg-white/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 shadow-sm flex'>
      <div className='container w-full flex justify-between items-center'>
        <Link
          href='/'
          className='mx-2 md:mx-5'>
          <Image src='/logo.png' alt='Goodeats' width={60} height={60} />
        </Link>

        <div className='md:hidden'>
        </div>

        <div className='hidden md:flex gap-6'>
          <Link
            href='/about-us'
            className={buttonVariants({ variant: 'link' })}>
            About Us
          </Link>
          <RecipesMenu />
          <EnterMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar
