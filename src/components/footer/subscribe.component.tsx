import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { Form } from "react-router";

const Subscribe = () => {
  return (
    <div
      className={cn(
        "bg-[url(/images/sub.webp)] bg-orange-50 dark:bg-gray-800 bg-cover mt-15 lg:mt-20 pt-10 md:pt-20 xl:pt-30",
        "pb-7 md:px-50 xl:px-90 flex justify-center flex-col"
      )}
    >
      <h1 className="text-2xl lg:text-4xl mx-15 md:mx-20 xl:mx-40 text-center font-medium">
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

          <button>
            <Send />
          </button>
        </div>
        <div className="m-8 flex justify-center items-center">
          <input type="checkbox" name="policy" className=" w-4 h-5" required />
          <span className="pl-2 text-[0.7rem] md:text-[1rem] text-gray-600 dark:text-white">
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
