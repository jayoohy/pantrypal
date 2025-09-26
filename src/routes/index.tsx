import Pagelayout from "@/layouts/page-layout";
import { createBrowserRouter } from "react-router";
import { ThemeProvider } from "@/components/themes/theme-provider";
import { categoryLoader } from "@/loaders/category.loader";
import { lazy, Suspense } from "react";
import { recipeLoader } from "@/loaders/recipe.loader";
import { postsLoader } from "@/loaders/posts.loader";
import Preloader from "@/components/preloader";
import ScrollToTop from "@/components/scroll-to-top";

const Home = lazy(() => import("./home"));
const Categories = lazy(() => import("./categories"));
const RecipeCategory = lazy(() => import("./recipe-category"));
const Recipe = lazy(() => import("./recipe-page"));
const TrendingPage = lazy(() => import("./trending"));
const LatestPage = lazy(() => import("./latests"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Suspense fallback={<Preloader />}>
            <ScrollToTop />
            <Pagelayout />
          </Suspense>
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
