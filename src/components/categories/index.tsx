import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent } from "../ui/carousel";
import { useAppSelector } from "@/utils/hooks";
import { selectCategories } from "@/store/categories/category.selector";
import CategoryItem from "./category-item.component";

function CategoriesPreview() {
  const categories = useAppSelector(selectCategories);
  return (
    <div className="mt-30 my-10 md:mt-40 lg:mt-56 lg:mb-28">
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
                <CategoryItem key={category.idCategory} category={category} />
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default CategoriesPreview;
