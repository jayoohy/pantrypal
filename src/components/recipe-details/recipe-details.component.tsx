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
    <div className="col-span-4">
      <Image
        src={recipe.strMealThumb !== null ? recipe.strMealThumb : placeholder}
        alt="food"
        className="w-full h-full object-cover aspect-video mb-5"
        wrapperClassName="aspect-video rounded-md"
        isZoomed
      />
      <p className="text-2xl font-medium pb-3">Ingredients</p>
      <div className="text-[1.2rem] text-gray-600 dark:text-gray-300 grid grid-cols-3 gap-2">
        {array.map((arr) => (
          <div>{arr}</div>
        ))}
      </div>
      <p className="text-2xl font-medium pt-8 pb-3">Directions</p>
      <p className="text-[1.3rem] text-justify text-gray-600 dark:text-gray-300 leading-10">
        {recipe.strInstructions}
      </p>
      <div className="pt-5">
        <iframe
          width="560"
          height="315"
          src={
            recipe.strYoutube
              ? recipe.strYoutube.replace("watch?v=", "embed/")
              : placeholder
          }
          title="Recipe video"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default RecipeDetails;
