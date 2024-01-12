import React from "react";

function Button({ buttonText, onClick }) {
  return (
    <div
      className="relative rounded-lg flex items-center justify-center py-3 px-4 text-xl font-bold bg-dodgerblue text-white hover:bg-white hover:text-dodgerblue border-2 border-dodgerblue transition-all duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div className="leading-[20px]">{buttonText}</div>
      </div>
    </div>
  );
}

export default Button;
