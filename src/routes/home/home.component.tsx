import Categories from "@/components/categories/categories.component";
import HeroSection from "@/components/hero-section/hero-section.component";
import LatestPostsPreview from "@/components/latest-posts-preview/latest-posts-preview.component";
import Subscribe from "@/components/subscribe/subscribe.component";
import TrendingPostsPreview from "@/components/trending-posts-preview/trending-posts-preview.component";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <LatestPostsPreview />
      <TrendingPostsPreview />
      <Subscribe />
    </>
  );
};

export default Home;
