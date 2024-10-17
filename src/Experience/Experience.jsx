import React from "react";
import work from "/assets/suitcase.png";

export default function Experience() {
  return (
    <div className="pt-10 md:pt-20 pb-20 flex flex-col gap-12 px-5 lg:px-10" id="experience">
      <div className="flex items-center gap-4">
        <span className="text-2.5xl lg:text-4xl poppins-medium">Certification && Work</span>
        <img className="h-8 sm:h-10" src={work} alt="" />
      </div>
      <div className="flex flex-col gap-10">
        <div className="">
          <div className="text-lg text-1.5xl font-semibold">
          Freelancer
          </div>
          <div className="sm:text-lg italic mt-2">
            Worked with various NGO's to host them online  and provide them with a platform to reach out to their audience.
          </div>
          <div className="italic lg:text-lg mt-3">November, 2023 - Present</div>
          <div className="text-sm lg:text-xl mt-10 pl-5 md:pl-10 border-l-2 border-l-zinc-300 leading-8 relative italic tracking-wide">
          Excelled in diverse technologies including Node Js ,Python,Postgres ,Prisma  <br /> Had done certification in DSA , Software testing and Web Development by Harkirat Singh   <br /> Worked with various tools like Docker, Jenkins, and GitLab CI.
            <div className="h-3 w-3 rounded-full top-0 left-[-7px] absolute bg-violet-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
