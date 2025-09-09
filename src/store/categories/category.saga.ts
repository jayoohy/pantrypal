import { all, call, put, takeLatest } from "typed-redux-saga";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./category.action";

export function* fetchCategoriesAsync() {
  try {
    const response = yield* call(
      fetch,
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = yield* response.json();
    yield* put(fetchCategoriesSuccess(data.categories));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
