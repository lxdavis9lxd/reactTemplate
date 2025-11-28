import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Home,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  BarChart3,
  Package,
  ShoppingCart,
  Inbox,
  Calendar,
  HelpCircle,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const menuItems = [
  {
    title: 'Main',
    items: [
      { title: 'Home', url: '/', icon: Home },
      { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Management',
    items: [
      { title: 'Users', url: '/users', icon: Users },
      { title: 'Products', url: '/products', icon: Package },
      { title: 'Orders', url: '/orders', icon: ShoppingCart },
      { title: 'Documents', url: '/documents', icon: FileText },
    ],
  },
  {
    title: 'Tools',
    items: [
      { title: 'Analytics', url: '/analytics', icon: BarChart3 },
      { title: 'Calendar', url: '/calendar', icon: Calendar },
      { title: 'Messages', url: '/messages', icon: Inbox },
    ],
  },
  {
    title: 'Other',
    items: [
      { title: 'Settings', url: '/settings', icon: Settings },
      { title: 'Help', url: '/help', icon: HelpCircle },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 px-2 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Package className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">React Template</span>
            <span className="text-xs text-muted-foreground">v1.0.0</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.url;
                  
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link to={item.url}>
                          <Icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center gap-2 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">john@example.com</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
