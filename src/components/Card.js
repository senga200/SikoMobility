import React from "react";

function Card({ cardTitle, cardText, cardImage, onClick }) {
  return (
    <div
      className="transform hover:scale-105 transition-all duration-500 rounded-lg w-full md:w-[300px] lg:w-[405px] flex flex-col items-start justify-start relative min-w-[256px] min-h-[256px] cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-full flex-1 relative rounded-lg max-w-full overflow-hidden max-h-full object-cover z-[0]"
        alt=""
        src={cardImage}
      />

      <div className="my-0 mx-[!important] absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-gray-400 hover:bg-transparent transition-all duration-500 flex flex-col items-start justify-end pt-[50%] pb-6 pr-px pl-0 box-border gap-[37px] z-[1]">
        <div className="bg-gray-200 w-full md:w-[300px] lg:w-[405px] h-[67px] flex flex-col items-center justify-between py-5">
          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{cardTitle}</h3>
          </div>
        </div>
        <div className="bg-gray-200 w-full md:w-[300px] lg:w-[405px] box-border h-[131px] flex flex-col items-center justify-center text-base">
          <p className="m-4 md:m-10">{cardText}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
