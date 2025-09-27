import { Link } from "react-router";
import Image from "../image";
import type { Meal } from "@/types/meals";
import type { FC } from "react";

type MealsListProps = {
  meal: Meal;
};

const MealsList: FC<MealsListProps> = ({ meal }) => {
  return (
    <div
      key={meal.idMeal}
      className="max-w-xs rounded-2xl overflow-hidden bg-orange-50 dark:bg-gray-900 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {meal.strMealThumb && (
        <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal ?? "Recipe"}
            className="w-full h-48 object-cover"
            isZoomed
          />
        </Link>
      )}
      <div className="p-4 text-center">
        <Link
          to={`/recipe/${meal.idMeal}`}
          className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-red-500 dark:hover:text-red-500"
        >
          {meal.strMeal ?? "Unknown Recipe"}
        </Link>
      </div>
    </div>
  );
};

export default MealsList;
