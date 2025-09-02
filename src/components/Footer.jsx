import React from 'react'
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="">
        <div className="flex gap-5 justify-center items-center py-5">
          <Link to={"https://www.linkedin.com/in/nikhil-r-b234a329b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="rounded-full bg-purple-700 socials cursor-pointer  hover:bg-purple-500 p-2 text-white"><FaLinkedinIn className="h-6 w-6" /></Link>
          <Link to={"https://github.com/inikhil099"} className="rounded-full socials bg-purple-700 cursor-pointer hover:bg-purple-500 p-2 text-white"><LuGithub className="h-6 w-6" /></Link>
        </div>
      </footer>
  )
}

export default Footer