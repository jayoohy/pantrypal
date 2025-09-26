import { Eye, MessagesSquare } from "lucide-react";
import RecipeCard2 from "./recipe-card-2.component";
import type { Recipe } from "@/store/recipes/recipe.types";
import type { FC } from "react";
import Image from "../image";
import { Link } from "react-router";

type TrendingPostsPreviewProps = {
  recipe1: Recipe;
  recipe2: Recipe;
  recipe3: Recipe;
};

const TrendingPostsPreview: FC<TrendingPostsPreviewProps> = ({
  recipe1,
  recipe2,
  recipe3,
}) => {
  return (
    <div className="mx-56 mt-28 flex justify-center items-center flex-col">
      <h1 className="text-5xl font-normal text-center mb-6">
        Trending Recipes
      </h1>
      <p className="text-center text-gray-600 dark:text-white mx-65 mb-12">
        Are you really into cooking? These homemade meal recipes will totally
        blow the minds of your family members.
      </p>
      <div className="grid grid-cols-4 gap-4 pt-3 pb-6">
        <div className="relative col-span-2">
          {recipe1.strMealThumb && (
            <Link key={recipe1.idMeal} to={`/recipe/${recipe1.idMeal}`}>
              <Image
                src={recipe1.strMealThumb}
                alt={recipe1.strMeal || "meal"}
                className=""
              />
            </Link>
          )}
          <div className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-white font-medium">
            <div className="flex justify-center flex-col items-center">
              <Link
                to={`/category/${recipe1.strCategory?.toLocaleLowerCase()}`}
              >
                <p className="bg-orange-50 dark:bg-gray-800 text-red-500 hover:text-red-700 rounded-md p-2 w-fit text-[0.9rem]">
                  {recipe1.strCategory}
                </p>
              </Link>

              <Link key={recipe1.idMeal} to={`/recipe/${recipe1.idMeal}`}>
                <h1 className="text-4xl py-4 hover:text-gray-200">
                  {recipe1.strMeal}
                </h1>
              </Link>
              <div className="flex text-[0.9rem]">
                <p className="pr-2 py-2">August 24, 2025</p>
                <span className="flex p-2">
                  <Eye className="pr-1" />
                  <p>3000</p>
                </span>
                <span className="flex p-2">
                  <MessagesSquare className="pr-1" />
                  <p>50</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <RecipeCard2 recipe={recipe2} />
        <RecipeCard2 recipe={recipe3} />
      </div>
      <Link
        to={"/t-posts"}
        className="bg-red-500 hover:bg-red-400 p-3 text-white rounded-sm w-[15%] mt-8"
      >
        All trending recipes
      </Link>
    </div>
  );
};

export default TrendingPostsPreview;
