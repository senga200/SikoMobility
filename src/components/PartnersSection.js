import React from "react";
import Button from "./Button";

function PartnersSection() {
  const handleButtonClick = () => {
    alert("Devenir partenaire.");
    console.log("bouton cliqué partenaires !!");
  };

  return (
    <div>
      {/* absolute top-[1674px]  */}
      <div className="absolute top-[1900px] left-[calc(50%_-_768px)] bg-gray-100 w-[100%] flex flex-col items-center box-border">
        <div className="w-[1280px] flex flex-col items-center justify-center pt-[91px] px-4 pb-[60px] box-border max-w-[1280px]">
          {/* h-[342px]  */}
          <div className="relative rounded-lg box-border w-[1263px] h-[380px] border-[2px] border-solid border-darkslategray">
            <div className="absolute w-[calc(100%_-_98px)] top-[48px] right-[98px] left-[0px] flex flex-col items-center justify-center py-0 pr-[72px] pl-0 box-border">
              <div className="relative leading-[48px] font-extrabold flex text-center w-[1250px] max-w-[1150px]">
                <div className="relative font-bold item-center pl-12">
                  <h3 className="m-10 ml-10 pl-12 text-center">
                    Vous avez un site e-commerce ou une boutique ?
                  </h3>
                </div>
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_98px)] top-[177px] right-[49px] left-[49px] flex flex-col items-start justify-start py-0 pr-[30px] pl-0 box-border text-[18px]">
              <div className="relative leading-[28px] inline-block max-w-[1150px]">
                <p className="m-10">
                  Rejoignez nos partenaires et offrez de multiples services et
                  avantages à vos clients. Augmentez votre chiffre d’affaire
                  avec notre solution en financement.
                </p>
              </div>
            </div>
            <div className="absolute top-[266px] left-[527px] rounded-lg flex flex-row items-center justify-center py-3 px-[22px] text-center text-sm text-dodgerblue  ">
              <div className="flex flex-col items-center justify-center py-0 pr-[2.1691207885742188px] pl-[2.560882568359375px] ">
                <div className="relative leading-[20px] font-semibold">
                  <Button
                    buttonText="Devenir partenaire"
                    onClick={handleButtonClick}
                  />
                </div>
              </div>

              <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                <img
                  className="flex-1 relative max-h-full w-4"
                  alt=""
                  src="/frame.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
