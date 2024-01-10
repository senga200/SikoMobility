import React, { useState } from "react";
import Rating from "./Rating";
import Button from "./Button";
import OpinionCard from "./OpinionCard";
//import Datas from '../Datas';

function OpinionsCaroussel() {
  const datas = [
    {
      id: 1,
      h5: "Feedback positif",
      p: "Simple, rapide et efficace ! Une équipe à l'écoute ! Je recommande vivement !",
      spanRate: "5",
      spanName: "@Robin Mourier",
      spanDate: "2023-09-19",
    },
    {
      id: 2,
      h5: "Super expérience",
      p: "Sérieux, à l’écoute et très disponible je recommande fortement cette entreprise les yeux fermés !!!",
      spanRate: "5",
      spanName: "@Wady Talhaoui",
      spanDate: "2023-09-18",
    },
    {
      id: 3,
      h5: "Aide inestimable",
      p: "Excellente expérience humaine vécue avec Tristan de Siko qui me guidera sur chaques routes ! Merci encore 🙏",
      spanRate: "5",
      spanName: "@Youssouf SANOGO",
      spanDate: "2023-09-17",
    },
    {
      id: 4,
      h5: "Recommandation sincère",
      p: "Tres bonne expérience, tres accueillant et a l'écoute. Je recommande pour les solutions de financement 😁😁",
      spanRate: "5",
      spanName: "@Kevin Vital",
      spanDate: "2023-09-16",
    },
    {
      id: 5,
      h5: "Professionnalisme au top",
      p: "Société très professionnel,et réactive Tres bonne communication 👌",
      spanRate: "5",
      spanName: "@Rak",
      spanDate: "2023-09-15",
    },
    {
      id: 6,
      h5: "Service incroyable",
      p: "Je recommande a 100%. En quelques mots : Rapide, efficace et c’est un plaisir d’échanger avec eux par téléphone 😊",
      spanRate: "5",
      spanName: "@Manelle BC",
      spanDate: "2023-09-14",
    },
    {
      id: 7,
      h5: "Feedback honnête",
      p: "Très bonne expérience, bonne communication, personnel disponible et réactif m, je recommande.",
      spanRate: "5",
      spanName: "Yves-Roland BATAMIO",
      spanDate: "2023-09-13",
    },
    {
      id: 8,
      h5: "Merci pour l'aide",
      p: "Merciii pour l assistance apporter de l équipe et aux employer qui sont à l écoute et font tout pour nous aider merci encor et à bientôt",
      spanRate: "4",
      spanName: "@Kebaili Hacen",
      spanDate: "2023-09-12",
    },
    {
      id: 9,
      h5: "Prestation excellente",
      p: "Top , Je recommande Siko Mobility pour leur professionnalisme. Tristan D’Halluin et au top très à l’écoute du client . 👌",
      spanRate: "5",
      spanName: "@Quentin Berthe",
      spanDate: "2023-09-11",
    },
    {
      id: 10,
      h5: "Bonne expérience",
      p: "Équipe disponible et professionnel, un grand merci !",
      spanRate: "4",
      spanName: "@Arthur Joseph",
      spanDate: "2023-09-10",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + datas.length) % datas.length
    );
  };
  return (
    <div className="relative">
      <div className="absolute left-0">
        <Button
          buttonText="Avis précédent"
          onClick={prevSlide}
          className="w-full"
        />
      </div>

      {datas.map((data) => (
        <OpinionCard key={data.id} data={data} isActive={currentIndex} />
      ))}

      <div className="absolute right-0">
        <Button
          buttonText="Avis suivant"
          onClick={nextSlide}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default OpinionsCaroussel;

//   return (
//     <div className="relative">
//       {datas.map((data) => (
//         <div
//           key={data.id}
//           className={`${
//             data.id === currentIndex
//               ? "opacity-100"
//               : "opacity-0 pointer-events-none"
//           } transition-opacity duration-500 absolute top-0 left-0 right-0 bottom-0`}
//         >
//           <div className="bg-red-100 p-3 rounded-lg shadow-md max-w-[350px] mx-auto">
//             <h5 className="text-xl font-bold py-0 ">{data.h5}</h5>
//             <p className="text-gray-700  text-sm">{data.p}</p>
//             <div className="flex flex-col items-start">
//               <Rating rating={parseFloat(data.spanRate)} />
//               <span className="text-sm text-blue-500 pl-3 pt-2">
//                 {data.spanRate}/5{" - "}
//                 {data.spanName}
//                 {" - "}
//                 {data.spanDate}
//               </span>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="flex space-x-4">
//         <Button buttonText="Previous" onClick={prevSlide} className="w-full" />
//         <Button buttonText="Next" onClick={nextSlide} className="w-full" />
//       </div>
//     </div>
//   );
//}

//export default OpinionsCaroussel;
