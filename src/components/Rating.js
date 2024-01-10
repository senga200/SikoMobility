import React from "react";

import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating() {
  const datas = [
    {
      h5: "Feedback positif",
      p: "Simple, rapide et efficace ! Une équipe à l'écoute ! Je recommande vivement !",
      spanRate: "5",
      spanName: "@Robin Mourier",
      spanDate: "2023-09-19",
    },
    {
      h5: "Super expérience",
      p: "Sérieux, à l’écoute et très disponible je recommande fortement cette entreprise les yeux fermés !!!",
      spanRate: "5",
      spanName: "@Wady Talhaoui",
      spanDate: "2023-09-18",
    },
    {
      h5: "Aide inestimable",
      p: "Excellente expérience humaine vécue avec Tristan de Siko qui me guidera sur chaques routes ! Merci encore 🙏",
      spanRate: "5",
      spanName: "@Youssouf SANOGO",
      spanDate: "2023-09-17",
    },
    {
      h5: "Recommandation sincère",
      p: "Tres bonne expérience, tres accueillant et a l'écoute. Je recommande pour les solutions de financement 😁😁",
      spanRate: "5",
      spanName: "@Kevin Vital",
      spanDate: "2023-09-16",
    },
    {
      h5: "Professionnalisme au top",
      p: "Société très professionnel,et réactive Tres bonne communication 👌",
      spanRate: "5",
      spanName: "@Rak",
      spanDate: "2023-09-15",
    },
    {
      h5: "Service incroyable",
      p: "Je recommande a 100%. En quelques mots : Rapide, efficace et c’est un plaisir d’échanger avec eux par téléphone 😊",
      spanRate: "5",
      spanName: "@Manelle BC",
      spanDate: "2023-09-14",
    },
    {
      h5: "Feedback honnête",
      p: "Très bonne expérience, bonne communication, personnel disponible et réactif m, je recommande.",
      spanRate: "5",
      spanName: "Yves-Roland BATAMIO",
      spanDate: "2023-09-13",
    },
    {
      h5: "Merci pour l'aide",
      p: "Merciii pour l assistance apporter de l équipe et aux employer qui sont à l écoute et font tout pour nous aider merci encor et à bientôt",
      spanRate: "4",
      spanName: "@Kebaili Hacen",
      spanDate: "2023-09-12",
    },
    {
      h5: "Prestation excellente",
      p: "Top , Je recommande Siko Mobility pour leur professionnalisme. Tristan D’Halluin et au top très à l’écoute du client . 👌",
      spanRate: "5",
      spanName: "@Quentin Berthe",
      spanDate: "2023-09-11",
    },
    {
      h5: "Bonne expérience",
      p: "Équipe disponible et professionnel, un grand merci !",
      spanRate: "4",
      spanName: "@Arthur Joseph",
      spanDate: "2023-09-10",
    },
  ];

  const { id } = useParams();
  const opinion = datas.find((data) => data.id === id);

  if (!opinion) {
    return null;
  }

  const stars = [];
  const maxStars = 4;

  for (let i = 0; i <= maxStars; i++) {
    if (i < parseInt(opinion.spanRate)) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          size="1x"
          className="text-yellow-500"
        />
      );
    } else {
      stars.push(
        <div style={{ width: "0.5em", height: "0.5em" }}>
          <FontAwesomeIcon key={i} icon={faStar} className="text-gray-500" />
        </div>
      );
    }
  }

  return <div className="flex items-center space-x-1">{stars}</div>;
}

export default Rating;
