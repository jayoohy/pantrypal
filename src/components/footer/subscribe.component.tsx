import { Send } from "lucide-react";
import { Form } from "react-router";

const Subscribe = () => {
  return (
    <div className="bg-[url(/images/sub.webp)] bg-orange-50 dark:bg-gray-800 bg-cover mt-10 pt-30 pb-7 px-100  flex justify-center flex-col">
      <h1 className="text-4xl mx-35 text-center font-medium">
        Subscribe to the best recipes feed.
      </h1>

      <Form>
        <div className="bg-white dark:bg-black/40 flex justify-between p-3 rounded-lg m-8">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="focus:outline-0 w-xl"
            required
          />
          <span className="text-accent dark:text-white pr-3">|</span>
          <Send />
        </div>
        <div className=" m-8 flex justify-center items-center">
          <input type="checkbox" name="policy" className=" w-4 h-5" required />
          <span className="pl-2 text-gray-600 dark:text-white">
            I've read and accept the{" "}
            <span className="text-black hover:text-green-500 dark:text-white dark:hover:text-green-500">
              Privacy Policy
            </span>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default Subscribe;
