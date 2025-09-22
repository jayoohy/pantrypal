import {
  Facebook,
  Github,
  Instagram,
  MoveRight,
  Twitter,
  Youtube,
} from "lucide-react";
import ImageCollection from "./image-collection.component";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <ImageCollection />
      <div className="bg-orange-50 dark:bg-gray-800">
        <div className="flex justify-between py-15 px-30">
          <div className="text-4xl font-semibold">PantryPal</div>
          <div className="text-[1.1rem]">
            <ul className="*:py-1 *:hover:text-green-500">
              <li>Dinner</li>
              <li>Seafood</li>
              <li>Gluten-Free</li>
              <li>Healthy</li>
              <li>Holiday</li>
            </ul>
          </div>
          <div className="text-[1.1rem]">
            <ul className="*:py-1 *:hover:text-green-500">
              <li>Home</li>
              <li>About Us</li>
              <li>Categories</li>
              <li>All Posts</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="flex">
            <div className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit">
              <Instagram />
            </div>
            <div className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit">
              <Twitter />
            </div>
            <div className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit">
              <Facebook />
            </div>
            <div className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit">
              <Github />
            </div>
            <div className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit">
              <Youtube />
            </div>
          </div>
        </div>
        <hr className="mx-30 border-1" />
        <div className="flex justify-between pt-5 pb-10 mx-30">
          <div className="text-gray-500 dark:text-white">
            Copyright <span>{currentYear}</span> -{" "}
            <span className="text-black dark:text-white">PantryPal</span>. All
            Rights Reserved.
          </div>
          <div className="flex items-center">
            <p className="hover:text-green-500">Provide Feedback</p>
            <MoveRight
              size={35}
              strokeWidth={4}
              className="pl-5 text-green-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
