import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer/footer.component";
import { NavigationMenuDemo } from "@/components/navigation/navigation.component";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const Pagelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <NavigationMenuDemo />
        {children}
      </SidebarProvider>
      <Outlet />
      <Footer />
    </>
  );
};

export default Pagelayout;
