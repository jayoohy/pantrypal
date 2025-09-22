import type { FC } from "react";
import type { Category } from "@/store/categories/category.types";
import { CarouselItem } from "../ui/carousel";
import { Card } from "../ui/card";
import { Link } from "react-router";
import Image from "../image";
import { cn } from "@/lib/utils";

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  return (
    <CarouselItem
      key={category.idCategory}
      className="basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 px-2"
    >
      <Card
        className={cn(
          "h-full p-0 shadow-md overflow-hidden border-muted bg-muted/50 hover:bg-muted/60",
          "transition-colors duration-300 aspect-2/1 group relative"
        )}
      >
        <Image
          src={category.strCategoryThumb}
          alt={category.strCategory}
          className={cn("h-full w-auto")}
          wrapperClassName={cn(
            "w-full aspect-2/1 items-center justify-center !flex categories_list_image"
          )}
          isZoomed
        />

        <Link
          to={`/category/${category.idCategory}`}
          className={cn(
            "bg-black/10 hover:bg-black/30 absolute inset-0 w-full z-[1] flex justify-center items-center text-white font-medium",
            "transition-colors duration-300 ease-in-out z-[1] dark:bg-black/50 dark:hover:bg-black/75"
          )}
        >
          {category.strCategory}
        </Link>
      </Card>
    </CarouselItem>
  );
};

export default CategoryItem;
