import { all, call, put, takeLatest } from "typed-redux-saga";
import { CATEGORIES_ACTION_TYPES, type Categories } from "./category.types";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./category.reducer";

const getData = async (): Promise<Categories | null> => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export function* fetchCategoriesAsync() {
  const data = yield* call(getData);
  if (data === null) {
    yield* put(fetchCategoriesFailed());
  } else {
    yield* put(fetchCategoriesSuccess(data.categories));
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
