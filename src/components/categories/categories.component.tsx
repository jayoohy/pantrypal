const Categories = () => {
  return (
    <div className="mt-56 my-28 mx-56 grid grid-cols-5 gap-5 h-35">
      <div className="bg-[url(/c-dinner.jpg)] rounded-sm relative">
        <span className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-white font-medium">
          Dinner
        </span>
      </div>
      <div className="bg-[url(/c-seafood.jpg)] rounded-sm relative">
        <span className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-white font-medium">
          Seafood
        </span>
      </div>
      <div className="bg-[url(/c-gf.jpg)] rounded-sm relative">
        <span className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-white font-medium">
          Gluten-Free
        </span>
      </div>
      <div className="bg-[url(/c-healthy.jpg)] rounded-sm relative">
        <span className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-white font-medium">
          Healthy
        </span>
      </div>
      <div className="bg-[url(/c-holiday.jpg)] rounded-sm relative">
        <span className="bg-black/10 hover:bg-black/30 backdrop-brightness-50 absolute inset-0 flex justify-center items-center text-white font-medium">
          Holiday
        </span>
      </div>
    </div>
  );
};

export default Categories;
