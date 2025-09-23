import { all, call, put, takeLatest } from "typed-redux-saga";
import { RECIPE_ACTION_TYPES, type Recipes } from "./recipe.types";
import { fetchRecipeFailed, fetchRecipeSuccess } from "./recipe.reducer";

const getData = async (): Promise<Recipes | null> => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export function* fetchRecipeAsync() {
  const data = yield* call(getData);
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
