'use client'

import React from 'react'
import Link from 'next/link'
import * as jose from 'jose';
import Drawer from '@mui/material/Drawer'
import { useRouter } from 'next/navigation'
import { Button, buttonVariants, IconButton } from '@/ui/Button'
import { Icons } from '@/components/Icons'
import { toast } from '@/ui/toast'
import { cn } from '@/lib/utils';

const MobileMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const [session, setSession] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const router = useRouter();

  React.useEffect(() => {
    const fetchToken = async () => {
      // Check if there's a JWT token in localStorage
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const payload = jose.decodeJwt(token);
          if (payload) {
            const user = payload.user as string;
            setUsername(user);
            setSession(true);
          } else {
            setSession(false);
          }
        } catch (err) {
          setSession(false);
        }
      } else {
        setSession(false);
      }
    }
    fetchToken();
    const intervalId = setInterval(fetchToken, 1000);
    return () => clearInterval(intervalId);
  }, []);


  function toggleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  const signOut = () => {
    toast({
      title: 'Signing out...',
      message: '',
      type: 'default',
      duration: 1000,
    });
    localStorage.removeItem('token');
    setSession(false);
    setTimeout(() => {
      toggleDrawer();
      router.push('/');
    }, 1000);
  };

  return (
    <div className='flex flex-row md:hidden gap-4'>
      <IconButton icon={Icons.Menu} variant='ghost' className='hover:bg-transparent focus:ring-0 focus:ring-offset-0' onClick={toggleDrawer} />
      <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer}>
        <div className='container h-full bg-orange-300/90 flex flex-col w-[180px] items-center pt-6'>
          <div className='flex flex-col w-4/5 items-center gap-4'>
            <Link href='/about-us' className={buttonVariants({ variant: 'link' })} onClick={toggleDrawer}>
              About Us
            </Link>
            <Link href='/recipes' className={buttonVariants({ variant: 'link' })} onClick={toggleDrawer}>
              All Recipes
            </Link>
            <Link href='/post-recipe' className={buttonVariants({ variant: 'link' })} onClick={toggleDrawer}>
              Post a Recipe
            </Link>
            {
              session ? (
                <>
                  <Link
                    href={`/user/${username}`}
                    className={cn(buttonVariants({ variant: 'link' }), 'text-center')}
                    onClick={toggleDrawer}>
                    {username}&apos;s Profile
                  </Link>
                  <Link
                    href='/collections'
                    className={buttonVariants({ variant: 'link' })}
                    onClick={toggleDrawer}>
                    My Collections
                  </Link>
                  <Button
                    onClick={signOut}
                    variant='link'>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    href='/login'
                    className={buttonVariants({ variant: 'link' })}
                    onClick={toggleDrawer}>
                    Login
                  </Link>

                  <Link
                    href='/signup'
                    className={buttonVariants({ variant: 'default' })}
                    onClick={toggleDrawer}>
                    Sign up
                  </Link>
                </>
              )
            }
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default MobileMenu
