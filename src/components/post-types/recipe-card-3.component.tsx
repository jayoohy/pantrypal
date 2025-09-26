import type { Recipe } from "@/store/recipes/recipe.types";
import Image from "../image";
import type { FC } from "react";
import { Link } from "react-router";

type RecipeCard3Props = {
  item: Recipe;
};

const RecipeCard3: FC<RecipeCard3Props> = ({ item }) => {
  return (
    <Link
      to={`/recipe/${item.idMeal}`}
      className="mt-8 grid grid-cols-2 items-center"
    >
      {item.strMealThumb && (
        <Image
          src={item.strMealThumb}
          alt="food"
          className="w-[8rem] rounded-md"
          isZoomed
        />
      )}
      <div className="space-y-4 font-semibold">
        <h1 className="text-[1.1rem]">{item.strMeal}</h1>
        <div className="flex">
          <p className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            September 25, 2025
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard3;
