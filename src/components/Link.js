const Link = () => {
  return (
    <div className="rounded-lg w-[405.3px] h-[864px] flex flex-col items-start justify-start relative min-w-[256px] min-h-[256px] text-left text-4xl text-white font-nunito-sans">
      <img
        className="w-full flex-1 relative rounded-lg max-w-[405.3299865722656px] overflow-hidden max-h-full object-cover z-[0]"
        alt=""
        src="/financement560da06bpng@2x.png"
      />
      <div className="my-0 mx-[!important] absolute h-full w-[calc(100%_-_0.3px)] top-[0px] right-[0.3px] bottom-[0px] left-[0px] rounded-lg bg-gray-400 flex flex-col items-start justify-end pt-[767px] pb-6 pr-px pl-0 box-border gap-[37px] z-[1]">
        <div className="bg-gray-200 w-[405px] h-[67px] flex flex-col items-center justify-between">
          <div className="w-[402px] flex flex-col items-center justify-center">
            <b className="relative leading-[32px] flex items-center w-[329px] max-w-[357.3299865722656px]">
              PAIEMENT 3/4/10 FOIS
            </b>
          </div>
        </div>
        <div className="bg-gray-200 box-border w-[405px] h-[131px] flex flex-col items-center justify-center py-0 pr-[31.329986572265625px] pl-0 text-base border-[1px] border-solid border-black">
          <div className="relative leading-[24px] inline-block max-w-[357.3299865722656px]">
            <p className="m-0">
              Faites un paiement en 3, 4 ou 10 fois en carte
            </p>
            <p className="m-0">bleue. C'est sans justificatif.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link;
