import Image from 'next/image'
import LargeHeading from '@/ui/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import Icons from '@/components/Icons'

export interface RecipeCardProps {
  recipeName: string
  recipeDescription: string
  recipeAuthor: string
  recipeId: number
  recipeImage: string
  recipeRating: number
}

export function RecipeCard({recipeName, recipeAuthor, recipeImage, recipeDescription, recipeId, recipeRating}: RecipeCardProps) {
  return (
    <div className='flex flex-col md:flex-row gap-4 w-full max-w-7xl items-center md:items-start'>
      <Image
        src={recipeImage}
        alt={recipeName}
        width={300}
        height={200}
        className='rounded-lg md:max-h-[150px] md:max-w-[200px] h-[240px] w-[320px]' />
      <div className='flex flex-col w-full'>
        <div className='flex flex-row w-full justify-between gap-4 pb-1'>
          <LargeHeading className='text-start' size='xs'>
            {recipeName}
          </LargeHeading>
          <LargeHeading size='xxs' className='flex flex-row items-center md:gap-1'>
            {recipeRating} <Icons.Star size={20} className='scale-75 md:scale-100' fill='black' />
          </LargeHeading>
        </div>
        <Paragraph className='text-start font-bold'>
          {recipeAuthor}
        </Paragraph>
        <Paragraph size='sm' className='w-full text-start'>
          {recipeDescription.slice(0, 150) + (recipeDescription.length > 150 ? '...' : '')}
        </Paragraph>
      </div>
    </div>
  )
}
