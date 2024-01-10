import React from "react";
import Rating from "./Rating";

function OpinionCard({ data, isActive }) {
  return (
    <div
      className={`transition-opacity duration-500 absolute top-0 left-0 right-0 bottom-0 ${
        data.id === isActive ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gray-200 transform hover:scale-105 transition-all duration-500 p-3 rounded-lg shadow-md max-w-[350px] mx-auto">
        <h5 className="text-xl font-bold py-0 text-center ">{data.h5}</h5>
        <p className=" text-sm">{data.p}</p>
        <div className="flex flex-col items-center">
          <Rating rating={parseFloat(data.spanRate)} />
          <span className="text-sm text-blue-500 pt-2">
            {data.spanRate}/5{" - "}
            {data.spanName}
            {" - "}
            {data.spanDate}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OpinionCard;
