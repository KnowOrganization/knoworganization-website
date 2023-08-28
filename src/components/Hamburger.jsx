"use client";
import { useState } from "react";
import Link from "next/link";

const Hamburger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    console.log(isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    console.log(isMenuOpen);
  };
  return (
    <div>
      <button
        onClick={openMenu}
        className="h-10 w-10 flex justify-center items-center "
      >
        <div className="space-y-2 z-10">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </div>
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex-col justify-center items-center w-screen h-screen ">
            <span className=" -z-10 absolute right-10 h-44 top-10 md:w-44 w-44 bg-gradient-to-tr from-primary to-purple-500 blur-3xl "></span>
          <span className=" -z-10  absolute bottom-10 right-96  h-52 md:w-52 w-44 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className="-z-10  absolute bottom-0 left-40 top-80 h-20 md:w-96 w-52 bg-gradient-to-tr from-primary to-teal-500 blur-3xl opacity-60"></span>
          <span className="-z-10  absolute left-10 h-20 top-52 md:w-96 w-36 bg-gradient-to-tr from-primary to-purple-500 blur-3xl"></span>
          
          <ul className="uppercase flex-col flex justify-center items-center lg:items-start lg:float-left">
          <li className="mt-36 mb-7 md:mb-5 mx-10">
              <Link href="/" onClick={closeMenu} className=" cursor-pointer lg: md:text-6xl text-4xl  font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text">Home</Link>
            </li>
            <li className="my-7 md:my-5 mx-10">
              <Link href="knowabout" onClick={closeMenu} className=" cursor-pointer lg: md:text-6xl text-4xl  font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text">About us</Link>
            </li>
            <li className=" my-7 md:my-5 mx-10">
              <Link href="knowportfolio" onClick={closeMenu} className=" cursor-pointer md:text-6xl text-4xl font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text">Portfolio</Link>
            </li>
            <li className=" my-7 md:my-5 mx-10">
              <Link href="knowservices" onClick={closeMenu} className=" cursor-pointer md:text-6xl text-4xl font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text">Services</Link>
            </li>
            <li className=" my-7 md:my-5 mx-10">
              <Link href="knowcontact" onClick={closeMenu} className=" cursor-pointer md:text-6xl text-4xl font-anton hover:bg-gradient-to-l hover:from-teal-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text">Contact us</Link>
            </li>
          </ul>
        <button
        onClick={closeMenu}
        className="h-10 w-10 flex justify-center items-center absolute right-10 top-10 "
      >
        <div className="space-y-2 z-10">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </div>
      </button>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
