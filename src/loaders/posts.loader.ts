import { fetchRandomMealsFromList } from "@/utils/helpers.utils";
import type { Recipe } from "@/store/recipes/recipe.types";

export const postsLoader = async (): Promise<Recipe[]> => {
  return await fetchRandomMealsFromList(12);
};
