"use client";

import { Link } from "react-router";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../themes/mode-toggle.component";
import { Heart, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavigationMenuDemo() {
  return (
    <div className="relative">
      <div
        className={cn(
          "flex justify-between py-2 px-4 border-b-2 border-b-accent fixed top-0",
          "right-0 left-0 backdrop-blur-sm bg-white/40 dark:bg-black/40 z-50"
        )}
      >
        <div>
          <h1 className="text-xl font-semibold">PantryPal</h1>
        </div>
        <div>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="bg-transparent hover:text-red-600 hover:bg-transparent"
                    to="/"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="bg-transparent hover:text-red-600 hover:bg-transparent"
                    to="/categories"
                  >
                    Categories
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:text-red-600! hover:bg-transparent!">
                  Featured
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/recipe">Components</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="#">Documentation</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link to="#">Blocks</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    to={"/category/chicken"}
                    className="bg-transparent hover:bg-transparent"
                  >
                    <div className="flex hover:text-red-600">
                      <Heart className="h-[1.2rem] w-[1.2rem] text-black hover:text-red-600 dark:text-white mr-2 mt-0.5" />
                      Chicken
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="bg-transparent hover:text-red-600 hover:bg-transparent"
                    to="#"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    className="bg-transparent hover:text-red-600 hover:bg-transparent"
                    to="#"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex">
          <Link to="#">
            <Search className="mr-4 mt-1.5" />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
