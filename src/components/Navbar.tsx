import Link from 'next/link'
import Image from 'next/image'
import { Button, buttonVariants } from '@/ui/Button'
import { RecipesMenu } from '@/components/RecipesMenu'
import { EnterMenu } from '@/components/EnterMenu'
import { Search } from 'lucide-react'

const Navbar = () => {
  // const session = await getServerSession()

  return (
    <div className='fixed backdrop-blur-sm bg-orange-400/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 shadow-sm flex'>
      <div className='container max-w-full w-full flex justify-between items-center mx-2 md:mx-5'>
        <Link href='/'>
          <Image src='/logo.png' alt='Goodeats' width={60} height={60} />
        </Link>

        <div className='md:hidden'>
          <Button variant='ghost'>
            <Search />
          </Button>
        </div>

        <div className='hidden md:flex gap-6 md:gap-4'>
          <Button variant='ghost'>
            <Search />
          </Button>
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
