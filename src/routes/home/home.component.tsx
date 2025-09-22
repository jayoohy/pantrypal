import HeroSection from "@/components/hero-section/hero-section.component";
import LatestPostsPreview from "@/components/latest-post/latest-posts-preview.component";
import TrendingPostsPreview from "@/components/trending-post/trending-posts-preview.component";
import Subscribe from "@/components/subscribe/subscribe.component";
import CategoriesPreview from "@/components/categories";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoriesPreview />
      <LatestPostsPreview />
      <TrendingPostsPreview />
      <Subscribe />
    </>
  );
};

export default Home;
