'use client'

import { IconButton } from '@/ui/Button'
import { Icons } from '@/components/Icons'
import { useRouter, usePathname } from 'next/navigation';

const NavSearchButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const openSearch = () => {
    if (pathname !== '/recipes/') {
      router.push('/recipes');
    }
    setTimeout(() => {
      const searchInput = document.getElementById('search');
      if (searchInput) {
        searchInput.focus();
      }
    }, 300);
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
