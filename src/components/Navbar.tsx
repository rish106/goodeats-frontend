import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants, IconButton } from '@/ui/Button'
import { RecipesMenu } from '@/components/RecipesMenu'
import { Icons } from '@/components/Icons'
import MobileMenu from '@/components/MobileMenu'
import UserActions from '@/components/UserActions'

const Navbar = () => {
  return (
    <div className='fixed backdrop-blur-sm bg-orange-400/75 dark:bg-cyan-200/80 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 shadow-sm flex'>
      <div className='container max-w-full w-full flex justify-between items-center mx-2 md:mx-5'>
        <Link href='/'>
          <Image src='/logo.png' alt='Goodeats' width={50} height={50} />
        </Link>

        <div className='md:hidden gap-4'>
          <MobileMenu />
        </div>

        <div className='hidden md:flex gap-5 md:gap-4'>
          <IconButton icon={Icons.Search} variant='ghost' className='hover:bg-transparent focus:ring-black' />
          <Link href='/about-us' className={buttonVariants({ variant: 'link' })}>
            About Us
          </Link>

          <RecipesMenu />

          <UserActions />

        </div>
      </div>
    </div>
  )
}

export default Navbar
