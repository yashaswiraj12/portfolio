import React from "react";
import linkedin from "/assets/linkedin.png";
import github from "/assets/github.png";
import code from "/assets/code.png";
import gmail from "/assets/gmail.png";
import instagram from "/assets/instagram.png";
// import codepic from "../assets/codepic.png"
import "./Home.css";


export default function Home({ dark, setDark }) {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div
      style={{ height: "calc(100vh - 100px)" }}
      className="flex items-center px-5 lg:px-10"
      id="home"
    >
      <div className="w-full items-center flex flex-col gap-5">
        <div className="">
          <div className="text-4xl lg:hidden lg:text-7xl poppins-medium inline-block">
            Yashaswi Raj
          </div>
          <div className="h-[6px] w-[6px] lg:h-2 lg:w-2 ml-1 rounded-full bg-blue-500 inline-block lg:hidden"></div>
        </div>
        <div className="flex items-end gap-2">
          <span
            className={`text-[28px] lg:text-7xl poppins-semibold ${
              dark ? "text-zinc-200" : "text-zinc-500"
            }`}
          >
            Converting Thoughts Into Code
          </span>
          {/* <svg
            className="mb-[2px] hidden md:flex"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#71717A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg> */}
        </div>
        <div
          className={`text-lg lg:text-1.5xl tracking-wide leading-10 lg:text-center font-semibold ${
            dark ? "text-zinc-400" : "text-zinc-500"
          } italic mt-5`}
        >
          As a{" "}
          <span className={`${dark ? "text-white" : "text-black"}`}>
            Software Engineer
          </span>{" "}
          with a{" "}
          <span className={`${dark ? "text-white" : "text-black"}`}>
            strong development background
          </span>
          , I deliver high-quality web solutions that drive impactful outcomes.{" "}
          <span className={`${dark ? "text-white" : "text-black"}`}>
            Proficient in the MERN Stack
          </span>
          , I expertly develop robust and user-centric applications as a skilled
          Full-Stack Developer.
        </div>
        <div className="flex items-center mt-5">
          <div className="lg:flex hidden items-center gap-2">
            <span className="text-lg lg:text-1.5xl font-semibold">
              Social Links
            </span>
            <svg
              className="mt-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
            </svg>
          </div>
          <div className="lg:ml-4 flex sm:gap-8 items-center justify-between sm:justify-start w-full sm:w-auto">
            <a
              href="https://www.linkedin.com/in/yashaswi-1063-raj/"
              target="_blank"
            >
              <img
                className="h-7 cursor-pointer hover:scale-110 transition-all"
                src={linkedin}
                alt=""
              />
            </a>
            <a href="https://github.com/yashaswiraj12" target="_blank">
              <img
                className={`h-7 cursor-pointer hover:scale-110 transition-all ${
                  dark ? "invert" : ""
                }`}
                src={github}
                alt=""
              />
            </a>
            <a href="/" target="_blank">
              <img
                className={`h-[32px] cursor-pointer hover:scale-110 transition-all ${
                  dark ? "invert" : ""
                } transition-all`}
                src={code}
                alt=""
              />
            </a>
            <a href="https://yashaswiraj1212@gmail.com" target="_blank">
              <img
                className="h-7 cursor-pointer hover:scale-110 transition-all"
                src={gmail}
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/yashaswi.raj.5203/" target="_blank">
              <img
                className="h-[26px] cursor-pointer hover:scale-110 transition-all"
                src={instagram}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-10 mt-5">
          <a
            href="https://drive.google.com/file/d/1IY-gA46fEX8x6DEviEmb-DsjenU0w9l1/view?usp=drive_link"
            target="_blank"
            className="flex items-center gap-2 bg-violet-400 py-2 px-6 md:px-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
          >
            <span className="text-sm lg:text-lg poppins-regular text-white">
              Check my Resume
            </span>
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8M12 19.8V12M16 17l-4 4-4-4" />
            </svg>
          </a>
          <a
            onClick={scrollToContact}
            className="flex items-center gap-2 bg-violet-400 py-2 px-6 md:px-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all"
          >
            <span className="text-sm lg:text-lg poppins-regular text-white">
              Contact Me
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
              </g>
            </svg>
          </a>
        </div>
      </div>
      {/* <div className="w-[40%] items-center justify-center hidden lg:flex">
        <img className="h-80 rounded-full profilepic" src={profilepic} alt="" />
      </div> */}
    </div>
  );
}
