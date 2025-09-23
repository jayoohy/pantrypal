import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const selectRecipeReducer = (state: RootState) => state.recipe;

export const selectRecipe = createSelector(
  [selectRecipeReducer],
  (recipeSlice) => recipeSlice.recipe.meals[0]
);

export const selectIsLoading = createSelector(
  [selectRecipeReducer],
  (recipeSlice) => recipeSlice.isLoading
);
