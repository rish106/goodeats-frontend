'use client'

import { IconButton } from '@/ui/Button'
import { Icons } from '@/components/Icons'
import { useRouter } from 'next/navigation';

const NavSearchButton = () => {
  const router = useRouter();
  const openSearch = () => {
    router.push('/recipes');
    setTimeout(() => {
      const searchInput = document.getElementById('search');
      if (searchInput) {
        searchInput.focus();
      }
    }, 50);
  };
  return (
    <IconButton
      icon={Icons.Search}
      variant='ghost'
      className='hover:bg-transparent focus:ring-0 focus:ring-offset-0'
      onClick={openSearch} />
  )
}

export default NavSearchButton
