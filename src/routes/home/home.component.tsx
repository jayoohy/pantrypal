import { useSelector } from "react-redux";
import { selectCategories } from "@/store/categories/category.selector";
import HeroSection from "@/components/hero-section/hero-section.component";
import LatestPostsPreview from "@/components/latest-posts-preview/latest-posts-preview.component";
import Subscribe from "@/components/subscribe/subscribe.component";
import TrendingPostsPreview from "@/components/trending-posts-preview/trending-posts-preview.component";
import Categories from "@/components/categories/categories.component";

const Home = () => {
  const categories = useSelector(selectCategories);

  return (
    <>
      <HeroSection />
      <div className="mt-56 my-28 mx-56 grid grid-cols-5 gap-5 h-35">
        {categories.map((category) => {
          return <Categories key={category.idCategory} category={category} />;
        })}
      </div>
      <LatestPostsPreview />
      <TrendingPostsPreview />
      <Subscribe />
    </>
  );
};

export default Home;
