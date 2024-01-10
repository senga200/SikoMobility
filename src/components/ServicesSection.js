import React from "react";
import Button from "./Button";
import Card from "./Card";

function ServicesSection() {
  const handleButtonClick = () => {
    window.open("https://sikomobility.com/nos-services", "_blank");

    console.log("bouton cliqué services !!");
  };

  const handlePaimentClick = () => {
    window.open(
      "https://sikomobility.com/formulaire/financement/paiement-plusieurs-fois/details-vehicule-financement",
      "_blank"
    );
    console.log("paiement cliqué");
  };

  const handleFinancementClick = () => {
    window.open(
      "https://sikomobility.com/formulaire/financement/demande-de-financement",
      "_blank"
    );
    console.log("financement cliqué");
  };

  const handleMobiliteClick = () => {
    window.open(
      "https://sikomobility.com/formulaire/souscription/details-vehicule",
      "_blank"
    );
    console.log("mobilite cliqué");
  };

  return (
    <div className="absolute top-[138px] left-[calc(50%_-_768px)] bg-gray-100 w-[100%] h-[1174px] flex flex-col items-center justify-start py-0 px-32 box-border max-w-[1536px] text-center">
      <div className="w-[1280px] flex flex-col items-center justify-center pt-10">
        <div className="relative font-bold inline-block line-[4rem]">
          <h2 className="m-10">
            Découvrez notre gamme de services pour toutes les mobilités
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[16px] items-center justify-center py-0 pr-[0.000030517578125px] pl-0 box-border text-left text-4xl">
          <Card
            cardTitle="PAIEMENT 3/4/10 FOIS"
            cardText="Faites un paiement en 3, 4 ou 10 fois en carte bleue. C'est sans justificatif."
            cardImage="/Financement.png"
            onClick={handlePaimentClick}
          />

          <Card
            cardTitle="FINANCEMENT 12 À 60 MOIS"
            cardText="Faites une demande de financement de 12 à 60 fois. Obtenez un accord d'une de nos banques partenaires."
            cardImage="/Paiement.png"
            onClick={handleFinancementClick}
          />

          <Card
            cardTitle="FORFAIT MOBILITE"
            cardText="Souscrivez à un abonnement assurance, assistance, garantie ou maintenance. Sans engagement..."
            cardImage="/Mobilite.png"
            onClick={handleMobiliteClick}
          />
        </div>
      </div>
      <div className="rounded-lg flex flex-row items-center justify-center py-18 text-dodgerblue border-[2px]">
        <div className="rounded-lg flex flex-row items-center justify-center mt-4 py-12 px-[22px] mt-[-25px] text-sm text-dodgerblue border-[2px]">
          <div className="flex flex-col items-center justify-center ">
            <Button
              buttonText="Tous nos services"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
