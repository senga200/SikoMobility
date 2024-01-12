// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faYoutube,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// function Footer() {
//   return (
//     <div className="absolute w-[100%] sm:w-full top-[3000px] sm:top-[2000px] bg-gray-200 flex flex-col md:flex-row items-center box-border text-sm sm:items-start sm:justify-between">
//       <div className="w-full sm:w-[1280px] flex flex-col items-start justify-start py-8 px-4 box-border gap-[32px] mx-auto relative ">
//         <div className="self-stretch flex flex-row items-start justify-between    ">
//           <div className="self-stretch relative w-[416px] ">
//             <div className="absolute w-full top-[64px]">
//               <div className="relative leading-[20px] inline-block max-w-[416px]">
//                 contact@sikomobility.com
//               </div>
//             </div>
//             <div className="absolute w-full top-[92px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[252px] pl-0 box-border">
//               <div className="relative leading-[20px] inline-block max-w-[416px]">
//                 86 rue Dutot, 75015 Paris
//               </div>
//             </div>
//             <div className="absolute w-full top-[136px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
//               <i className="relative leading-[20px] inline-block max-w-[416px]">
//                 <p className="m-0">
//                   Siko Mobility respecte les normes sociales et
//                   environnementales
//                 </p>
//                 <p className="m-0">
//                   et s'inscrit dans une démarche de progrès.
//                 </p>
//               </i>
//             </div>
//             <div className="absolute top-[-27px] left-[-27px] w-[352px] h-[91px] text-21xl text-dodgerblue font-nunito">
//               <div className="absolute h-[43.96%] w-[75.51%] top-[29.67%] left-[20.4%] leading-[48px] font-extrabold flex items-center">
//                 siko mobility
//               </div>
//               <img
//                 className="absolute h-[61.54%] w-[13.86%] top-[20.88%] right-[80.57%] bottom-[17.58%] left-[5.57%] max-w-full overflow-hidden max-h-full object-cover"
//                 alt="logo siko mobility"
//                 src="/logo.png"
//               />
//               <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
//             </div>
//           </div>
//           <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-white">
//             <div className="flex flex-col items-start justify-start pt-0 px-0 pb-14 gap-[24px]">
//               <div className="relative leading-[20px] uppercase font-semibold">
//                 Informations
//               </div>
//               <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[1.160003662109375px] pl-0 gap-[16px] text-base-6 text-darkgray">
//                 <div className="relative leading-[24px]">Mentions légales</div>
//                 <div className="relative text-base-9 leading-[24px]">
//                   Conditions générales de vente
//                 </div>
//                 <div className="relative text-[15.5px] leading-[24px]">
//                   Politique de confidentialité
//                 </div>
//                 <div className="relative text-base leading-[24px]">{`RGPD & Cookies`}</div>
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px]">
//               <div className="relative leading-[20px] uppercase font-semibold">
//                 Siko Mobility
//               </div>
//               <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[74.16000366210938px] pl-0 gap-[16px] text-base text-darkgray">
//                 <div className="relative text-base-9 leading-[24px]">
//                   Accueil
//                 </div>
//                 <div className="relative text-[15.8px] leading-[24px]">
//                   Devenir partenaire
//                 </div>
//                 <div className="relative leading-[24px]">Qui sommes-nous ?</div>
//                 <div className="relative leading-[24px]">Contact</div>
//                 <div className="relative leading-[24px]">FAQ</div>
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px]">
//               <div className="relative leading-[20px] uppercase font-semibold">
//                 ACCESS RAPIDE
//               </div>
//               <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[54.160003662109375px] pl-0 gap-[16px] text-base text-darkgray">
//                 <div className="relative leading-[24px]">Tous nos services</div>
//                 <div className="relative leading-[24px]">Assurance</div>
//                 <div className="relative text-base-6 leading-[24px]">
//                   Maintenance
//                 </div>
//                 <div className="relative leading-[24px]">{`Assistance `}</div>
//                 <div className="relative leading-[24px]">
//                   Extension de garantie
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="relative box-border w-full sm:w-[1248px] h-px overflow-hidden shrink-0 border-t-[1px] border-solid border-darkslategray" />

