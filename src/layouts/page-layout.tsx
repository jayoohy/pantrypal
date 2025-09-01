import Footer from "@/components/footer/footer.component";
import { NavigationMenuDemo } from "@/components/navigation/navigation.component";
import { Outlet } from "react-router";

const Pagelayout = () => {
  return (
    <>
      <NavigationMenuDemo />
      <Outlet />
      <Footer />
    </>
  );
};

export default Pagelayout;
