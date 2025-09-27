import type { Recipe, Recipes } from "@/store/recipes/recipe.types";
import type { Meal } from "@/types/meals";

export function getIngredientsWithMeasures(recipe: Recipe): string[] {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
    const measure = recipe[`strMeasure${i}` as keyof Recipe];

    if (ingredient && ingredient.trim() !== "") {
      const combined = `${
        measure ? measure.trim() : ""
      } ${ingredient.trim()}`.trim();
      ingredients.push(combined);
    }
  }

  return ingredients;
}

export const fetchRandomMealsFromList = async (
  count = 15
): Promise<Recipe[]> => {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data: Recipes = await res.json();

    if (!data.meals) return [];

    const shuffled = data.meals.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchMealsByIngredient = async (
  ingredient: string
): Promise<Meal[]> => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
        ingredient
      )}`
    );
    const data = await response.json();

    if (!data.meals) {
      return [];
    }

    return data.meals;
  } catch (error) {
    console.error("Error fetching meals by ingredient:", error);
    return [];
  }
};
