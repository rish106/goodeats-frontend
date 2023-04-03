import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import Link from 'next/link'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm'

const page: React.FC = () => {
  return (
    <div className='absolute inset-0 mx-auto container flex h-screen flex-row items-center justify-between'>
      <div className='hidden lg:flex max-w-7xl w-1/2 h-full px-10'>
        <Image src='/food-1.jpg' alt='' width={1000} height={1000} className='w-full h-full object-contain' />
      </div>
      <div className='mx-auto max-w-7xl w-1/2 flex flex-col items-center space-y-6 px-10'>
        <div className='flex flex-col items-center gap-5 text-center'>
          <LargeHeading>Welcome back!</LargeHeading>
          <LoginForm />
          <div className='flex items-center'>
            <Paragraph size='sm'>
              Don&apos;t have an account? {' '}
              <Link href='/signup' className='underline underline-offset-2 font-medium text-black'>
                Sign Up
              </Link>
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
