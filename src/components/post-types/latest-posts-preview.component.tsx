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
    <div className="mx-56 flex justify-center items-center flex-col">
      <h1 className="text-5xl font-normal text-center mb-6">Latest Recipes</h1>
      <p className="text-center text-gray-600 dark:text-white mx-65 mb-12">
        Looking for cooking inspiration? Below are our newly developed recipes
        for any occasion - check out and try them!
      </p>

      <div className="grid grid-cols-3 gap-5">
        <RecipeCard1 recipe={recipe1} />
        <RecipeCard1 recipe={recipe2} />
        <RecipeCard1 recipe={recipe3} />
      </div>

      <Link
        to={"/l-posts"}
        className="bg-green-500 hover:bg-green-400 p-4 text-white rounded-sm w-[15%] mt-8"
      >
        All latest posts
      </Link>
    </div>
  );
};

export default LatestPostsPreview;
