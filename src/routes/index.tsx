import { createBrowserRouter, Outlet } from "react-router";
import Home from "./home";
import { Suspense } from "react";
import PageLayout from "@/layouts/page-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<></>}>
        <PageLayout>
          <Outlet />
        </PageLayout>
      </Suspense>
    ),
    // errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
