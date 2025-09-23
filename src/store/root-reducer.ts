import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/category.reducer";
import { recipeReducer } from "./recipes/recipe.reducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  recipe: recipeReducer,
});
