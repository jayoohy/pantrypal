import Image from "../image";

const RecipeCard3 = () => {
  return (
    <div className="mt-8 flex">
      <Image
        src="images/lp-1.jpg"
        alt="food"
        className="w-[8rem] rounded-md"
        isZoomed
      />
      <div className="text-[1.2rem] font-semibold justify-self-start">
        <h1 className="w-full">Lactose Free Homemade Cheese</h1>
      </div>
    </div>
  );
};

export default RecipeCard3;
