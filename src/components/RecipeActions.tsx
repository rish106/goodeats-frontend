import { Icons } from '@/components/Icons'
import { IconButton } from '@/components/ui/Button'

export function RecipeActions() {
  return (
    <div>
      <div className='hidden md:flex flex-row items-center gap-2'>
        <IconButton icon={Icons.Heart} variant='ghost' />
        <IconButton icon={Icons.Plus} variant='ghost' />
      </div>
      <div className='md:hidden flex flex-row items-center gap-2'>
        <IconButton icon={Icons.Heart} variant='ghost' size='sm' />
        <IconButton icon={Icons.Plus} variant='ghost' size='sm' />
      </div>
    </div>
  )
}
