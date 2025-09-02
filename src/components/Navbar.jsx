import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar({
  darkmode,
  setdarkmode,
  skillsref,
  projectsref,
  curriculumref,
  contactref,
}) {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  return (
    <nav
      className={`sticky top-0 z-50 ${
        darkmode ? "bg-white text-gray-800" : "bg-slate-900 text-white"
      } transition-all duration-1000 overflow-hidden`}
    >
      <div className="mx-auto flex flex-wrap items-center justify-between px-5 py-3">
        <Link to="/" className="font-extrabold text-lg">
          NIKHIL
        </Link>
        <div className="flex gap-x-5">
          <button
            className="text-2xl cursor-pointer"
            onClick={() => {
              setdarkmode(!darkmode);
            }}
          >
            {darkmode ? <MdLightMode /> : <MdDarkMode />}
          </button>
          <ul className="hidden md:flex items-center gap-5 text-sm">
            <li>
              <Link
                onClick={() =>
                  skillsref.current.scrollIntoView({ behavior: "smooth" })
                }
                to="/"
                className="hover:text-sky-400"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  projectsref.current.scrollIntoView({ behavior: "smooth" });
                }}
                to="/"
                className="hover:text-sky-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={() => {
                  curriculumref.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-sky-400"
              >
                Curricullum Vitae
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  contactref.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-sky-400"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="md:hidden">
            <FaBars
              onClick={() => {
                setisSidebarOpen(!isSidebarOpen);
              }}
              className="text-2xl md:hidden cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        className={`h-screen w-[60%] flex justify-center transition duration-300 absolute right-0 bg-slate-900  text-white ${
          isSidebarOpen ? "translate-x-0" : " translate-x-full"
        }`}
      >
        <div className="absolute right-6 top-5 cursor-pointer text-xl"><ImCross className=" cursor-pointer text-xl" onClick={()=>{setisSidebarOpen(false)}}/></div>
        <div className="mt-10 text-xl">
          <ul className="mt-5 flex flex-col items-center gap-y-5 ">
            <li>
              <Link
                onClick={() =>
                  skillsref.current.scrollIntoView({ behavior: "smooth" })
                }
                to="/"
                className="p-2.5 hover:border-b border-b-purple-200 transition-all duration-150"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  projectsref.current.scrollIntoView({ behavior: "smooth" });
                }}
                to="/"
                className="p-2.5 hover:border-b border-b-purple-200 transition-all duration-150"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to=""
                onClick={() => {
                  curriculumref.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-2.5 hover:border-b border-b-purple-200 transition-all duration-150"
              >
                Curricullum Vitae
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  contactref.current.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-2.5 hover:border-b border-b-purple-200 transition-all duration-150"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
