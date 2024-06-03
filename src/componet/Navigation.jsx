import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="flex h-20 items-center shadow-md ">
      <div className="w-full flex max-w[1200px] justify-around  -red-300">
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
            <span className="text-gray-500 text-sm">
              World's #1 Retreat Site
            </span>
          </h3>
        </span>
        <ul className="flex w text-base gap-10 items-center cursor-pointer ">
          <li className="hover:bg-slate-100 p-3 rounded-full">
            About
            {/* <Link to="/about">About</Link> */}
          </li>
          <li className="hover:bg-slate-100 p-3 rounded-full">
            Business
            {/* <Link to="/contact">Contact</Link> */}
          </li>
          <li className="hover:bg-slate-100 p-3 rounded-full">
            Contact
            {/* <Link to="/help">Help</Link> */}
          </li>
          <span className="hover:bg-slate-100 p-3 rounded-full w-20 flex items-center justify-center border border-slate-200">
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
            </span>
        </ul>
       
       
      </div>
    </nav>
  );
};

export default Navigation;
