const Logo = () => {
  return (
    <div className="w-[352px] h-[91px] text-left text-21xl text-dodgerblue font-nunito">
      <div className="absolute h-[43.96%] w-[75.51%] top-[29.67%] left-[20.4%] leading-[48px] font-extrabold flex items-center">
        siko mobility
      </div>
      <img
        className="absolute h-[61.54%] w-[13.86%] top-[20.88%] right-[80.57%] bottom-[17.58%] left-[5.57%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro" />
    </div>
  );
};

export default Logo;
