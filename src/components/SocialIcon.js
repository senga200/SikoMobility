import React from "react";

function SocialIcon() {
  return (
    <div className="self-stretch w-11 flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border">
      <div className="self-stretch h-5 flex flex-col items-start justify-start">
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
    </div>
  );
}

export default SocialIcon;
