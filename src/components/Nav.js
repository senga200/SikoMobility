import React from "react";
import Button from "./Button";
import Logo from "./Logo";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

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
    <nav className="justify-end absolute w-full top-0 bg-gray-200 box-border h-[138px] flex flex-col items-center px-10 py-5 text-2xl  text-dodgerblue font-nunito border-b-[2px] border-solid border-dimgray">
      <div className="flex w-[330px] md:w-[1280px]">
        {/* TAILLE */}
        <div className="w-full sm:w-[1280px] sm:pt-0 items-center justify-between pt-4 pb-0 pl-4 sm:pb-0 box-border">
          <Logo
            title="siko mobility"
            handleLogoClick={handleLogoClick}
            isOpen={isOpen}
          />
        </div>

        {/* Menu de navigation */}
        <div
          className={`sm:flex flex-col sm:w-[350px] sm:pt-12 items-start justify-start pt-5 pb-5 sm:py-0 pr-0 pl-0 text-left ${
            isOpen
              ? "block text-right   h-[50px] pr-28 mt-10 pl-10 border-[2px] border-solid border-darkslategray"
              : "hidden"
          }`}
        >
          <div className="self-stretch rounded flex flex-col items-start justify-start py-0 pr-[2.970001220703125px] pl-0 ">
            <div
              className="relative leading-[24px] cursor-pointer text-sm md:text-xl"
              onClick={handleAppClick}
            >
              Espace Marchand
            </div>
          </div>
          <div className="rounded flex flex-row items-center justify-start gap-[0.19px]">
            <div className="relative leading-[24px] cursor-pointer text-sm md:text-xl">
              Nos services
            </div>
            <div className="">
              <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center"></div>
            </div>
          </div>
          {/* Bouton "Simulation" pour la version mobile */}
          <div className="relative leading-[20px] font-semibold sm:hidden pt-8 z-10 ml-auto">
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
              marginLeft: isOpen ? "20px" : "20px",

              marginRight: isOpen ? "0px" : "20px",
            }}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faXmark} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
