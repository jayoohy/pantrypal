import type { Recipe } from "@/store/recipes/recipe.types";
import RecipeCard1 from "./recipe-card-1.component";
import type { FC } from "react";
import { Link } from "react-router";

type LatestPostsPreviewProps = {
  recipe1: Recipe;
  recipe2: Recipe;
  recipe3: Recipe;
};

const LatestPostsPreview: FC<LatestPostsPreviewProps> = ({
  recipe1,
  recipe2,
  recipe3,
}) => {
  return (
    <div className="mt-15 md:mt-30 mx-6 md:mx-30 lg:mx-56 flex justify-center items-center flex-col">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-center mb-2 lg:mb-6">
        Latest Recipes
      </h1>
      <p className="text-center text-gray-600 dark:text-white md:mx-30 lg:mx-20 xl:mx-60 mb-12 text-[0.7rem] lg:text-[1rem]">
        Looking for cooking inspiration? Below are our newly developed recipes
        for any occasion - check out and try them!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5">
        <RecipeCard1 recipe={recipe1} />
        <RecipeCard1 recipe={recipe2} />
        <RecipeCard1 recipe={recipe3} />
      </div>

      <Link
        to={"/l-posts"}
        className="bg-green-500 hover:bg-green-400 p-3 lg:p-5 text-white rounded-sm mt-8"
      >
        All latest recipes
      </Link>
    </div>
  );
};

export default LatestPostsPreview;
