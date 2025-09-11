import type { FC } from "react";
import type { Category } from "@/store/categories/category.types";

type CategoriesProps = {
  category: Category;
};

const Categories: FC<CategoriesProps> = ({ category }) => {
  return (
    <div
      className={`bg-[url(${category.strCategoryThumb})] rounded-sm relative`}
    >
      <span className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-white font-medium">
        {category.strCategory}
      </span>
    </div>
  );
};

export default Categories;
