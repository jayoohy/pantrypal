import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const selectRecipeReducer = (state: RootState) => state.recipe;

export const selectRecipes = createSelector(
  [selectRecipeReducer],
  (recipeSlice) => recipeSlice.recipes
);

export const selectIsLoading = createSelector(
  [selectRecipeReducer],
  (recipeSlice) => recipeSlice.isLoading
);
