import React, { useState } from "react";
import { Link } from "react-router-dom";
import mefie_logo from '../assets/mefie_logo.png'
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <nav className="flex h-20 p-5 items-center justify-center shadow-md ">
      <div className="w-full flex md:max-w-[1220px] xl:max-w-[1220px]  justify-between">
        <span className=" flex items-center gap-2 cursor-pointer">
            <img className="h-10" src={mefie_logo} alt="MefieLogo" />
          
        </span>

    <div className="flex gap-10">
    <ul className="hidden md:flex xl:flex text-base font-light gap-10 items-center cursor-pointer ">
          <li className="hover:bg-slate-100 p-3 rounded-full">
            About
            {/* <Link to="/about">About</Link> */}
          </li>
          <li className="hover:bg-slate-100 p-3 rounded-full space-x-1">
            Business
            {/* <Link to="/contact">Contact</Link> */}
          </li>
          <li className="hover:bg-slate-100 p-3 rounded-full">
            Contact
            {/* <Link to="/help">Help</Link> */}
          </li>
         
        </ul>
        <span onClick={toggleMenu} className="hover:bg-slate-100 relative p-3 rounded-full w-20 flex items-center justify-center border border-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
              {isOpen && (
                <span className="w-60  bg-white shadow-md absolute top-[60px] -left-48 z-10 rounded-md flex items-start p-2">
                <ul className="flex flex-col items-start gap-2 text-base">
                    <li className="hover:bg-slate-100 rounded-full w-52 pl-4 p-2 text-start">Add Business</li>
                    <li className="hover:bg-slate-100 rounded-full w-52 pl-4 p-2 text-start">Log In</li>
                    <li className="hover:bg-slate-100 rounded-full w-52 pl-4 p-2 text-start">Help</li>
                </ul>
              </span>
              )}
            </span>
    </div>
       
       
      </div>
    </nav>
  );
};

export default Navigation;
