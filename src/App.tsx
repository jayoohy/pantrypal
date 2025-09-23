import { RouterProvider } from "react-router";
import router from "./routes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStart } from "./store/categories/category.reducer";
import { fetchRecipeStart } from "./store/recipes/recipe.reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
    dispatch(fetchRecipeStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
