const Button = () => {
  return (
    <div className="rounded-lg flex flex-row items-center justify-center py-3 px-[22px] text-center text-sm text-dodgerblue font-nunito-sans border-[2px] border-solid border-dodgerblue">
      <div className="flex flex-col items-center justify-start py-0 pr-[2.1691207885742188px] pl-[2.560882568359375px]">
        <div className="relative leading-[20px] font-semibold">
          Devenir Partenaire
        </div>
      </div>
      <div className="self-stretch w-[26px] flex flex-col items-start justify-start py-0 pr-0 pl-2.5 box-border">
        <div className="self-stretch h-4 overflow-hidden shrink-0 flex flex-col items-center justify-center">
          <img
            className="flex-1 relative max-h-full w-4"
            alt=""
            src="/frame.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Button;
