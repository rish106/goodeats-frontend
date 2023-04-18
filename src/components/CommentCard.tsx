'use client'

import Paragraph from '@/ui/Paragraph'

interface CommentCardProps {
  id: number;
  author: string;
  message: string;
  rating: number;
}

export function CommentCard({id, author, message, rating}: CommentCardProps) {
  return (
    <div className='w-full md:w-3/5 px-4 flex flex-col items-center'>
      <div key={id} className='flex flex-col md:flex-row gap-4 w-full max-w-7xl'>
        <div className='flex flex-col'>
          <Paragraph className='font-bold text-start text-white'>
            {author}
          </Paragraph>
          <Paragraph size='sm' className='w-full text-start text-white'>
            {message}
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
