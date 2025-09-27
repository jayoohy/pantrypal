import PagePagination from "@/components/pagination";
import MealsList from "@/components/post-types/meals-list.coponents";
import { usePagination } from "@/hooks/usePagination";
import { type Meal } from "@/types/meals";
import { fetchMealsByIngredient } from "@/utils/helpers.utils";
import { Search } from "lucide-react";
import {
  useEffect,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";

const SearchPage = () => {
  const [searchField, setSearchField] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const { paginatedItems, page, totalPages, setPage } = usePagination(
    meals,
    12
  );

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const onSearchClick = () => {
    setIngredient(searchField);
    setSearchField("");
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIngredient(searchField);
      setSearchField("");
      event.preventDefault();
    }
  };

  useEffect(() => {
    const getMeals = async (ingr: string) => {
      if (ingr.length > 0) {
        const data = await fetchMealsByIngredient(ingr);
        setMeals(data);
      }
    };
    getMeals(ingredient);
    console.log(ingredient);
  }, [ingredient]);
  console.log(meals);

  return (
    <div className="mt-24 mx-56">
      <div className="flex justify-center items-center relative">
        <input
          className="leading-10 w-[40%] text-center outline-2 outline-offset-2 outline-black dark:outline-white rounded-md mr-2"
          type="search"
          value={searchField}
          placeholder="Search by ingredient"
          onChange={onSearchChange}
          onKeyDown={handleKeyDown}
        />
        <Search onClick={onSearchClick} className="absolute right-89" />
      </div>
      {meals.length > 0 ? (
        <div className="mb-40 space-y-10">
          <div className="mt-10 grid grid-cols-4 gap-6">
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
      ) : (
        <div className="text-center my-[25vh]">
          <p className="text-2xl font-[cursive]">Type in an ingredient...</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
