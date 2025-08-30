import { Eye, MessagesSquare } from "lucide-react";

const TrendingPostsPreview = () => {
  return (
    <div className="mx-56 mt-28 flex justify-center items-center flex-col">
      <h1 className="text-5xl font-normal text-center mb-6">Trending Posts</h1>
      <p className="text-center text-gray-600 mx-65 mb-12">
        Are you really into cooking? These homemade meal recipes will totally
        blow the minds of your family members.
      </p>
      <div>
        <div className="bg-[url(tp-1.jpg)]">
          <div>
            <p>Snacks</p>
            <h1>Sweet Berry Brownie Swirl</h1>
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
        ...
      </div>
      <button className="bg-red-500 hover:bg-red-400 p-4 text-white rounded-sm w-[15%] mt-8">
        All trending posts
      </button>
    </div>
  );
};

export default TrendingPostsPreview;
