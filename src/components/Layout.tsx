import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Outlet, useNavigate } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { LoadingIndicator } from './LoadingIndicator';

export const Layout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between pb-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => navigate('/')}
                className={`${navigationMenuTriggerStyle()}, cursor-pointer`}>
                <h1 className="text-2xl italic text-primary">Podcaster</h1>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <LoadingIndicator />
      </div>
      <Separator className="mb-4" />
      <Outlet />
    </>
  );
};
