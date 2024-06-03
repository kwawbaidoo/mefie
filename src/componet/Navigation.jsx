import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

  return (
    <nav className="flex h-20 p-5 items-center justify-center shadow-md ">
      <div className="w-full flex md:max-w-[1220px] xl:max-w-[1220px]  justify-between">
        <span className=" flex items-center gap-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#2896fe"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          <h3 className="flex flex-col items-start font-medium  text-seablue text-xl">
            BooKRetreats
            <span className="text-gray-500 text-xs xl:text-sm md:text-sm">
              World's #1 Retreat Site
            </span>
          </h3>
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
              <svg setMenu={true}
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
                <span className="w-64  bg-white shadow-md absolute top-[60px] z-10 rounded-md flex items-start p-3">
                <ul className="flex flex-col items-start gap-3 text-base">
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