//         <div className="self-stretch flex flex-row items-center justify-between text-center">
//           <div className="flex flex-col items-center justify-start">
//             <div className="relative leading-[20px]">
//               © 2021 Siko Mobility. Tous droits réservés.
//             </div>
//           </div>
//           <div className="w-[184px] flex flex-row items-start justify-center">
//             <div className="self-stretch w-[21px] flex flex-col items-start justify-start ">
//               <FontAwesomeIcon icon={faFacebook} size="2x" />
//             </div>
//             <div className="self-stretch w-11 flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border">
//               <div className="self-stretch h-5 flex flex-col items-start justify-start">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </div>
//             </div>
//             <div className="self-stretch w-11 flex flex-col items-start justify-start py-0 pr-0 pl-3.5 box-border">
//               <div className="h-[21px] flex flex-col items-start justify-start">
//                 <FontAwesomeIcon icon={faYoutube} size="2x" />
//               </div>
//             </div>
//             <div className="self-stretch w-[43px] flex flex-col items-start justify-start py-0 pr-0 pl-6 box-border">
//               <div className="self-stretch h-5 flex flex-col items-start justify-start">
//                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faYoutube,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";

// function Footer() {
//   return (
//     <footer className="absolute w-full sm:w-full top-[3000px] sm:top-[2000px] bg-gray-200 flex flex-col sm:flex-row flex-wrap items-center box-border text-sm sm:items-start sm:justify-between">
//       <div className="w-full sm:w-[1280px] flex flex-col items-start justify-start py-8 px-4 box-border gap-[32px] mx-auto relative ">
//         <div className="self-stretch flex flex-row items-start justify-between flex-wrap">
//           <div className="self-stretch relative w-[416px] ">
//             <div className="absolute w-full top-[64px]">
//               <div className="relative leading-[20px] inline-block max-w-[416px]">
//                 contact@sikomobility.com
//               </div>
//             </div>
//             <div className="absolute w-full top-[92px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[252px] pl-0 box-border">
//               <div className="relative leading-[20px] inline-block max-w-[416px]">
//                 86 rue Dutot, 75015 Paris
//               </div>
//             </div>
//             <div className="absolute w-full top-[136px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
//               <i className="relative leading-[20px] inline-block max-w-[416px]">
//                 <p className="m-0">
//                   Siko Mobility respecte les normes sociales et
//                   environnementales
//                 </p>
//                 <p className="m-0">
//                   et s'inscrit dans une démarche de progrès.
//                 </p>
//               </i>
//             </div>
//             <div className="absolute top-[-27px] left-[-27px] w-[352px] h-[91px] text-21xl text-dodgerblue font-nunito">
//               <div className="absolute h-[43.96%] w-[75.51%] top-[29.67%] left-[20.4%] leading-[48px] font-extrabold flex items-center">
//                 siko mobility
//               </div>
//               <img
//                 className="absolute h-[61.54%] w-[13.86%] top-[20.88%] right-[80.57%] bottom-[17.58%] left-[5.57%] max-w-full overflow-hidden max-h-full object-cover"
//                 alt="logo siko mobility"
//                 src="/logo.png"
//               />
//               <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
//             </div>
//           </div>
//           <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-white">
//             <div className="flex flex-col items-start justify-start pt-0 px-0 pb-14 gap-[24px]">
//               <div className="relative leading-[20px] uppercase font-semibold">
//                 Informations
//               </div>
//               <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[1.160003662109375px] pl-0 gap-[16px] text-base-6 text-darkgray">
//                 <div className="relative leading-[24px]">Mentions légales</div>
//                 <div className="relative text-base-9 leading-[24px]">
//                   Conditions générales de vente
//                 </div>
//                 <div className="relative text-[15.5px] leading-[24px]">
//                   Politique de confidentialité
//                 </div>
//                 <div className="relative text-base leading-[24px]">{`RGPD & Cookies`}</div>
//               </div>
//             </div>
//             <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px]">
//               <div className="relative leading-[20px] uppercase font-semibold">
//                 Siko Mobility
//               </div>
//               <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[74.16000366210938px] pl-0 gap-[16px] text-base text-darkgray">
//                 <div className="relative text-base-9 leading-[24px]">
//                   Accueil
//                 </div>
//                 <div className="relative text-[15.8px] leading-[24px]">
//                   Devenir partenaire
//                 </div>
//                 <div className="relative leading-[24px]">Qui sommes-nous ?</div>
//                 <div className="relative leading-[24px]">Contact</div>
//                 <div className="relative leading-[24px]">FAQ</div>
//               </div>
//             </div>
//             <div className="flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px] ">
//               <div className="relative leading-[20px] uppercase font-semibold">
//                 ACCESS RAPIDE
//               </div>
//               <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[54.160003662109375px] pl-0 gap-[16px] text-base text-darkgray">
//                 <div className="relative leading-[24px]">Tous nos services</div>
//                 <div className="relative leading-[24px]">Assurance</div>
//                 <div className="relative text-base-6 leading-[24px]">
//                   Maintenance
//                 </div>
//                 <div className="relative leading-[24px]">{`Assistance `}</div>
//                 <div className="relative leading-[24px]">
//                   Extension de garantie
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="relative box-border w-full sm:w-[1248px] h-px overflow-hidden shrink-0 border-t-[1px] border-solid border-darkslategray" />

