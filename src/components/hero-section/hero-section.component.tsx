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
    <div className="mx-6 md:mx-30 lg:mx-56 mt-20 lg:mt-24">
      <div className="rounded-md relative">
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

        <div
          className={cn(
            "border rounded-sm shadow-lg",
            "absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2",
            "bg-white dark:bg-[#121922] dark:shadow-white/10 flex flex-col items-center",
            "w-[65%]",
            "pt-6 pb-1 md:pt-10 md:pb-5 xl:pt-15 lg:pb-8"
          )}
        >
          <div
            className={cn(
              "absolute h-fit bottom-[82%] md:bottom-[90%] scale-60 md:scale-100",
              "bg-white p-4 rounded-full z-10 shadow-xl"
            )}
          >
            <Play fill="black" />
          </div>
          <Link to={`/category/${recipe.strCategory?.toLocaleLowerCase()}`}>
            <p
              className={cn(
                "bg-gray-100 dark:bg-gray-800 hover:text-red-700 text-red-500",
                "p-[0.2rem] text-[0.6rem] lg:text-[1rem] md:p-1 w-fit"
              )}
            >
              {recipe.strCategory}
            </p>
          </Link>
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
            <h2
              className={cn(
                "text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center hover:text-shadow-lg/10 font-normal",
                "pt-2 lg:pt-3 px-7 md:px-20 md:pb-1 xl:pb-3 xl:px-32"
              )}
            >
              {recipe.strMeal}
            </h2>
          </Link>
          <div className="flex items-center text-[0.5rem] md:text-[0.7rem] lg:text-[1rem]">
            <p className="py-2 px-1 md:p-2">September 13, 2025</p>
            <span className="flex items-center py-2">
              <Eye className="pr-1 scale-75 md:scale-100" /> <p>1007</p>
            </span>
            <span className="flex items-center py-2 px-1 md:p-2">
              <MessagesSquare className="pr-1 scale-75 md:scale-100" />{" "}
              <p>10</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
