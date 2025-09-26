import HeroSection from "@/components/hero-section/hero-section.component";
import LatestPostsPreview from "@/components/post-types/latest-posts-preview.component";
import TrendingPostsPreview from "@/components/post-types/trending-posts-preview.component";
import Subscribe from "@/components/footer/subscribe.component";
import CategoriesPreview from "@/components/categories";
import { useLoaderData } from "react-router";
import type { Recipe } from "@/store/recipes/recipe.types";

const Home = () => {
  const arr = useLoaderData() as Recipe[];

  return (
    <>
      <HeroSection recipe={arr[0]} />
      <CategoriesPreview />
      <LatestPostsPreview recipe1={arr[1]} recipe2={arr[2]} recipe3={arr[3]} />
      <TrendingPostsPreview
        recipe1={arr[4]}
        recipe2={arr[5]}
        recipe3={arr[6]}
      />
      <Subscribe />
    </>
  );
};

export default Home;
