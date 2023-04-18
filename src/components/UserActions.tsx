'use client'

import React from 'react'
import Link from 'next/link'
import jwt from 'jsonwebtoken'
import { toast } from '@/ui/toast'
import { useRouter } from 'next/navigation'
import { buttonVariants } from '@/ui/Button'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'

const UserActions = () => {
  const [session, setSession] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const router = useRouter();

  React.useEffect(() => {
    const fetchToken = async () => {
      // Check if there's a JWT token in localStorage
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwt.decode(token);
        if (decodedToken) {
          const decodedTokenPayload = decodedToken as jwt.JwtPayload;
          const user = decodedTokenPayload.user;
          setUsername(user);
          setSession(true);
        }
      } else {
        setSession(false);
      }
    }
    fetchToken();
    const intervalId = setInterval(fetchToken, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const signOut = () => {
    toast({
      title: 'Signing out...',
      message: '',
      type: 'default',
      duration: 2500,
    });
    localStorage.removeItem('token');
    setSession(false);
    setTimeout(() => {
      router.push('/');
    }, 2500);
  };

  return (session ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='link' className='center'>
          {username} <Icons.ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem>
          <Link href='/user' className='w-full'>
            My profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href='/collections' className='w-full'>
            My Collections
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a onClick={signOut} className='w-full cursor-pointer'>
            Sign Out
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <>
      <Link
        href='/login'
        className={buttonVariants({ variant: 'link' })}>
        Login
      </Link>

      <Link
        href='/signup'
        className={cn(buttonVariants({ variant: 'default' }))}>
        Sign up
      </Link>
    </>)
  )
}

export default UserActions
