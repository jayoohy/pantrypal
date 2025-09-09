export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS: "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED: "category/FETCH_CATEGORIES_FAILED",
} as const;

export type CATEGORIES_ACTION_TYPES =
  (typeof CATEGORIES_ACTION_TYPES)[keyof typeof CATEGORIES_ACTION_TYPES];

export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

export type Categories = {
  categories: Category[];
};
