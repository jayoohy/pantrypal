import Footer from "@/components/footer/footer.component";
import { NavigationMenuDemo } from "@/components/navigation/navigation.component";
import { Outlet } from "react-router";

const Pagelayout = () => {
  return (
    <>
      <NavigationMenuDemo />
      <Outlet />
      <h1 className="pt-100 pb-10">Hello</h1>
      <Footer />
    </>
  );
};

export default Pagelayout;
