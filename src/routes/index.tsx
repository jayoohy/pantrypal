import Pagelayout from "@/layouts/page-layout";
import { createBrowserRouter } from "react-router";
import Home from "./home/home.component";
import { ThemeProvider } from "@/components/themes/theme-provider";
import Categories from "./categories/categories.component";
import Recipe from "./recipe/recipe.component";
import { categoryLoader } from "@/loaders/category.loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Pagelayout />
        </ThemeProvider>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "category/:name",
        element: <Categories />,
        loader: categoryLoader,
      },
      {
        path: "recipe",
        element: <Recipe />,
      },
    ],
  },
]);

export default router;
