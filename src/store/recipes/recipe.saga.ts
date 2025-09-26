import { all, call, put, takeLatest } from "typed-redux-saga";
import { RECIPE_ACTION_TYPES, type Recipes } from "./recipe.types";
import { fetchRecipeFailed, fetchRecipeSuccess } from "./recipe.reducer";

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

export function* fetchRecipeAsync() {
  const data = yield* call(homeLoader);
  if (data === null) {
    yield* put(fetchRecipeFailed());
  } else {
    yield* put(fetchRecipeSuccess(data));
  }
}

export function* onRecipeFetch() {
  yield* takeLatest(RECIPE_ACTION_TYPES.FETCH_RECIPE_START, fetchRecipeAsync);
}

export function* recipeSaga() {
  yield* all([call(onRecipeFetch)]);
}
