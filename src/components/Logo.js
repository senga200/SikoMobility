const Logo = () => {
  return (
    <div className="relative w-[352px] h-[91px] text-left text-21xl text-dodgerblue font-nunito">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="font-extrabold text-white">siko mobility</div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="logo siko mobility"
          src="/rectangle-2@2x.png"
        />
        <div className="absolute inset-0 bg-gainsboro" />
      </div>
    </div>
  );
};

export default Logo;
