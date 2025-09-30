import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Search, Heart, ChefHat, User, Mail } from "lucide-react";
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

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        {items.map((item) => (
          <div>
            <Label key={item.title}>
              <Link
                to={item.url}
                className="flex flex-row gap-3 pl-2 items-center"
              >
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </Label>
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
}
