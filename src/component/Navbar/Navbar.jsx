import React from "react";
import logo from "../../assets/logo.jpg"

export const Navbar = () => {
  return (
    <div className="h-80px w-full bg-black flex justify-between items-center px-[8%]">
        <img className="h-12 " src={logo} alt="" />
    <div>
        <ul className="md:flex hidden md:gap-x-9 lg:gap-20  text-white font-bold">
          <li className="hover:text-orange-500"><a href="#">Order</a></li>
          <li className="hover:text-orange-500"><a href="#">Order Review</a></li>
          <li className="hover:text-orange-500"><a href="#">Manage Inventory</a></li>
          <li className="hover:text-orange-500"><a href="#">Login</a></li>
        </ul>
    </div>
    </div>
  );
};
