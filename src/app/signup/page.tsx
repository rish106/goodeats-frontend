import Paragraph from '@/ui/Paragraph'
import LargeHeading from '@/ui/LargeHeading'
import Link from 'next/link'
import Image from 'next/image'
import SignupForm from '@/components/SignupForm'

const page: React.FC = () => {
  return (
    <div className='absolute inset-0 mx-auto container flex h-screen flex-row items-center justify-center'>
      <div className='hidden lg:flex max-w-lg h-full'>
        <Image src='/food-1.jpg' alt='' width={600} height={600} className='w-full h-full object-contain' />
      </div>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg px-10'>
        <div className='flex flex-col items-center gap-5 text-center'>
          <LargeHeading>Welcome!</LargeHeading>
          <SignupForm />
          <div className='flex items-center'>
            <Paragraph size='sm'>
              Have an account already? {' '}
              <Link href='/login' className='underline underline-offset-2 font-medium text-black'>
                Login
              </Link>
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
