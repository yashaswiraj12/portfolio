import React, { useState } from "react";
import node from "/assets/nodes.png";
import live from "/assets/share.png";
import { projectInfo } from "./ProjectInfo";

export default function Projects({dark, setDark, liveError, setLiveError, codeError, setCodeError}) {
  const projectNums = [1, 2, 3, 4, 5];
  const [selectedNum, setSelectedNum] = useState(1);

  const handleNumClick = (num) => {
    setSelectedNum(num);
  };
  return (
    <div className="pt-10 md:pt-20 pb-20 px-5 lg:px-10 flex flex-col gap-6" id="projects">
      <div className="flex items-center gap-4">
        <span className="text-2.5xl lg:text-4xl poppins-medium">Projects</span>
        <img className="h-8 sm:h-10 mb-2" src={node} alt="" />
      </div>
      <div className="flex items-center justify-center mt-8 md:mt-12">
        <div
          className="relative h-[500px] sm:h-[300px] lg:h-[550px] w-[800px] rounded-xl shadow-xl transition-all"
          style={{
            backgroundImage: `url(${projectInfo[selectedNum - 1].image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
         
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full lg:w-[500px] h-10 rounded-lg poppins-medium flex items-center justify-center gap-2 lg:ml-6">
          {projectNums.map((num) => (
            <div
              onClick={() => handleNumClick(num)}
              key={num}
              className={`lg:h-10 lg:w-20 w-16 cursor-pointer ${
                num == selectedNum
                  ? "bg-violet-400 shadow-xl text-white"
                  : "bg-violet-100 text-black"
              } flex items-center py-[2px] justify-center text-lg rounded-md md:rounded-lg transition-all`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between border-b mt-10 lg:mt-0 pb-2 border-zinc-500 text-lg">
        <div className="poppins-medium-italic lg:text-1.5xl">{projectInfo[selectedNum-1].title}</div>
        <div className="italic text-xl lg:text-1.5xl">{projectInfo[selectedNum-1].duration}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="font-semibold flex gap-2 items-center text-white bg-violet-400 shadow-lg rounded-lg py-2.5 px-6 tracking-wider hover:scale-105 transition-all" onClick={()=>setLiveError(true)}>
          <span className="text-sm sm:text-xl">Live</span>
          <img className="h-5" src={live} alt="" />
        </div>
        <div className="font-semibold flex items-center gap-2 text-white bg-violet-400 shadow-lg rounded-lg py-2.5 px-[18px] tracking-wider hover:scale-105 transition-all" onClick={()=>setCodeError(true)}>
          <span className="text-sm sm:text-xl">Code</span>
          <svg
            className=""
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
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
      </div>
      <div className="text-sm sm:text-lg italic leading-7 tracking-wide">
        {projectInfo[selectedNum-1].discription}
      </div>
    </div>
  );
}
