import type { Recipes } from "@/store/recipes/recipe.types";
import type { LoaderFunctionArgs } from "react-router";

export const recipeLoader = async ({ params }: LoaderFunctionArgs) => {
  const { recipeId } = params;

  if (recipeId) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
      );
      const data: Recipes | null = await response.json();
      if (data == null || data.meals == null) {
        throw new Response("Error 404, ticket not found.", { status: 404 });
      }
      return data.meals[0];
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = error as any;
      console.log(err);

      throw new Response(err.message, { status: 500 });
    }
  }
  return null;
};
