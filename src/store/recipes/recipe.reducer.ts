import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Recipe } from "./recipe.types";

export type ReducerState = {
  readonly recipes: Recipe[] | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const RECIPE_INITIAL_STATE: ReducerState = {
  recipes: null,
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
    fetchRecipeSuccess: (state, action: PayloadAction<Recipe[]>) => {
      state.isLoading = false;
      state.recipes = action.payload;
    },
    fetchRecipeFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const { fetchRecipeStart, fetchRecipeSuccess, fetchRecipeFailed } =
  recipeSlice.actions;

export const recipeReducer = recipeSlice.reducer;
