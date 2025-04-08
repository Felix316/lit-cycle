'use client';

import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import React from 'react'
import { usePathname } from 'next/navigation'
import  NextLink from 'next/link'


function Navbar() {
  const Link: React.FC<{ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, ...props }) => {
    const pathname = usePathname();
    const isActive = href === pathname;
  
    return (
      <NavigationMenuLink asChild className={isActive ? 'active' : ''}>
        <NextLink href={href} className="NavigationMenuLink" {...props} />
      </NavigationMenuLink>
    );
  };
  
  return (
    <div className='flex flex-col px-8 '>
      <NavigationMenu className=' flex flex-row gap-4'>

        <NavigationMenuList>
          <NavigationMenuItem> 
            <Link href='/books'>
            Books
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem> 
            <Link href='/cart'>
            Cart
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem> 
            <Link href='/checkout'>
            Checkout
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

      </NavigationMenu>
    </div>
  )
}

export default Navbar