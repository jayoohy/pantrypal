import type { CategoryResponse } from "@/types/meals";
import type { LoaderFunctionArgs } from "react-router";

export const categoryLoader = async ({ params }: LoaderFunctionArgs) => {
  const { name } = params;
  if (name) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
      );
      const data: CategoryResponse | null = await response.json();
      if (data == null || data.meals == null) {
        throw new Response("Error 404, ticket not found.", { status: 404 });
      }
      return data;
    } catch (error) {
      return null;
    }
  }
  return null;
};
