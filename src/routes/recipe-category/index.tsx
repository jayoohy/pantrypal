import Image from "@/components/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { selectCategories } from "@/store/categories/category.selector";
import { useAppSelector } from "@/utils/hooks";

const RecipeCategory = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center font-bold">Recipe Categories</h1>
      <div className="mt-10 mb-40 mx-36 grid grid-cols-4 gap-5">
        {categories.map((category) => {
          return (
            <Card key={category.idCategory}>
              <CardContent>
                <Image
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                  isZoomed
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <p className="text-red-500 text-2xl hover:text-black dark:hover:text-white">
                  {category.strCategory}
                </p>
                <h1 className="py-2">
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

export default RecipeCategory;
