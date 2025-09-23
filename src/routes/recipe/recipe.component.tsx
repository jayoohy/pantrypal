import Image from "@/components/image";
import { selectRecipe } from "@/store/recipes/recipe.selector";
import { useAppSelector } from "@/utils/hooks";

const Recipe = () => {
  const recipe = useAppSelector(selectRecipe);

  return (
    <div className="mt-26 mx-36 flex flex-col">
      <h1 className="text-4xl">Avocado Toast</h1>
      <Image
        src="images/lp-1.jpg"
        alt="food"
        className="w-2/5 aspect-[3.5/2] rounded-md justify-self-center mb-5"
        isZoomed
      />
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-orange-50 dark:bg-gray-800 mr-60 rounded-md p-3">
          <p className="text-xl pb-3">Ingredients</p>
          <ul>
            <li>100 ml milk</li>
            <li>50 g butter</li>
            <li>150 g pumpkin</li>
            <li>1 tbs sugar</li>
            <li>2 tsp cinnamon</li>
            <li>a pinch of salt</li>
            <li>30 leaves of thyme</li>
            <li>100 ml oat milk</li>
            <li>2 tsp ground cinnamon</li>
          </ul>
        </div>
        <div className="col-span-2 p-3">
          <p className="text-xl pb-3">Directions</p>
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
