import React from "react";
import OpinionsCaroussel from "./OpinionsCaroussel";

function OpinionsSection() {
  return (
    <div className="absolute top-[2050px] sm:top-[1000px] h-[500px] bg-gray-100 w-[100%] flex flex-col items-center justify-start py-0 sm:px-32 box-border">
      <div className="w-[90%] sm:w-[100%] flex flex-col items-center justify-center pt-5">
        <div className="text-gray-900 dark:text-white lg:text-center text-xl sm:text-3xl font-extrabold mb-8 max-w-4xl w-full">
          <h3 className="text-gray-900 dark:text-white text-center ">
            Ils nous ont fait confiance ! À votre tour !
          </h3>
          <OpinionsCaroussel />
        </div>
      </div>
    </div>
  );
}

export default OpinionsSection;
