import { NavigationMenuDemo } from "@/components/navigation/navigation.component";
import type { BreadcrumbItem } from "@/types";
import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

const PageLayout = ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
  <>
    <NavigationMenuDemo />

    {children}
  </>
);

export default PageLayout;
