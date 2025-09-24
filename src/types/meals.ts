export interface CategoryResponse {
  meals: Meal[] | null;
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
