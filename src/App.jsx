import React, { useState } from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import top from "/assets/up-arrow.png";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [liveError, setLiveError] = useState(false);
  const [codeError, setCodeError] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className={`px-5 lg:px-10 relative 2xl:px-80 ${
        dark ? "bg-[#161925] text-white" : "bg-zinc-100 text-black"
      }`}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#4aed88",
            },
          },
        }}
      ></Toaster>
      <Header dark={dark} open={open} setDark={setDark} setOpen={setOpen} />
      <Home dark={dark} setDark={setDark} />
      <Experience dark={dark} setDark={setDark} />
      <Projects
        dark={dark}
        liveError={liveError}
        setDark={setDark}
        setLiveError={setLiveError}
        codeError={codeError}
        setCodeError={setCodeError}
      />
      <Skills dark={dark} setDark={setDark} />
      <Contact dark={dark} setDark={setDark} id="contact" />
      <a className="flex" onClick={() => scrollToSection("header")}>
        <div className="fixed bottom-14 right-10 md:right-14">
          <img className="h-8 md:h-16 cursor-pointer" src={top} alt="" />
        </div>
      </a>
      {open && (
        <div className="">
          <div
            onClick={() => setOpen(false)}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          ></div>
          <div
            className={`fixed poppins-regular flex items-center px-5 gap-10 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-72 ${
              dark ? "bg-[#1c1f2e]" : "bg-white"
            }`}
          >
            <ul className="flex flex-col gap-10 text-lg w-full">
              <li className="flex items-center gap-4">
                <a onClick={() => scrollToSection("home")}>Home</a>
                <div
                  className={`h-[1px] w-full ${dark ? "bg-white" : "bg-black"}`}
                ></div>
              </li>
              <li className="flex items-center gap-4">
                <a onClick={() => scrollToSection("experience")}>Experience</a>
                <div
                  className={`h-[1px] w-full ${dark ? "bg-white" : "bg-black"}`}
                ></div>
              </li>
              <li className="flex items-center gap-4">
                <a onClick={() => scrollToSection("projects")}>Projects</a>
                <div
                  className={`h-[1px] w-full ${dark ? "bg-white" : "bg-black"}`}
                ></div>
              </li>
              <li className="flex items-center gap-4">
                <a onClick={() => scrollToSection("skills")}>Skills</a>
                <div
                  className={`h-[1px] w-full ${dark ? "bg-white" : "bg-black"}`}
                ></div>
              </li>
              <li className="flex items-center gap-4">
                <a onClick={() => scrollToSection("contact")}>Contact</a>
                <div
                  className={`h-[1px] w-full ${dark ? "bg-white" : "bg-black"}`}
                ></div>
              </li>
            </ul>
          </div>
        </div>
      )}
      {liveError && (
        <div className="">
          <div
            onClick={() => setLiveError(false)}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          ></div>
          <div
            className={`fixed poppins-regular flex flex-col items-center justify-center px-5 gap-5 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 w-72 ${
              dark ? "bg-[#1c1f2e]" : "bg-white"
            }`}
          >
            <span>Project Will Be Live Soon</span>
            <span>Stay Tuned !</span>
          </div>
        </div>
      )}
      {codeError && (
        <div className="">
          <div
            onClick={() => setCodeError(false)}
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          ></div>
          <div
            className={`fixed poppins-regular flex flex-col items-center justify-center px-5 gap-5 rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-40 w-72 ${
              dark ? "bg-[#1c1f2e]" : "bg-white"
            }`}
          >
            <span>Code Will Be Available Soon</span>
            <span>Stay Tuned !</span>
          </div>
        </div>
      )}
    </div>
  );
}
