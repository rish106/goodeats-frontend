import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/ui/LargeHeading'
import type {RecipeCardProps} from '@/components/RecipeCard'
import type {Recipe} from '@/public/data'
import Icons from '@/components/Icons'

interface scrollAreaProps
{
  feedRecipes: Array<Recipe>
  header: string
}

export function ScrollArea({feedRecipes, header}:scrollAreaProps) {
  // let feedRecipes = await getAllRecipes();
  return (
    <div className='items-center  justify-center flex flex-col gap-10 h-[900px] bg-slate-100'>
      <LargeHeading className='font-sans font-medium'>
        {header}
      </LargeHeading>
      <div className='px-8 h-[600px] justify-start items-center inset-x-20 grid grid-rows-1 grid-flow-col gap-8 overflow-y-visible overflow-x-scroll 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm'>
        {feedRecipes.map((recipe) => {
            return (
              <RecipeBox key={recipe.id} recipeName={recipe.name} recipeAuthor={recipe.username} recipeId={recipe.id}
                recipeImage={`static/recipe_pics/${recipe.recipe_image}`} recipeDescription={recipe.description} recipeRating={recipe.rating} />
            )
          })
        }
      </div>
    </div>
  )
}


export function RecipeBox({recipeName, recipeAuthor, recipeImage, recipeDescription, recipeId, recipeRating}: RecipeCardProps) {
  return (
    <Link className='snap-start flex flex-col justify-center lg:h-[450px] sm:h-[350px] items-center gap-10  lg:w-72 sm:w-44 max-w-7xl rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-orange-100 transition-transform hover:overflow-visible'
      href={`/recipes/${recipeId}`}>
      <Image src={recipeImage} alt={recipeName} width={300} height={500} className='rounded-lg lg:h-80 lg:w-72  object-cover sm:h-40 sm:w-36' />
      <LargeHeading className='text-center flex-wrap max-w-xs max-h-5 gap-5 sm:text-sm font-medium' size='xxs'>
        {recipeName}
      </LargeHeading>
      <div className='text-center font-semibold flex flex-row items-center'>
        {recipeRating} <Icons.Star size={16} fill='black' />
      </div>
    </Link>
  )
}
