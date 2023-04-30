'use client'

import React from 'react';
import useSWR from 'swr';
import * as jose from 'jose';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Icons from '@/components/Icons';
import LargeHeading from '@/ui/LargeHeading';
import Paragraph from '@/ui/Paragraph';
import { Button, buttonVariants } from '@/ui/Button';
import { toast } from '@/ui/toast';
import { cn } from '@/lib/utils';

interface PageProps {
  params: {
    username: string
  }
}

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

export default function Page ({ params }: PageProps) {
  const { username } = params;
  const userData = useSWR(`/api/${username}`, fetcher);
  const [user, setUser] = React.useState<any>(null);
  const [user_id, setUserId] = React.useState<any>(null);
  const [loggedInUsername, setLoggedInUsername] = React.useState<any>(null);
  const router = useRouter();

  const deleteAccount = async () => {
    const res = await fetch(`/api/${username}/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id })
    });
    if (res.status === 200) {
      toast({
        title: 'Account deleted',
        message: '',
        type: 'default',
        duration: 2000,
      });
      router.push('/');
    }
  }

  let token = null as string | null;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }

  React.useEffect(() => {
    if (token) {
      try {
        const payload = jose.decodeJwt(token);
        if (payload) {
          const user = payload.user as string;
          const user_id = payload.user_id as number;
          setLoggedInUsername(user);
          setUserId(user_id);
        }
      } catch (err) {
        setLoggedInUsername(null);
        setUserId(null);
      }
    };
  }, [token]);

  React.useEffect(() => {
    if (userData.data) {
      setUser(userData.data);
    }
  }, [userData.data]);

  if (userData.error) return (
    <div className='pt-32'>
      <LargeHeading>
        Error fetching user data
      </LargeHeading>
    </div>
  )

  if (!user) return (
    <div className='pt-32'>
      <LargeHeading>
        Loading...
      </LargeHeading>
    </div>
  )
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        {
          loggedInUsername === username ? (
            <div className='h-full gap-6 flex flex-col justify-start items-center'>

              <LargeHeading size='lg' className='text-black'>
                My profile
              </LargeHeading>

              <div className='flex flex-col md:flex-col max-w-7xl lg:w-[500px] w-5/12 min-w-[360px] items-center px-8 md:px-0 gap-3 lg:gap-3 pt-6'>
                <div className='flex flex-col justify-start items-center w-full'>
                  <Paragraph size='sm' className='font-medium text-start'>
                    Profile picture
                  </Paragraph>
                  <div className='w-48 h-48 relative'>
                    <Image src={user.profile_picture} alt={user.username} fill={true} style={{objectFit: 'contain'}} className='rounded-full' />
                  </div>
                  <Paragraph size='sm' className='text-start text-slate-700 mt-4'>
                    {user.follower_count === 0 ? 'No' : user.follower_count} {user.follower_count === 1 ? 'follower' : 'followers'}
                  </Paragraph>
                </div>
                <div className='flex flex-col justify-start w-full '>
                  <Paragraph size='sm' className='font-medium px-3 w-full text-start'>
                    Username
                  </Paragraph>
                  <input
                    type='text'
                    value={user.username}
                    disabled
                    className='bg-gray-200 px-3 w-full py-2 rounded-md opacity-50 cursor-not-allowed' />
                </div>
                <div className='flex flex-col justify-start items-baseline w-full'>
                  <Paragraph size='sm' className='font-medium px-3 w-full text-start'>
                    Name
                  </Paragraph>
                  <input
                    type='name'
                    value={user.name}
                    disabled
                    className='bg-gray-200 px-3 w-full py-2 rounded-md opacity-50 cursor-not-allowed' />
                </div>
                <div className='flex flex-col justify-start items-baseline w-full'>
                  <Paragraph size='sm' className='font-medium px-3 w-full text-start'>
                    Email
                  </Paragraph>
                  <input
                    type='email'
                    value={user.email}
                    disabled
                    className='bg-gray-200 px-3 w-full py-2 rounded-md opacity-50 cursor-not-allowed' />
                </div>
                <div className='flex flex-col md:flex-row max-w-7xl w-full items-center gap-4 md:gap-0 justify-end px-8 md:px-0'>
                  <Button onClick={deleteAccount} className='bg-red-600 hover:bg-red-500 ring-red-400 gap-2'>
                    <Icons.Trash /> Delete Account
                  </Button>
                </div>
              </div>
              <div className='flex flex-col items-center w-full gap-2 mt-2' >
                <Link href={`/user/${username}/recipes`} className={cn(buttonVariants({ variant: 'link' }), 'flex flex-row items-center gap-1')}>
                  View Recipes <Icons.ChevronRight size={16} />
                </Link>
                <Link href='/collections' className={cn(buttonVariants({ variant: 'link' }), 'flex flex-row items-center gap-1 mb-12')}>
                  View Collections <Icons.ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ) : (
            <div className='flex flex-col w-full'>
              <div className='w-full gap-6 flex flex-col md:flex-row justify-start md:justify-center items-center'>
                <div className='h-64 w-64 relative'>
                  <Image src={`${user.profile_picture}`} alt={user.name} fill={true} style={{ objectFit: 'contain'}} className='rounded-full' />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                  <LargeHeading size='sm'>
                    {user.name}
                  </LargeHeading>
                  <LargeHeading size='xxs' className='text-slate-700'>
                    {user.username}
                  </LargeHeading>
                </div>
              </div>
              <div className='w-full flex flex-col items-center my-12'>
                <Link href={`/user/${username}/recipes`} className={cn(buttonVariants({ variant: 'link' }), 'flex flex-row items-center gap-1')}>
                  <LargeHeading size='xxxs' className='text-black'>
                    View Recipes By {username}
                  </LargeHeading>
                  <Icons.ChevronRight size={24} strokeWidth={3} />
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
}
