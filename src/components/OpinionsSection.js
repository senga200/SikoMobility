import React from "react";
import OpinionsCaroussel from "./OpinionsCaroussel";

function OpinionsSection() {
  return (
    <div className="absolute top-[1430px] left-[calc(50%_-_768px)] bg-gray-100 w-[100%] h-[446px] flex flex-col items-center justify-start py-0 px-32 box-border">
      <div className="w-[1280px] flex flex-col items-center justify-center pt-10">
        <div className="relative font-bold inline-block line-[4rem]">
          <h3 className="m-10">Ils nous ont fait confiance ! À votre tour !</h3>
          <OpinionsCaroussel />
        </div>
      </div>
    </div>
  );
}

export default OpinionsSection;
