import React from "react";
import { Link } from "react-router-dom";
import chattyimg from "../assets/chattyimg.jpg";
import shorty from "../assets/shorty.jpg";
import toddy from "../assets/toddy.jpg";
import omegle from "../assets/omegle.jpg";
const projectsarray = [
  {
    img: chattyimg,
    title: "Chatty - Real Time Chat App",
    stack: "MERN",
    link: "https://chatty-ix74.onrender.com",
  },
  {
    img: shorty,
    title: "Shorty Links - URL Shortening Service",
    stack: "MERN",
    link: "https://shortylinks.vercel.app/",
  },
  {
    img: omegle,
    title: "Omegle Clone",
    stack: "MERN + TypeScript",
    link: "https://github.com/Inikhil099/omegleClone",
  },
  {
    img: toddy,
    title: "Toddy - Todo App",
    stack: "HTML/CSS/JAVASCRIPT",
    link: "https://github.com/Inikhil099/omegleClone",
  },
];

function Projects() {
  return (
    <div className="mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <p className=" mt-2">
          A collection of projects I've worked on.
        </p>
      </div>

      <div className="mt-10 flex gap-5 justify-around items-center flex-wrap ">
        {projectsarray.map((p, i) => (
          <div
            key={i}
            className="rounded-xl w-full sm:w-full md:w-[85%] lg:w-[70%] xl:w-[55%] 2xl:w-[40%] overflow-hidden text-center h-[50%]"
          >
            <img src={p.img} alt={p.title} className="" />
            <div className="p-4 flex flex-col gap-y-2.5">
              <Link
                to={p.link}
                className="font-semibold  text-xl hover:text-purple-500"
              >
                {p.title}
              </Link>
              <p className="text-lg tracking-wide ">{p.stack}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
