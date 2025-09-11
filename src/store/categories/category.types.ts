export const CATEGORIES_ACTION_TYPES = {
  FETCH_CATEGORIES_START: "category/fetchCategoriesStart",
  FETCH_CATEGORIES_SUCCESS: "category/fetchCategoriesSuccess",
  FETCH_CATEGORIES_FAILED: "category/fetchCategoriesFailed",
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
