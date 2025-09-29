import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Recipe } from "@/store/recipes/recipe.types";
import { MessagesSquare } from "lucide-react";
import type { FC } from "react";
import Image from "../image";
import { Link } from "react-router";

type RecipeCard1Props = {
  recipe: Recipe;
};

const RecipeCard1: FC<RecipeCard1Props> = ({ recipe }) => {
  return (
    <Card>
      <CardContent>
        {recipe.strMealThumb && (
          <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal || "meal"}
              className="w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            />
          </Link>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <Link to={`/category/${recipe.strCategory?.toLocaleLowerCase()}`}>
          <p className="text-red-500 text-[0.6rem] lg:text-[1rem] hover:text-black dark:hover:text-white">
            {recipe.strCategory}
          </p>
        </Link>

        <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
          <h1 className="hover:text-red-500 text-xl lg:text-2xl font-semibold py-2 line-clamp-3 lg:line-clamp-none">
            {recipe.strMeal}
          </h1>
        </Link>

        <div className="flex">
          <p className="text-gray-600 text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem] dark:text-gray-300 hover:text-black dark:hover:text-white">
            September 25, 2025
          </p>
          <span className="flex pl-1 xl:px-2">
            <MessagesSquare className="pr-1 mt-[-0.3rem] md:mt-0 scale-75 lg:scale-100" />
            <p className="text-gray-600 text-[0.6rem] lg:text-[1rem] dark:text-gray-300 hover:text-black dark:hover:text-white">
              1
            </p>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard1;
