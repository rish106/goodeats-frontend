'use client'

import React from 'react'
import Link from 'next/link'
import jwt from 'jsonwebtoken'
import { toast } from '@/ui/toast'
import { useRouter } from 'next/navigation'
import { buttonVariants } from '@/ui/Button'
import { Icons } from '@/components/Icons'
import { Button } from '@/ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/DropdownMenu'

const UserActions = () => {
  const [session, setSession] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [dropdownOpen, setDropdownOpen] = React.useState(false)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
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
      duration: 1500,
    });
    localStorage.removeItem('token');
    setSession(false);
    setTimeout(() => {
      router.push('/');
    }, 500);
  };

  return (session ? (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant='link' className='font-bold center gap-2' onClick={toggleDropdown}>
          {username} <Icons.ChevronDown size={16} strokeWidth={3} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuGroup onClick={toggleDropdown}>
          <DropdownMenuItem>
            <Link href={`/user/${username}`} className='w-full h-full'>
              My Profile
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
        </DropdownMenuGroup>
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
        className={buttonVariants({ variant: 'default' })}>
        Sign up
      </Link>
    </>
    )
  )
}

export default UserActions
