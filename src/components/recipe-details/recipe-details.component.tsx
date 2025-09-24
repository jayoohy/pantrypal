import type { FC } from "react";
import type { Recipe } from "@/store/recipes/recipe.types";
import Image from "../image";
import placeholder from "@/assets/placeholder.png";

type RecipeDetailsProps = {
  recipe: Recipe;
};

const RecipeDetails: FC<RecipeDetailsProps> = ({ recipe }) => {
  return (
    <div className="col-span-4">
      <Image
        src={recipe.strMealThumb !== null ? recipe.strMealThumb : placeholder}
        alt="food"
        className="w-full aspect-[3.5/2] rounded-md mb-5"
        isZoomed
      />
      <p className="text-2xl font-medium pb-3">Ingredients</p>
      <div className="text-[1.2rem] text-gray-600 dark:text-gray-300 grid grid-cols-4 gap-2">
        <div>100 ml milk</div>
        <div>50 g butter</div>
        <div>150 g pumpkin</div>
        <div>1 tbs sugar</div>
        <div>2 tsp cinnamon</div>
        <div>a pinch of salt</div>
        <div>30 leaves of thyme</div>
        <div>100 ml oat milk</div>
        <div>2 tsp ground cinnamon</div>
      </div>
      <p className="text-2xl font-medium pt-8 pb-3">Directions</p>
      <p className="text-[1.2rem] text-gray-600 dark:text-gray-300 leading-11">
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
