'use client'

import * as React from 'react'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import Link from 'next/link'

export function EnterMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='link' className='center'>
          Enter <Icons.ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem>
          <Link href='/login' className='w-full'>
            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/signup' className='w-full'>
            Sign Up
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
