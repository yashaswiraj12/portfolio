import React, { useState } from "react";
import "./Header.css";

export default function Header({ dark, setDark, open, setOpen }) {
  const menu = ["Home", "Experience", "Projects", "Skills"];
  const menuLink = ["#home", "#experience", "#projects", "#skills"];
  const [selectedmenu, setSelectedmenu] = useState("Home");

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="py-8 px-5 flex items-center justify-between" id="header">
      <img className="h-14 md:hidden logo" src={dark ? "/assets/logoDark.png" : "/assets/logoLight.png"} alt="" />
      <div className="header-name hidden text-2.5xl 2xl:text-3xl poppins-medium md:inline-block">
        Yashaswi Raj
        <div className="h-[6px] w-[6px] ml-1 rounded-full bg-blue-500 inline-block"></div>
      </div>
      <div className="header-menu hidden lg:flex">
        <ul className="flex gap-20 text-[16.5px] font-semibold text-zinc-400">
          {menu.map((menuItem, index) => (
            <li key={index}>
              <a
                href={menuLink[index]}
                className={`cursor-pointer ${
                  selectedmenu === menuItem ? "" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedmenu(menuItem);
                  scrollToSection(menuLink[index]);
                }}
              >
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-10">
      <div className="hidden lg:flex items-center justify-end gap-6">
        <a href="#contact">
          <div className="flex items-center gap-2 px-4 py-[6px] lg:py-2 rounded-xl bg-violet-500 text-white shadow-lg cursor-pointer hover:scale-105 transition-all">
            <a
              href="#contact"
              className="font-semibold"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Contact
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
              </g>
            </svg>
          </div>
        </a>
      </div>
      <div className="flex gap-5 items-center">
        <div className="bg-violet-400 cursor-pointer p-2 rounded-full" onClick={() => setDark(!dark)}>
          {dark ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </div>
        <svg className="flex lg:hidden" onClick={()=>setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={dark ? "#fff" : "#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </div>
      </div>
    </div>
  );
}
