import Lottie from "lottie-react";
import animationData from "@/assets/loader.json";

const Preloader = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-[999]">
      <Lottie
        animationData={animationData}
        loop={true}
        autoPlay={true}
        className="size-50"
      ></Lottie>
    </div>
  );
};

export default Preloader;