//         <div className="self-stretch flex flex-row items-center justify-between text-center">
//           <div className="flex flex-col items-center justify-start">
//             <div className="relative leading-[20px]">
//               © 2021 Siko Mobility. Tous droits réservés.
//             </div>
//           </div>
//           <div className="w-[184px] flex flex-row items-start justify-center">
//             <div className="self-stretch w-[21px] flex flex-col items-start justify-start ">
//               <FontAwesomeIcon icon={faFacebook} size="2x" />
//             </div>
//             <div className="self-stretch w-11 flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border">
//               <div className="self-stretch h-5 flex flex-col items-start justify-start">
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </div>
//             </div>
//             <div className="self-stretch w-11 flex flex-col items-start justify-start py-0 pr-0 pl-3.5 box-border">
//               <div className="h-[21px] flex flex-col items-start justify-start">
//                 <FontAwesomeIcon icon={faYoutube} size="2x" />
//               </div>
//             </div>
//             <div className="self-stretch w-[43px] flex flex-col items-start justify-start py-0 pr-0 pl-6 box-border">
//               <div className="self-stretch h-5 flex flex-col items-start justify-start">
//                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="absolute w-full sm:w-full top-[3000px] sm:top-[1900px] bg-gray-200 flex flex-col sm:flex-row flex-wrap items-center box-border text-sm sm:items-start sm:justify-between">
      <div className="w-full sm:w-[1280px] flex flex-col  items-start justify-start py-8 px-4 box-border gap-[32px] mx-auto relative ">
        <div className="self-stretch flex flex-row  items-start justify-between flex-wrap ">
          <div className="self-stretch relative w-[416px] pt-[230px] sm:pt-0">
            <div className="absolute w-full top-[64px]">
              <div className="relative leading-[20px] inline-block max-w-[416px]">
                contact@sikomobility.com
              </div>
            </div>
            <div className="absolute w-full top-[92px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-[252px] pl-0 box-border">
              <div className="relative leading-[20px] inline-block max-w-[416px]">
                86 rue Dutot, 75015 Paris
              </div>
            </div>
            <div className="absolute w-full top-[136px] right-[0px] left-[0px] flex flex-col items-start justify-start py-0 pr-3 ">
              <i className="relative leading-[20px]  max-w-[416px]">
                <p className="m-0">
                  Siko Mobility respecte les normes sociales et
                  environnementales
                </p>
                <p className="m-0">
                  et s'inscrit dans une démarche de progrès.
                </p>
              </i>
            </div>
            <div className="absolute top-[-27px] left-[-27px] w-[352px] h-[91px] text-21xl text-dodgerblue font-nunito">
              <div className="absolute h-[43.96%] w-[75.51%] top-[29.67%] left-[20.4%] leading-[48px] font-extrabold flex items-center">
                siko mobility
              </div>
              <img
                className="absolute h-[61.54%] w-[13.86%] top-[20.88%] right-[80.57%] bottom-[17.58%] left-[5.57%] max-w-full overflow-hidden max-h-full object-cover"
                alt="logo siko mobility"
                src="/logo.png"
              />
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-white">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-14 gap-[24px]">
              <div className="relative leading-[20px] uppercase font-semibold">
                Informations
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[1.160003662109375px] pl-0 gap-[16px] text-base-6 text-darkgray">
                <div className="relative leading-[24px]">Mentions légales</div>
                <div className="relative text-base-9 leading-[24px]">
                  Conditions générales de vente
                </div>
                <div className="relative text-[15.5px] leading-[24px]">
                  Politique de confidentialité
                </div>
                <div className="relative text-base leading-[24px]">{`RGPD & Cookies`}</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px]">
              <div className="relative leading-[20px] uppercase font-semibold">
                Siko Mobility
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[74.16000366210938px] pl-0 gap-[16px] text-base text-darkgray">
                <div className="relative text-base-9 leading-[24px]">
                  Accueil
                </div>
                <div className="relative text-[15.8px] leading-[24px]">
                  Devenir partenaire
                </div>
                <div className="relative leading-[24px]">Qui sommes-nous ?</div>
                <div className="relative leading-[24px]">Contact</div>
                <div className="relative leading-[24px]">FAQ</div>
              </div>
            </div>
            <div className="sm:flex-col items-start justify-start pt-0 px-0 pb-4 gap-[24px] sm:gap[0px]sm:hidden ">
              <div className="relative leading-[20px] uppercase font-semibold   ">
                Accès rapide
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[54.160003662109375px] pl-0 gap-[16px] text-base text-darkgray">
                <div className="relative leading-[24px]">Tous nos services</div>
                <div className="relative leading-[24px]">Assurance</div>
                <div className="relative text-base-6 leading-[24px]">
                  Maintenance
                </div>
                <div className="relative leading-[24px]">{`Assistance `}</div>
                <div className="relative leading-[24px]">
                  Extension de garantie
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative box-border w-full sm:w-[1248px] h-px overflow-hidden shrink-0 border-t-[1px] border-solid border-darkslategray" />

        <div className="self-stretch flex flex-row items-center justify-between text-center">
          <div className="flex flex-col items-center justify-start">
            <div className="relative leading-[20px]">
              © 2021 Siko Mobility. Tous droits réservés.
            </div>
          </div>
          <div className="w-[184px] flex flex-row items-start justify-center">
            <div className="self-stretch w-[21px] flex flex-col items-start justify-start ">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </div>
            <div className="self-stretch w-11 flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border">
              <div className="self-stretch h-5 flex flex-col items-start justify-start">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </div>
            </div>
            <div className="self-stretch w-11 flex flex-col items-start justify-start py-0 pr-0 pl-3.5 box-border">
              <div className="h-[21px] flex flex-col items-start justify-start">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </div>
            </div>
            <div className="self-stretch w-[43px] flex flex-col items-start justify-start py-0 pr-0 pl-6 box-border">
              <div className="self-stretch h-5 flex flex-col items-start justify-start">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
