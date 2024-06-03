import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="flex h-20 border justify-between">
      <ul className="flex max text-base gap-10">
        <span className="border flex items-center">
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
          <h3 className="flex flex-col items-start border text-seablue text-xl">
            BooKRetreats
            <span className="text-gray-400 text-sm">World's #1 Retreat Site</span>
          </h3>
        </span>
        <li>
          Home
          {/* <Link to="/">Home</Link> */}
        </li>
        <li>
          About
          {/* <Link to="/about">About</Link> */}
        </li>
        <li>
          Contact
          {/* <Link to="/contact">Contact</Link> */}
        </li>
        <li>
          Help
          {/* <Link to="/help">Help</Link> */}
        </li>
        <li>
          Call
          {/* <Link to="/call">Call</Link> */}
        </li>
      </ul>
      <span className="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
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
    </nav>
  );
};

export default Navigation;
