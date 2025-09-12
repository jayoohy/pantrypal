import type { FC } from "react";
import type { Category } from "@/store/categories/category.types";
import { CarouselItem } from "../ui/carousel";
import { Card } from "../ui/card";

type CategoriesProps = {
  category: Category;
};

const Categories: FC<CategoriesProps> = ({ category }) => {
  return (
    <CarouselItem
      key={category.idCategory}
      className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2"
    >
      <Card className="h-full p-0 shadow-md overflow-hidden border-muted bg-muted/50 hover:bg-muted/60 transition-colors duration-300">
        <div className="w-full h-full flex items-center justify-center">
          <div
            className={`bg-[url(${category.strCategoryThumb})] rounded-sm relative`}
          >
            <span className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-black font-medium">
              {category.strCategory}
            </span>
          </div>
        </div>
      </Card>
    </CarouselItem>
  );
};

export default Categories;
