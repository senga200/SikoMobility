import React from "react";
import Button from "./Button";

function Nav() {
  const handleButtonClick = () => {
    alert("Simulation de financement.");
    console.log("bouton cliqué simulation !!");
  };

  const handleLogoClick = () => {
    window.open("https://sikomobility.com", "_blank");

    console.log("logo cliqué");
  };

  const handleAppClick = () => {
    window.open("https://app.sikomobility.com", "_blank");
    console.log("app cliqué");
  };

  return (
    <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-gray-200 box-border h-[138px] flex flex-col items-center justify-start pt-0 px-80 pb-0.5 text-21xl text-dodgerblue font-nunito border-b-[2px] border-solid border-dimgray">
      <div className="w-[1280px] flex flex-row flex-wrap items-center justify-between pt-4 pb-0 pr-[16.3900146484375px] pl-4 box-border max-w-[1280px] ">
        <div className="relative w-[352px] h-[107px]">
          <div className="absolute h-[43.93%] w-[75.51%] top-[29.63%] left-[20.4%] leading-[48px] font-extrabold flex items-center ">
            siko mobility
          </div>
          <img
            className="absolute h-[61.5%] w-[13.86%] top-[20.84%] right-[80.57%] bottom-[17.66%] left-[5.57%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/logo.png"
          />
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>
        <div className="flex flex-row items-center justify-start pt-0 px-0 pb-4 text-center text-base text-white font-nunito-sans">
          <div className="rounded-lg bg-gray-200 flex flex-row items-center justify-start">
            <div className="flex flex-col items-start justify-start py-0 pr-8 pl-0 text-left">
              <div className="self-stretch rounded flex flex-col items-start justify-start py-0 pr-[2.970001220703125px] pl-0">
                <div
                  className="relative leading-[24px] cursor-pointer"
                  onClick={handleAppClick}
                >
                  Espace Marchand
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="rounded flex flex-row items-center justify-start gap-[0.19px]">
                <div className="relative leading-[24px]">Nos services</div>
                <div className="">
                  <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-0 pl-8 text-base text-dodgerblue">
              <div className="relative leading-[20px] font-semibold">
                <Button buttonText="Simulation" onClick={handleButtonClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
