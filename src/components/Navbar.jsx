import React from "react";
import Logo from "../assets/3sigma-logo (4) 2.png";

const Navbar = () => {
  return (
    <div className="w-full h-full flex items-center justify-between">
      <h1 className=" sm:text-3xl text-[#000000] font-bold  text-xl">
        Magnabox Private limited
      </h1>
      <img
        src={Logo}
        alt="logo"
        className="sm:w-[168px] sm:h-[75px] w-[120px] h-[50px] "
      />
    </div>
  );
};

export default Navbar;
