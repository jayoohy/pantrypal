import HeroSection from "@/components/hero-section/hero-section.component";
import LatestPostsPreview from "@/components/post-types/latest-posts-preview.component";
import TrendingPostsPreview from "@/components/post-types/trending-posts-preview.component";
import Subscribe from "@/components/footer/subscribe.component";
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
