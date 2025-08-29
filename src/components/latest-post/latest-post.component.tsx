import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessagesSquare } from "lucide-react";

const LatestPost = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      <Card>
        <CardContent>
          <img src="lp-1.jpg" alt="food" className="w-full" />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p className="text-red-500 hover:text-black">Vegan</p>
          <h1 className="hover:text-red-500 text-2xl font-semibold py-2">
            Hawaiian Chicken Poke Bowl
          </h1>
          <div className="flex">
            <p className="text-gray-600 hover:text-black">November 24, 2018</p>
            <span className="flex px-2">
              <MessagesSquare className="pr-1" />
              <p className="text-gray-600 hover:text-black">0</p>
            </span>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardContent>
          <img src="lp-2.jpg" alt="food" className="w-full" />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p className="text-red-500 hover:text-black">Vegan</p>
          <h1 className="hover:text-red-500 text-2xl font-semibold py-2">
            Leek Soup With Pasta
          </h1>
          <div className="flex">
            <p className="text-gray-600 hover:text-black">November 24, 2018</p>
            <span className="flex px-2">
              <MessagesSquare className="pr-1" />
              <p className="text-gray-600 hover:text-black">0</p>
            </span>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardContent>
          <img src="lp-3.jpg" alt="food" className="w-full" />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <p className="text-red-500 hover:text-black">Vegan</p>
          <h1 className="hover:text-red-500 text-2xl font-semibold py-2">
            Zucchini-basil Soup With Chickpeas
          </h1>
          <div className="flex">
            <p className="text-gray-600 hover:text-black">November 24, 2018</p>
            <span className="flex px-2">
              <MessagesSquare className="pr-1" />
              <p className="text-gray-600 hover:text-black">0</p>
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LatestPost;
