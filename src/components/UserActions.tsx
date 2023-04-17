'use client'

import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/ui/Button'
import { cn } from '@/lib/utils'
import LoggedInMenu from '@/components/LoggedInMenu'

const UserActions = () => {
  const [token, setToken] = React.useState('');
  React.useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken('');
    }
  }, []);

  const session = (token === '') ? false : true;

  return (session ? (
            <LoggedInMenu />
            ): (
            <>
              <Link
                href='/login'
                className={buttonVariants({ variant: 'link' })}>
                Login
              </Link>

              <Link
                href='/signup'
                className={cn(buttonVariants({ variant: 'outline' }), 'text-black border-black hover:text-slate-600 hover:border-slate-600')}>
                Sign up
              </Link>
            </>)
  )
}

export default UserActions
