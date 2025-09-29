import { Home, Search, Heart, ChefHat, User, Mail } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Categories",
    url: "/categories",
    icon: ChefHat,
  },
  {
    title: "Featured Recipes",
    url: "/featured",
    icon: Heart,
  },
  {
    title: "Chicken Recipes",
    url: "/category/chicken",
    icon: Heart,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
  },
  {
    title: "About",
    url: "https://github.com/jayoohy",
    icon: User,
  },
  {
    title: "Contact",
    url: "https://x.com/jay_ooh_y",
    icon: Mail,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
