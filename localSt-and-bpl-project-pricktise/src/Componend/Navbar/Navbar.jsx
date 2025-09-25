import React from "react";
import navLogo from "../../assets/logo.png";
import coins from "../../assets/Currency.png";
const Navbar = ({blance}) => {
  return (
    <div className="navbar max-w-[1100px] mx-auto border-b  border-gray-300 mb-3">
      <div className="flex-1">
        <a className=" btn-ghost text-xl">
          <img className="w-[70px] h-[60px]" src={navLogo}></img>
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1 text-xl font-semibold">{blance}</span>
        <span className="mr-1 text-xl font-semibold">Coin</span>
        <img src={coins}></img>
      </div>
    </div>
  );
};

export default Navbar;

// export default Navbar;
