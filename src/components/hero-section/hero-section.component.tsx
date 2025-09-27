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
    <div className="mx-6 md:mx-56 mt-20 md:mt-24 relative">
      <div className="md:h-[38rem] rounded-md overflow-hidden">
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
      <div className="absolute bottom-13 md:bottom-38 left-39 md:left-132 scale-60 md:scale-100 bg-white p-4 rounded-full z-10 shadow-xl">
        <Play fill="black" />
      </div>
      <div
        className={cn(
          "border rounded-sm md:p-10 pt-8 md:pt-20 shadow-lg md:mt-69 absolute top-32 md:top-38 left-10 md:left-55",
          "bg-white dark:bg-[#121922] dark:shadow-white/10 flex flex-col items-center w-[18rem] md:w-2xl"
        )}
      >
        <Link to={`/category/${recipe.strCategory?.toLocaleLowerCase()}`}>
          <p className="bg-gray-100 dark:bg-gray-800 hover:text-red-700 text-red-500 scale-65 md:scale-100 p-[0.7] md:p-2 w-fit">
            {recipe.strCategory}
          </p>
        </Link>
        <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
          <h2 className="text-2xl md:text-5xl text-center hover:text-shadow-lg/10 font-normal mb-1 md:my-5 md:px-20">
            {recipe.strMeal}
          </h2>
        </Link>
        <div className="flex items-center text-[0.6rem] md:text-[1rem]">
          <p className="p-2">September 13, 2025</p>
          <span className="flex items-center p-2">
            <Eye className="pr-1 scale-75 md:scale-100" /> <p>1007</p>
          </span>
          <span className="flex items-center p-2">
            <MessagesSquare className="pr-1 scale-75 md:scale-100" /> <p>10</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
