import myimg from "../assets/myimg.png";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { Link } from "react-router-dom";
import SectionBlock from "./SectionBlock";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

function CurricullumVitae({curriculumref}) {
  return (
    <div ref={curriculumref} className="mx-auto px-4 py-16 mb-5">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">CURRICULLUM VITAE</h2>
      </div>
      <div className="mt-10 flex justify-center gap-y-10 gap-x-10 flex-wrap items-center">
        <div className="flex flex-col items-center max-w-[450px]">
          <img
            src={myimg}
            alt="Profile"
            className="h-52 w-52 rounded-full object-cover"
          />
          <span className="mt-3 text-2xl font-semibold">Nikhil</span>
          <span className="mt-1 text-sm flex items-center gap-2">
            <IoMail  className="h-4 w-4" /> nikhilraikwar099@gmail.com
          </span>
          <span className="mt-1 text-sm  flex items-center gap-2">
            <FaLocationDot  className="h-4 w-4" />
            New Delhi
          </span>

          <div className="flex gap-3 justify-center py-5">
            <Link
              to={"https://www.linkedin.com/in/nikhil-r-b234a329b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
              className="rounded-full bg-purple-700 cursor-pointer socials hover:bg-purple-500 p-2 text-white"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </Link>
            <Link
              to={"https://github.com/inikhil099"}
              className="rounded-full bg-purple-700 cursor-pointer socials hover:bg-purple-500 p-2 text-white"
            >
              <LuGithub className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-6  p-2.5 text-start shadow-lg">
            <p className="font-semibold">Technical Skills</p>
            <div className="mt-2 space-y-1  text-start text-sm">
              <div>
                <span className="font-semibold text-lg text-center">
                  Frontend -{" "}
                </span>
                <span className="text-center font-semibold">
                  HTML, CSS, Bootstrap, Tailwind Css, JavaScript, Typescript
                  React, Redux, NextJs
                </span>
              </div>
              <div>
                <span className="font-semibold text-lg">Backend - </span>
                <span className="text-center font-semibold">
                  Python, Django, Flask, NodeJs, ExpressJs, WebSockets, JWT
                </span>
              </div>
              <div>
                <span className="font-semibold text-lg">Database - </span>
                <span className="text-center font-semibold">
                  MongoDb, MySQL
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 max-w-[450px]">
          <SectionBlock title="Profile">
            <p>
              I am an Aspiring Web Developer with a strong foundation in HTML,
              CSS, JavaScript, and modern web technologies. Eager to apply my
              skills in creating responsive and user-friendly websites. Looking
              for an opportunity to grow and contribute to a forward-thinking
              organization where I can learn from experienced professionals and
              build impactful web solutions.
            </p>
          </SectionBlock>

          <SectionBlock title="Education">
            <p className="font-semibold">2025 - 2028</p>
            <p>Indra Gandhi National Open University</p>
            <p>Bachelor of Computer Applications</p>
          </SectionBlock>

          <SectionBlock title="Additional Courses & Training">
            <p className="font-semibold">Nov 2024 - May 2025</p>
            <p>Full Stack Development (MERN)</p>
            <p>Oxford Software Institute</p>
          </SectionBlock>

          <SectionBlock title="Work Experience">
            <p className="font-semibold">May 2025 - July 2025</p>
            <p>Full Stack Developer Intern</p>
            <p>Oxford Software Institute</p>
          </SectionBlock>
        </div>
      </div>
    </div>
  );
}

export default CurricullumVitae;
