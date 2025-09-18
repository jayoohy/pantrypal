import { useSelector } from "react-redux";
import { selectCategories } from "@/store/categories/category.selector";
import HeroSection from "@/components/hero-section/hero-section.component";
import LatestPostsPreview from "@/components/latest-posts-preview/latest-posts-preview.component";
import Subscribe from "@/components/subscribe/subscribe.component";
import TrendingPostsPreview from "@/components/trending-posts-preview/trending-posts-preview.component";
// import Categories from "@/components/categories/categories.component";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Categories from "@/components/categories";

const Home = () => {
  const categories = useSelector(selectCategories);

  return (
    <>
      <HeroSection />
      {/* <div className="mt-56 my-28">
        <div className="relative w-full py-6 lg:py-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10" />

          <Carousel
            opts={{
              align: "start",
              loop: true,
              skipSnaps: true,
              duration: 300,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
              }),
            ]}
          >
            <CarouselContent>
              {categories.map((category) => {
                return (
                  <Categories key={category.idCategory} category={category} />
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div> */}
      <Categories />

      {/* <div className="overflow-hidden">
        <div className="mt-56 my-28 flex h-fit gap-10">
          {categories.map((category) => {
            return <Categories key={category.idCategory} category={category} />;
          })}
        </div>
      </div> */}
      <LatestPostsPreview />
      <TrendingPostsPreview />
      <Subscribe />
    </>
  );
};

export default Home;
