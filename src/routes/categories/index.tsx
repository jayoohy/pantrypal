import Image from "@/components/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { selectCategories } from "@/store/categories/category.selector";
import { useAppSelector } from "@/utils/hooks";
import { Link } from "react-router";

const Categories = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <div className="mt-20">
      <h1 className="text-2xl lg:text-4xl text-center font-bold">
        Recipe Categories
      </h1>
      <div className="mt-10 mb-40 mx-10 md:mx-20 lg:mx-36 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-6 md:gap-y-6 md:gap-3 xl:gap-5">
        {categories.map((category) => {
          return (
            <Card key={category.idCategory}>
              <CardContent>
                <Link
                  to={`/category/${category.strCategory.toLocaleLowerCase()}`}
                >
                  <Image
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                    className="w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                    isZoomed
                  />{" "}
                </Link>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <Link
                  to={`/category/${category.strCategory.toLocaleLowerCase()}`}
                  className="text-red-500 text-xl lg:text-2xl hover:text-black dark:hover:text-white"
                >
                  {category.strCategory}
                </Link>
                <h1 className="py-2 text-[0.8rem] lg:text-[1rem]">
                  {category.strCategoryDescription.slice(0, 60) + "..."}
                </h1>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
