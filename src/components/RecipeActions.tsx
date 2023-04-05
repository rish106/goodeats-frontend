import { Icons } from '@/components/Icons'
import { Button, buttonVariants, IconButton } from '@/components/ui/Button'

export function RecipeActions() {
  return (
    <div className='flex flex-row items-center gap-2'>
      <IconButton icon={ Icons.Heart } size={10} />
      <IconButton icon={ Icons.Plus } size={10} />
      <IconButton icon={ Icons.Share } size={10} />
    </div>
  )
}
