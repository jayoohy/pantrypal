import { getData } from "@/utils/data.utils";
import { createContext, useEffect, useState } from "react";

export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};
export type Categories = {
  categories: Category[];
};

const CATEGORIES_INITIAL_STATE: Categories = {
  categories: [],
};

export const CategoriesContext = createContext<Categories>(
  CATEGORIES_INITIAL_STATE
);

export const CategoriesProvider = ({ children }: Object) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesFetched = await getData<Category[]>(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setCategories(categoriesFetched);
    };
    fetchCategories();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
