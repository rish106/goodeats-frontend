import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

interface NavbarProps {}

const Navbar = () => {
  // const session = await getServerSession()

  return (
    <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex'>
      <div className='container max-w-7xl w-full flex justify-between items-center'>
        <Link
          href='/'
          className={buttonVariants({ variant: 'link' })}>
          Goodeats
        </Link>

        <div className='md:hidden'>
          <ThemeToggle />
        </div>

        <div className='hidden md:flex gap-4'>
          <ThemeToggle />
          <Link
            href='/about-us'
            className={buttonVariants({ variant: 'ghost' })}>
            About Us
          </Link>
          <Link
            href='/recipes'
            className={buttonVariants({ variant: 'ghost' })}>
            Recipes
          </Link>
          <Link
            href='/login'
            className={buttonVariants({ variant: 'ghost' })}>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
