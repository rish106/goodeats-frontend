'use client'

import * as React from 'react'

import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/Button'
import { Link } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

export function RecipesMenu() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='link' className='center'>
          Recipes <Icons.ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem>
          <a href='/all-recipes'>All Recipes</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href='/post-recipe'>Post a Recipe</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {/* <Link href='/collections' className={buttonVariants({ variant: 'link' })}> */}
            <a href='/collections'>Collections</a>
          {/* </Link> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
