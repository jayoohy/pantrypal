import { all, call } from "typed-redux-saga";
import { categoriesSaga } from "./categories/category.saga";
import { recipeSaga } from "./recipes/recipe.saga";

export function* rootSaga() {
  yield* all([call(categoriesSaga), call(recipeSaga)]);
}
