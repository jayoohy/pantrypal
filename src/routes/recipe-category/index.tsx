import PagePagination from "@/components/pagination";
import MealsList from "@/components/post-types/meals-list.coponents";
import { usePagination } from "@/hooks/usePagination";
import { selectCategories } from "@/store/categories/category.selector";
import type { Meal } from "@/types/meals";
import { useAppSelector } from "@/utils/hooks";
import { useLoaderData, useParams } from "react-router";

const RecipeCategory = () => {
  const recipes = useLoaderData() as Meal[];
  const categoryName = useParams();
  const { paginatedItems, page, totalPages, setPage } = usePagination(
    recipes,
    12
  );

  const categories = useAppSelector(selectCategories);

  const findCategoryIndex = (category: string | undefined) => {
    return categories.findIndex(
      (item) => item.strCategory.toLowerCase() === category?.toLowerCase()
    );
  };
  const index = findCategoryIndex(categoryName.category);
  const desc = categories[index].strCategoryDescription;

  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center font-bold capitalize">
        {categoryName.category}
      </h1>
      <p className="mx-36 mt-4 text-xl text-gray-600 dark:text-gray-300 text-justify leading-8">
        {desc}
      </p>
      <div className="mb-40 space-y-10">
        <div className="mt-10 mx-36 grid grid-cols-4 gap-6">
          {paginatedItems?.map((meal) => {
            return <MealsList meal={meal} />;
          })}
        </div>
        <PagePagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default RecipeCategory;
