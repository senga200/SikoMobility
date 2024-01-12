import React, { useState } from "react";

function Logo({ title, handleLogoClick, isOpen }) {
  const [showTitle, setShowTitle] = useState(true);

  const hideTitle = () => {
    setShowTitle(false);
  };

  return (
    <div className="relative w-full sm:w-[300px] h-[107px] sm:pt-2">
      {isOpen ? (
        <>
          <div className="absolute sm:h-[45%] w-[100%] sm:top-[30%] top-[50%] left-[20%] leading-[48px] font-extrabold items-center text-xl sm:text-lg hidden">
            {title}
          </div>
          <img
            className="absolute h-[60%] w-[13%] sm:top-[20%] right-[80%] bottom-[17%] left-[5%] max-w-full overflow-hidden max-h-full object-cover"
            alt="logo siko mobility"
            src="/logo.png"
            onClick={handleLogoClick}
          />
        </>
      ) : (
        <>
          <div className="absolute h-[10%] sm:h-[50%] w-[100%] sm:top-[30%] top-[50%] left-[20%] leading-[48px] font-extrabold flex items-center text-xl sm:text-lg">
            {title}
          </div>
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro cursor-pointer"
            onClick={handleLogoClick}
          />
          <img
            className="absolute h-[60%] w-[13%] sm:top-[20%] right-[80%] bottom-[17%] left-[5%] max-w-full overflow-hidden max-h-full object-cover"
            alt="logo siko mobility"
            src="/logo.png"
          />
        </>
      )}
    </div>
  );
}

export default Logo;
