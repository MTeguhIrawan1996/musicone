import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] relative">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
        <div className="absolute bottom-0 py-3">
          <div className="flex flex-col justify-center items-center">
            <p className="text-white text-sm">
              Created by{" "}
              <span className="font-semibold text-cyan-400">
                M. Teguh Irawan
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute md:hidden block top-6 sm:top-4 right-3 cursor-pointer z-10">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-9 h-9 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-9 h-9 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        <div className="absolute bottom-0 py-3">
          <div className="flex flex-col justify-center items-center">
            <p className="text-white text-sm">
              Created by{" "}
              <span className="font-semibold text-cyan-400">
                M. Teguh Irawan
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
