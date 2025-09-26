import Pagelayout from "@/layouts/page-layout";
import { createBrowserRouter } from "react-router";
import Home from "./home";
import { ThemeProvider } from "@/components/themes/theme-provider";
import Categories from "./categories";
import Recipe from "./recipe-page";
import { categoryLoader } from "@/loaders/category.loader";
import { lazy, Suspense } from "react";
import { recipeLoader } from "@/loaders/recipe.loader";
import { homeLoader } from "@/loaders/home.loader";
import TrendingPage from "./trending";
import { postsLoader } from "@/loaders/posts.loader";
import LatestPage from "./latests";

const RecipeCategory = lazy(() => import("./recipe-category"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Suspense fallback={null}>
            <Pagelayout />
          </Suspense>
        </ThemeProvider>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "category/:category",
        element: <RecipeCategory />,
        loader: categoryLoader,
      },
      {
        path: "recipe/:recipeId",
        element: <Recipe />,
        loader: recipeLoader,
      },
      {
        path: "t-posts",
        element: <TrendingPage />,
        loader: postsLoader,
      },

      {
        path: "l-posts",
        element: <LatestPage />,
        loader: postsLoader,
      },
    ],
  },
]);

export default router;
