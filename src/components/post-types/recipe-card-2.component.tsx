import { MessagesSquare } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";

const RecipeCard2 = () => {
  return (
    <Card className="bg-orange-50 dark:bg-gray-800">
      <CardContent>
        <img
          src="images/lp-1.jpg"
          alt="food"
          className="w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-red-500 hover:text-black">Vegan</p>
        <h1 className="hover:text-red-500 text-2xl font-semibold py-2">
          Hawaiian Chicken Poke Bowl
        </h1>
        <div className="flex">
          <p className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
            November 24, 2018
          </p>
          <span className="flex px-2">
            <MessagesSquare className="pr-1" />
            <p className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              0
            </p>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard2;
