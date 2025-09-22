import Image from "@/components/image";

const Recipe = () => {
  return (
    <div className="mt-26 mx-36">
      <h1 className="text-4xl">Avocado Toast</h1>
      <Image src="images/lp-1.jpg" alt="food" isZoomed />
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-orange-50 dark:bg-gray-800 mr-60 rounded-md">
          <p>Ingredients</p>
          <ul>
            <li>100 ml milk</li>
            <li>50 g butter</li>
            <li>150 g pumpkin</li>
            <li>1 tbs sugar</li>
            <li>2 tsp cinnamon</li>
            <li>a pinch of salt</li>
            <li>30 leaves of thyme</li>
            <li>100 ml oat milk</li>
            <li>2 tsp ground cinnamon</li>
          </ul>
        </div>
        <div className="col-span-2">
          <p>Directions</p>
          <p>
            Nunc nulla velit, feugiat vitae ex quis, lobortis porta leo. Donec
            dictum lectus in ex accumsan sodales. Pellentesque habitant morbi
            tristique. Nunc nulla velit, feugiat vitae ex quis, lobortis porta
            leo. Donec dictum lectus in ex. lentesque habitant morbi tristique.
            Nunc nulla velit, feugiat vitae ex quis, lobortis porta leo. Donec
            dictum lectus in ex. Habitant morbi tristique.Nunc nulla velit,
            feugiat vitae ex quis, lobortis porta leo. Donec dictum lectus in
            ex. Donec dictum lectus in ex accumsan sodales. Pellentesque
            habitant morbi tristique. Nunc nulla velit, feugiat vitae ex quis,
            lobortis porta leo. Donec dictum lectus in ex. lobortis porta leo.
            Donec dictum lectus in ex. rbi tristique.Nunc nulla velit, feugiat
            vitae ex quis, lobortis porta leo. Donec dictum lectus in ex. Donec
            dictum lectus in ex accumsan sodales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
