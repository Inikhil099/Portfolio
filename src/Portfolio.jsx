import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import Projects from "./components/Projects";
import CurricullumVitae from "./components/CurricullumVitae";
import Skills from "./components/Skills";
import { useRef, useState } from "react";

export default function PortfolioReplica() {
  const [darkmode, setdarkmode] = useState(false)
  const skillsref = useRef(null)
  const projectsref = useRef(null)
  const curriculumref = useRef(null)
  const contactref = useRef(null)
  return (
    <div className={`min-h-screen ${darkmode ? "text-white bg-gray-900" : ""} text-slate-900 bg-gray-200`}>
      <Navbar skillsref={skillsref} projectsref={projectsref} curriculumref={curriculumref}contactref={contactref} darkmode={darkmode} setdarkmode={setdarkmode} />

      <div className="h-[70vh] bgimage md:h-[80vh] flex items-center justify-center">
        <div className="p-6 flex flex-col items-center gap-3 text-center">
          <p className="text-white text-2xl md:text-5xl font-extrabold font-robo">
            NIKHIL
          </p>
          <p className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Full Stack Developer
          </p>
        </div>
      </div>

      <Skills skillsref={skillsref}/>

      <Projects projectsref={projectsref}/>

      <CurricullumVitae curriculumref={curriculumref}/>

      <ContactMe contactref={contactref} />
      <Footer />
    </div>
  );
}
