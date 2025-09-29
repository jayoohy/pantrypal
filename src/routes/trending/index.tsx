import Image from "@/components/image";
import type { Recipe } from "@/store/recipes/recipe.types";
import { Link, useLoaderData } from "react-router";

const TrendingPage = () => {
  const latestMeals = useLoaderData<Recipe[]>();

  return (
    <div className="mt-20">
      <h1 className="text-2xl lg:text-4xl text-center font-bold">
        Trending Posts
      </h1>
      <div className="mt-10 mb-40 mx-10 md:mx-20 lg:mx-36 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-6 md:gap-y-6 md:gap-3 xl:gap-6">
        {latestMeals.map((recipe) => {
          return (
            <div className="max-w-xs rounded-2xl overflow-hidden bg-orange-50 dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300">
              {recipe.strMealThumb && (
                <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`}>
                  <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal ?? "Recipe"}
                    className="w-full object-cover"
                    isZoomed
                  />
                </Link>
              )}
              <div className="py-2 lg:p-4 text-center">
                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-white hover:text-red-500 dark:hover:text-red-500"
                >
                  {recipe.strMeal ?? "Unknown Recipe"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingPage;
