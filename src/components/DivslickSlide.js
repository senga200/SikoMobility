const DivslickSlide = () => {
  return (
    <div className="w-[416px] h-56 flex flex-col items-start justify-start py-0 px-2 box-border min-h-[1px] text-left text-base text-white font-nunito-sans">
      <div className="self-stretch relative rounded-lg bg-gray-100 shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)] box-border h-[200px] overflow-hidden shrink-0 border-[1px] border-solid border-darkslategray">
        <div className="absolute w-[calc(100%_-_42px)] top-[21px] right-[21px] left-[21px] flex flex-col items-start justify-start py-0 pr-[217px] pl-0 box-border text-xl">
          <div className="relative tracking-[-0.5px] leading-[28px] font-semibold">
            Feedback positif
          </div>
        </div>
        <div className="absolute top-[57px] left-[21px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
          <div className="relative leading-[24px]">
            <p className="m-0">
              Simple, rapide et efficace ! Une équipe à l'écoute !
            </p>
            <p className="m-0">Je recommande vivement !</p>
          </div>
        </div>
        <div className="absolute top-[132px] left-[21px] flex flex-row items-center justify-start py-0 pr-[205.30999755859375px] pl-0 text-xs text-slateblue">
          <div className="flex flex-row items-center justify-start">
            <img
              className="relative w-4 h-4 overflow-hidden shrink-0"
              alt=""
              src="/svg.svg"
            />
            <div className="self-stretch w-5 flex flex-col items-start justify-start py-0 pr-0 pl-1 box-border">
              <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <img
                  className="flex-1 relative max-h-full w-4"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-5 flex flex-col items-start justify-start py-0 pr-0 pl-1 box-border">
              <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <img
                  className="flex-1 relative max-h-full w-4"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-5 flex flex-col items-start justify-start py-0 pr-0 pl-1 box-border">
              <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <img
                  className="flex-1 relative max-h-full w-4"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
            <div className="self-stretch w-5 flex flex-col items-start justify-start py-0 pr-0 pl-1 box-border">
              <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <img
                  className="flex-1 relative max-h-full w-4"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-2 pl-3">
            <div className="rounded bg-aliceblue flex flex-col items-start justify-start py-0.5 pr-[8.689998626708984px] pl-2.5">
              <div className="relative leading-[16px] font-semibold">5.0</div>
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_138px)] top-[155px] right-[117px] left-[21px] flex flex-row items-center justify-between text-whitesmoke">
          <div className="flex flex-col items-start justify-start">
            <i className="relative leading-[24px]">@Robin Mourier</i>
          </div>
          <div className="flex flex-col items-start justify-start">
            <i className="relative leading-[24px]">2023-09-19</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivslickSlide;
