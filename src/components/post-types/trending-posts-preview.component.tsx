import { Eye, MessagesSquare } from "lucide-react";
import RecipeCard2 from "./recipe-card-2.component";

const TrendingPostsPreview = () => {
  return (
    <div className="mx-56 mt-28 flex justify-center items-center flex-col">
      <h1 className="text-5xl font-normal text-center mb-6">Trending Posts</h1>
      <p className="text-center text-gray-600 dark:text-white mx-65 mb-12">
        Are you really into cooking? These homemade meal recipes will totally
        blow the minds of your family members.
      </p>
      <div className="grid grid-cols-4 gap-4 pt-3 pb-6">
        <div className="bg-[url(images/tp-1.jpg)] bg-cover relative col-span-2">
          <div className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-white font-medium">
            <div className="flex justify-center flex-col items-center">
              <p className="bg-orange-50 dark:bg-gray-800 text-red-500 rounded-md p-2 w-fit text-[0.9rem]">
                Snacks
              </p>
              <h1 className="text-4xl py-4">Sweet Berry Brownie Swirl</h1>
              <div className="flex text-[0.9rem]">
                <p className="pr-2 py-2">November 24, 2018</p>
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
        </div>
        <RecipeCard2 />
        <RecipeCard2 />
      </div>
      <button className="bg-red-500 hover:bg-red-400 p-4 text-white rounded-sm w-[15%] mt-8">
        All trending posts
      </button>
    </div>
  );
};

export default TrendingPostsPreview;
