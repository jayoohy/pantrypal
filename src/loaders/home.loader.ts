import type { Recipes } from "@/store/recipes/recipe.types";

export const homeLoader = async () => {
  const recipeIds = [52951, 52950, 52816, 52903, 53005, 52773, 52838];

  try {
    const recipes = await Promise.all(
      recipeIds.map(async (id) => {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data: Recipes | null = await response.json();

        if (!data || !data.meals) {
          throw new Response("Error 404, recipe not found.", { status: 404 });
        }

        return data.meals[0];
      })
    );

    return recipes; // this will be Recipe[]
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const err = error as any;
    console.error(err);
    throw new Response(err.message, { status: 500 });
  }
};
