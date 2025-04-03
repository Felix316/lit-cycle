
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import React from 'react'





function page() {
  return (
    <div className='flex flex-col px-8 '>
      <NavigationMenu className=' flex flex-row gap-4'>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className=' px-8'>Link 2</NavigationMenuLink>
              </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>

      </NavigationMenu>
    </div>
  )
}

export default page