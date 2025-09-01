import Pagelayout from "@/layouts/page-layout";
import { createBrowserRouter } from "react-router";
import Home from "./home/home.component";
import { ThemeProvider } from "@/components/themes/theme-provider";

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
    ],
  },
]);

export default router;
