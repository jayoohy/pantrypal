import type { Recipe } from "@/store/recipes/recipe.types";
import { Eye, MessagesSquare, Play } from "lucide-react";
import type { FC } from "react";
import Image from "../image";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
  recipe: Recipe;
};

const HeroSection: FC<HeroSectionProps> = ({ recipe }) => {
  return (
    <div className="mx-56 mt-24 relative">
      <div className="h-[38rem] rounded-md overflow-hidden">
        {recipe.strMealThumb && (
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal ?? "Recipe"}
              className="w-full h-full object-cover aspect-video mb-5"
              wrapperClassName="aspect-video rounded-md"
              isZoomed
            />
          </Link>
        )}
      </div>
      <div className="absolute bottom-38 left-132 bg-white p-4 rounded-full z-10 shadow-xl">
        <Play fill="black" />
      </div>
      <div
        className={cn(
          "border rounded-sm p-10 pt-20 shadow-lg mt-69 absolute top-38 left-55",
          "bg-white dark:bg-[#121922] dark:shadow-white/10 flex flex-col items-center w-2xl"
        )}
      >
        <Link to={`/category/${recipe.strCategory?.toLocaleLowerCase()}`}>
          <p className="bg-gray-100 dark:bg-gray-800 hover:text-red-700 text-red-500 p-2 w-fit">
            {recipe.strCategory}
          </p>
        </Link>
        <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
          <h2 className="text-5xl text-center hover:text-shadow-lg/10 font-normal my-5 px-20">
            {recipe.strMeal}
          </h2>
        </Link>
        <div className="flex">
          <p className="p-2">September 13, 2025</p>
          <span className="flex p-2">
            <Eye className="pr-1" /> <p>1007</p>
          </span>
          <span className="flex p-2">
            <MessagesSquare className="pr-1" /> <p>10</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
