import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar({ darkmode, setdarkmode }) {
  return (
    <nav
      className={`sticky top-0 z-50 ${
        darkmode ? "bg-white text-black" : "bg-slate-900 text-white"
      } transition-all duration-1000`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link to="/" className="font-extrabold tracking-wide text-lg">
          NIKHIL
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <button
              className="text-2xl cursor-pointer"
              onClick={() => {
                setdarkmode(!darkmode);
              }}
            >
              {darkmode ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </li>
          <li>
            <Link to="/" className="hover:text-sky-400">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-sky-400">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-sky-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/cv" className="hover:text-sky-400">
              Curricullum Vitae
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-sky-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
