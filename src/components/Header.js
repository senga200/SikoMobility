import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="sbg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-8">
      <div className="relative">
        <Logo />
      </div>
      <Nav />
    </header>
  );
}

export default Header;
