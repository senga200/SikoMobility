import React from "react";

function FooterItem() {
  return (
    <div className="relative leading-[20px] inline-block max-w-[416px]">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

export default FooterItem;
