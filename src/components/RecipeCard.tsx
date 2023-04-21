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
    <div key={recipeId} className='flex flex-col md:flex-row gap-4 w-full max-w-7xl'>
      <Image
        src={`/static/recipe_pics/${recipeImage}`}
        alt={recipeName}
        width={200}
        height={200}
        className='rounded-lg md:h-[150px] md:w-[200px] h-[240px] w-[320px]' />
      <div className='flex flex-col'>
        <div className='flex flex-row w-full justify-between pb-1'>
          <LargeHeading className='text-start' size='xs'>
            {recipeName}
          </LargeHeading>
        </div>
        <div className='flex flex-row gap-4'>
          <Paragraph className='text-start font-bold'>
            {recipeAuthor}
          </Paragraph>
          <Paragraph>
            {recipeRating} <Icons.Star size={16} fill='black' />
          </Paragraph>
        </div>
        <Paragraph size='sm' className='w-full text-start'>
          {recipeDescription.slice(0, 150) + (recipeDescription.length > 150 ? '...' : '')}
        </Paragraph>
      </div>
    </div>
  )
}
