import Addition from "@/components/recipe-details/addition.component";
import RecipeDetails from "@/components/recipe-details/recipe-details.component";
import { selectRecipe } from "@/store/recipes/recipe.selector";
import { useAppSelector } from "@/utils/hooks";

const Recipe = () => {
  const recipe = useAppSelector(selectRecipe);

  return (
    <div className="my-26 mx-56">
      <h1 className="text-4xl pb-4 font-bold">{recipe.strMeal}</h1>
      <span className="bg-gray-200 dark:bg-gray-800 text-red-500 hover:text-black dark:hover:text-white p-1.5 rounded-md">
        {recipe.strCategory}
      </span>
      <div className="mt-4 grid grid-cols-6">
        <RecipeDetails recipe={recipe} />
        <Addition />
      </div>
    </div>
  );
};

export default Recipe;
