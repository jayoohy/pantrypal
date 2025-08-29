import LatestPost from "../latest-post/latest-post.component";

const LatestPostsPreview = () => {
  return (
    <div className="mx-56 flex justify-center items-center flex-col">
      <h1 className="text-5xl font-normal text-center mb-6">Latest Posts</h1>
      <p className="text-center text-gray-600 mx-65 mb-12">
        Looking for cooking inspiration? Below are our newly developed recipes
        for any occasion - check out and try them!
      </p>
      <LatestPost />
      <button className="bg-green-500 hover:bg-green-400 p-4 text-white rounded-sm w-[15%] mt-8">
        All latest posts
      </button>
    </div>
  );
};

export default LatestPostsPreview;
