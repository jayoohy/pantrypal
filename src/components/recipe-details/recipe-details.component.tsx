import type { FC } from "react";
import type { Recipe } from "@/store/recipes/recipe.types";
import Image from "../image";
import placeholder from "@/assets/placeholder.png";
import { getIngredientsWithMeasures } from "@/utils/helpers.utils";

type RecipeDetailsProps = {
  recipe: Recipe;
};

const RecipeDetails: FC<RecipeDetailsProps> = ({ recipe }) => {
  const array = getIngredientsWithMeasures(recipe);

  return (
    <div className="xl:col-span-4">
      <Image
        src={recipe.strMealThumb !== null ? recipe.strMealThumb : placeholder}
        alt="food"
        className="w-full h-full object-cover aspect-video mb-5"
        wrapperClassName="aspect-video rounded-md"
        isZoomed
      />
      <p className="text-xl lg:text-2xl font-medium pb-3">Ingredients</p>
      <div className="text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] text-gray-600 dark:text-gray-300 grid grid-cols-2 lg:grid-cols-3 gap-2">
        {array.map((arr) => (
          <div>{arr}</div>
        ))}
      </div>
      <p className="text-xl lg:text-2xl font-medium pt-8 pb-3">Directions</p>
      <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.3rem] text-justify text-gray-600 dark:text-gray-300 leading-7 lg:leading-10">
        {recipe.strInstructions}
      </p>
      <div className="relative aspect-video w-full pt-5 mt-5 mb-10 xl:mb-0">
        <iframe
          src={
            recipe.strYoutube
              ? recipe.strYoutube.replace("watch?v=", "embed/")
              : placeholder
          }
          title="Recipe video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default RecipeDetails;
