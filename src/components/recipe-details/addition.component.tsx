import { Form } from "react-router";
import { Send } from "lucide-react";
import RecipeCard3 from "../post-types/recipe-card-3.component";

const Addition = () => {
  return (
    <div className="col-span-2 ml-8">
      <div className="bg-[url(/images/sub.webp)] bg-orange-50 dark:bg-gray-900 bg-coverflex justify-center pt-30 pb-22 flex-col rounded-md">
        <h1 className="text-3xl mb-15 leading-10 text-center font-medium">
          Subscribe to the best recipes feed.
        </h1>

        <Form>
          <div className="bg-white dark:bg-black/40 flex justify-between items-center m-6 h-10 rounded-lg px-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="focus:outline-0 w-[30rem]"
              required
            />
            <span className="text-gray-600 dark:text-white pr-3">|</span>
            <Send width={35} />
          </div>
          <div className="flex justify-center items-center mt-12">
            <input
              type="checkbox"
              name="policy"
              className=" w-4 h-5"
              required
            />
            <span className="text-gray-600 dark:text-white">
              I've read and accept the{" "}
              <span className="text-black hover:text-green-500 dark:text-white dark:hover:text-green-500">
                Privacy Policy
              </span>
            </span>
          </div>
        </Form>
      </div>
      <div>
        <h1 className="text-2xl font-medium pt-15">Recent posts</h1>
        <RecipeCard3 />
      </div>
    </div>
  );
};

export default Addition;
