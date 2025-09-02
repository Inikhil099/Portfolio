import React from "react";
import { FaServer, FaUser } from "react-icons/fa";

function Skills({skillsref}) {
  return (
    <div ref={skillsref} className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
        <p className="">
          Continuously Improving My Skills And Knowledge In The Field
        </p>
      </div>

      <div className="mt-10 flex flex-wrap  gap-y-10 gap-x-3 justify-evenly items-center ">
        <div className="w-full rounded-xl border  md:w-[70%] lg:w-[40%]  xl:w-[30%]  border-slate-200 bg-white px-6 py-10 text-center shadow-sm hover:shadow-md transition">
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
            <FaUser className="w-5 h-5" />
          </div>
          <p className="font-semibold text-lg">Front-End Development</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Proficient in HTML, CSS and JavaScript. Experienced in responsive
            web design, building user-friendly interfaces, and using modern
            frameworks like ReactJS and NextJs.
          </p>
        </div>
        <div className="rounded-xl border w-full md:w-[70%] lg:w-[40%]  xl:w-[30%]  border-slate-200 bg-white px-6 py-10 text-center shadow-sm hover:shadow-md transition">
          <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
            <FaServer className="w-5 h-5" />
          </div>
          <p className="font-semibold text-lg">Back-End Development</p>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Skilled in server-side programming using technologies like Node.js
            and Express. Experience working with databases such as MongoDB and
            MySQL.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
