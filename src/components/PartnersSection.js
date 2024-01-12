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
      <div className="absolute top-[2550px] sm:top-[1370px]  bg-gray-100 w-[100%] flex flex-col items-center ">
        <div className="flex flex-col items-center justify-center pt-[30px] sm:pt-[91px] pb-[60px]  w-[350px] sm:max-w-[1280px] ">
          {/* h-[342px]  */}
          <div className="relative rounded-lg box-border w-[100%] sm:w-[1263px] h-[380px] border-[2px] border-solid border-darkslategray">
            <div className="absolute top-[10px]  left-[0px] flex flex-col items-center justify-center  py-0 sm:pr-[20px] pl-0 box-border h-[150px]">
              <div className="relative leading-[48px] font-extrabold flex text-center h-[200px] w-[350px] sm:w-[1250px] mr-15 pr-15 sm:pr-0 ">
                <div className="text-gray-900 dark:text-white lg:text-center text-xl sm:text-3xl font-extrabold mb-8 max-w-4xl w-full  ">
                  <h3 className="text-gray-900 dark:text-white text-center">
                    Vous avez un site e-commerce ou une boutique ?
                  </h3>
                </div>
              </div>
            </div>
            <div className="absolute top-[177px] flex flex-col items-start justify-start py-0  pl-0 box-border text-[18px]">
              <div className="relative leading-[28px] inline-block w-[300px] sm:w-[1150px]">
                <p className=" pl-6 ml-8 text-center sm:text-start">
                  Rejoignez nos partenaires et offrez de multiples services et
                  avantages à vos clients. Augmentez votre chiffre d’affaire
                  avec notre solution en financement.
                </p>
              </div>
            </div>
            <div className="absolute top-[125px] sm:top-[266px] left-12 sm:left-[527px] rounded-lg flex flex-row items-center justify-center py-3 px-[22px] text-center text-sm text-dodgerblue item-center ">
              <div className="flexitems-center justify-center py-0 ">
                <div className="relative leading-[20px] font-semibold">
                  <Button
                    buttonText="Devenir partenaire"
                    onClick={handleButtonClick}
                  />
                </div>
              </div>

              <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
