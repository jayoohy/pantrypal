import { getData } from "@/utils/data.utils";
import { createContext, useEffect } from "react";

export type Category = {
    idCategory: string
      strCategory: string,
      strCategoryThumb: string,
      strCategoryDescription: string
}

export const CategoriesContext = createContext()

export const CategoriesProvider = ({children}) {


    useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

   return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}