import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = () => {
    alert("Simulation de financement.");
  };

  const handleLogoClick = () => {
    window.open("https://sikomobility.com", "_blank");
  };

  const handleAppClick = () => {
    window.open("https://app.sikomobility.com", "_blank");
  };

  return (
    <nav className="justify-end absolute w-full top-0 bg-gray-200 box-border h-[138px] flex flex-col items-center px-10 py-5 text-2xl  text-dodgerblue font-nunito border-b-[2px] border-solid border-dimgray">
      <div className="flex w-[330px] md:w-[1280px]">
        {/* TAILLE */}

        {/* Logo */}
        <div className="w-full sm:w-[1280px] sm:pt-0 items-center pt-4 pb-0 pl-4 sm:pb-0 box-border">
          <Logo
            title="siko mobility"
            handleLogoClick={handleLogoClick}
            isOpen={isOpen}
          />
        </div>

        {/* Menu de navigation */}
        <div
          className={`sm:flex flex-row sm:w-[500px] sm:pt-12 items-start justify-start pt-5 pb-5 sm:py-0 pr-0 pl-0 text-left ${
            isOpen
              ? "block text-right   h-[40px] pr-36 mt-10 pl-10 border-[2px] border-solid border-darkslategray"
              : "hidden"
          }`}
        >
          <div className="self-stretch rounded flex flex-col items-center py-0 pl-0 ">
            <div
              className="relative leading-[24px] cursor-pointer text-sm md:text-xl pr-4 sm:pr-5 transform hover:scale-105 hover:text-[white] transition-all duration-500"
              onClick={handleAppClick}
            >
              Espace Marchand
            </div>
          </div>
          <div className="rounded flex flex-row items-center justify-start gap-[0.19px]">
            <div className="relative leading-[24px] cursor-pointer text-sm md:text-xl transform hover:scale-105 hover:text-[white] transition-all duration-500">
              Nos services
            </div>
            <div className="">
              <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center"></div>
            </div>
          </div>
          {/* Bouton "Simulation" pour la version mobile */}
          <div className="relative font-semibold sm:hidden pt-5 z-10">
            <Button buttonText="Simulation" onClick={handleButtonClick} />
          </div>
        </div>
        {/* Bouton "Simulation" pour la version desktop */}
        <div className="hidden md:flex flex-col items-start justify-start py-0 pr-0 pl-8 text-base text-dodgerblue">
          <div className="relative leading-[20px] font-semibold sm:pt-10">
            <Button buttonText="Simulation" onClick={handleButtonClick} />
          </div>
        </div>
        {/* Bouton de menu hamburger pour les écrans mobiles */}
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            style={{
              marginTop: isOpen ? "50px" : "60px",
              marginLeft: isOpen ? "-40px" : "20px",

              marginRight: isOpen ? "0px" : "20px",
            }}
          >
            {isOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                size="2x"
                className="text-dodgerblue bg-transparent cursor-pointer"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                className="text-dodgerblue bg-transparent cursor-pointer"
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
