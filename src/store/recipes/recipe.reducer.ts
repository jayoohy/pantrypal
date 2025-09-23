import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Recipes } from "./recipe.types";

export type CategoriesState = {
  readonly recipe: Recipes;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const RECIPE_INITIAL_STATE: CategoriesState = {
  recipe: { meals: [] },
  isLoading: false,
  error: null,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: RECIPE_INITIAL_STATE,
  reducers: {
    fetchRecipeStart: (state) => {
      state.isLoading = true;
    },
    fetchRecipeSuccess: (state, action: PayloadAction<Recipes>) => {
      state.isLoading = false;
      state.recipe = action.payload;
    },
    fetchRecipeFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const { fetchRecipeStart, fetchRecipeSuccess, fetchRecipeFailed } =
  recipeSlice.actions;

export const recipeReducer = recipeSlice.reducer;
