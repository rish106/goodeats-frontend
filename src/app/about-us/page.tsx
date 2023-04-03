import * as React from 'react'
import LargeHeading from '@/ui/LargeHeading'

const page: React.FC = () => {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-6 flex flex-col justify-start items-center'>
          <LargeHeading size='lg' className='text-black'>
            About Us
          </LargeHeading>
          <div className='grid items-center justify-center'>
            <div>
              <span>abcd</span>
            </div>
            <div>
              <span>abcd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
