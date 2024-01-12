import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";

function Footer() {
  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/company/siko-mobility/?originalSubdomain=fr",
      "_blank"
    );
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/siko_mobility", "_blank");
  };

  const handleYoutubeClick = () => {
    window.open(
      "https://www.youtube.com/channel/UCNBWNcezoGzVpqEgxVM6FAQ",
      "_blank"
    );
  };

  return (
    <footer className="absolute w-full sm:w-full top-[3000px] sm:top-[1900px] bg-gray-200 flex flex-col sm:flex-row flex-wrap items-center justify-center text-sm sm:items-start sm:justify-between">
      <div className="w-full sm:w-[1280px] flex flex-col  items-start justify-start py-8 px-4 box-border gap-[32px] mx-auto relative ">
        <div className="self-stretch flex flex-row items-start justify-between flex-wrap ">
          <div className="self-stretch relative w-[416px]  pt-[230px] sm:pt-0">
            <div className="absolute w-full top-[64px] ">
              <div className="relative leading-[20px] inline-block max-w-[416px]  p-10">
                contact@sikomobility.com
              </div>
            </div>
            <div className="absolute w-full top-[92px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[100px] pl-0 box-border">
              <div className="relative leading-[20px] inline-block max-w-[416px]  p-10">
                86 rue Dutot, 75015 Paris
              </div>
            </div>
            <div className="absolute w-full top-[136px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-3 ">
              <p className="m-0  p-10">
                Siko Mobility respecte les normes sociales et environnementales
                et s'inscrit dans une démarche de progrès.
              </p>
            </div>

            <div className="absolute top-[-60px] left-[-27px] w-[352px] h-[91px] text-21xl text-dodgerblue font-nunito p-10">
              <Logo title="siko mobility" />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
            </div>
          </div>

          <ul className="self-stretch flex flex-col sm:flex-row sm:items-start justify-start gap-[24px] ml-0 text-white list-none">
            <li className="flex flex-col items-start justify-start pt-0 px-0 pb-14 gap-[24px]">
              <h4 className="relative leading-[20px] uppercase font-semibold">
                Informations
              </h4>
              <ul className="self-stretch flex flex-col items-start justify-start py-0 pl-0 gap-[16px] text-base-6 text-darkgray list-none">
                <li className="relative leading-[24px]">Mentions légales</li>
                <li className="relative leading-[24px]">
                  Conditions générales de vente
                </li>
                <li className="relative leading-[24px]">
                  Politique de confidentialité
                </li>
                <li className="relative leading-[24px]">RGPD & Cookies</li>
              </ul>
            </li>

            <li className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px]">
              <h4 className="relative leading-[20px] uppercase font-semibold">
                Siko Mobility
              </h4>
              <ul className="self-stretch flex flex-col items-start justify-start py-0 pl-0 gap-[16px] text-base text-darkgray  list-none">
                <li className="relative leading-[24px]">Accueil</li>
                <li className="relative leading-[24px]">Devenir partenaire</li>
                <li className="relative leading-[24px]">Qui sommes-nous ?</li>
                <li className="relative leading-[24px]">Contact</li>
                <li className="relative leading-[24px]">FAQ</li>
              </ul>
            </li>

            <li className="flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px] sm:gap[0px]">
              <h4 className="relative leading-[20px] uppercase font-semibold   ">
                Accès rapide
              </h4>
              <ul className="self-stretch flex flex-col items-start justify-start py-0 pl-0 gap-[16px] text-base text-darkgray  list-none">
                <li className="relative leading-[24px]">Tous nos services</li>
                <li className="relative leading-[24px]">Assurance</li>
                <li className="relative leading-[24px]">Maintenance</li>
                <li className="relative leading-[24px]">Assistance</li>
                <li className="relative leading-[24px]">
                  Extension de garanties
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="relative box-border w-full sm:w-[1248px] h-px overflow-hidden shrink-0 border-t-[1px] border-solid border-darkslategray" />

        <div className="self-stretch flex flex-row items-center justify-between text-start sm:text-center">
          <div className="relative leading-[20px]">
            © 2021 Siko Mobility. Tous droits réservés.
          </div>

          <div className="w-[184px] flex flex-row items-start justify-between">
            <div className="self-stretch h-5 flex flex-col items-start justify-start">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                onClick={handleTwitterClick}
                cursor={"pointer"}
              />
            </div>

            <div className="h-[21px] flex flex-col items-start justify-start">
              <FontAwesomeIcon
                icon={faYoutube}
                size="2x"
                onClick={handleYoutubeClick}
                cursor={"pointer"}
              />
            </div>

            <div className="self-stretch h-5 flex flex-col items-start justify-start">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                onClick={handleLinkedinClick}
                cursor={"pointer"}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
