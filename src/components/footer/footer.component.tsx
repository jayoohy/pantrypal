import {
  Facebook,
  Github,
  Instagram,
  MoveRight,
  Twitter,
  Youtube,
} from "lucide-react";
import ImageCollection from "./image-collection.component";
import { useAppSelector } from "@/utils/hooks";
import { selectCategories } from "@/store/categories/category.selector";
import { Link } from "react-router";

const Footer = () => {
  const categories = useAppSelector(selectCategories);
  const currentYear = new Date().getFullYear();
  return (
    <>
      <ImageCollection />
      <div className="bg-orange-50 dark:bg-gray-800">
        <div className="flex justify-between items-center md:items-start pt-2 px-3 md:py-7 lg:py-15 md:px-18 lg:px-30">
          <div className="text-2xl md:text-4xl font-semibold font-mono self-start pt-8 md:pt-0">
            PantryPal
          </div>
          <div>
            <ul>
              {categories.slice(0, 5).map((category) => {
                return (
                  <Link
                    key={category.idCategory}
                    to={`/category/${category.strCategory?.toLocaleLowerCase()}`}
                  >
                    <li className="text-[0.8rem] md:text-[1.1rem] py-1 hover:text-green-500">
                      {category.strCategory}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="text-[0.7rem] md:text-[1.1rem] **:py-1.5">
            <ul className="*:hover:text-green-500">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"https://github.com/jayoohy/pantrypal"}>
                <li>About Us</li>
              </Link>
              <Link to={"/categories"}>
                <li>Categories</li>
              </Link>
              <Link to={"https://x.com/jay_ooh_y"}>
                <li>Contact us</li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col scale-75 md:scale-100 mr-1 md:mr-0 lg:flex-row">
            <Link
              to={"https://github.com/jayoohy/pantrypal"}
              className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit"
            >
              <Instagram />
            </Link>
            <Link
              to={"https://x.com/jay_ooh_y"}
              className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit"
            >
              <Twitter />
            </Link>
            <Link
              to={"https://github.com/jayoohy/pantrypal"}
              className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit"
            >
              <Facebook />
            </Link>
            <Link
              to={"https://github.com/jayoohy/pantrypal"}
              className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit"
            >
              <Github />
            </Link>
            <Link
              to={"https://github.com/jayoohy/pantrypal"}
              className="rounded-full bg-orange-100 dark:bg-black/40 hover:bg-orange-50 dark:hover:bg-gray-800 p-2 h-fit"
            >
              <Youtube />
            </Link>
          </div>
        </div>
        <hr className="mx-5 lg:mx-30 border-1" />
        <div className="flex text-[0.7rem] md:text-[1rem] justify-center md:justify-between p-3 md:pt-5 md:pb-10 lg:mx-30">
          <div className="text-gray-500 dark:text-white">
            Copyright <span>{currentYear}</span> -{" "}
            <span className="text-black dark:text-white">PantryPal</span>. All
            Rights Reserved.
          </div>
          <div className="hidden md:flex">
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
