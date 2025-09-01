import { Eye, MessagesSquare, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-[url(/fr-2.jpg)] h-[38rem] rounded-md bg-cover bg-bottom flex justify-center mx-56 relative -z-10 mt-24">
      <div className="absolute bottom-38 bg-white p-4 rounded-full z-10 shadow-xl">
        <Play fill="black" />
      </div>
      <div className="border rounded-sm p-10 pt-20 shadow-lg mt-69 absolute top-38 bg-white dark:bg-[#121922] dark:shadow-white/10 flex flex-col items-center w-2xl">
        <p className="bg-gray-100 dark:bg-gray-800 text-red-500 p-2 w-fit">
          Healthy
        </p>
        <h2 className="text-5xl text-center font-normal my-5 px-20">
          Quick Meaty Recipes
        </h2>
        <div className="flex">
          <p className="p-2">November 24, 2018</p>
          <span className="flex p-2">
            <Eye className="pr-1" />
            <p>1551</p>
          </span>
          <span className="flex p-2">
            <MessagesSquare className="pr-1" />
            <p>0</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
