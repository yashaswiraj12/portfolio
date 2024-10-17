import React, { useState, useRef } from "react";
import contact from "/assets/contactt.png";
import linkedin from "/assets/linkedin.png";
import github from "/assets/github.png";
import code from "/assets/code.png";
import gmail from "/assets/gmail.png";
import instagram from "/assets/instagram.png";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
// import profilepic from "/assets/gatepicnew.jpg";

export default function Contact({ dark, setDark }) {
  const [message, setMessage] = useState("");
  const [empty, setEmpty] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_wp0fx5o', 'template_5uo4mdg', form.current, {
        publicKey: 'hiZBRu4kXeCksuWhZ',
      })
      .then(
        () => {
          toast.success("Thank you for reaching out");
          console.log('SUCCESS!');
        },
        (error) => {
          toast.error("Message send failed")
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleHiringClick = () => {
    setMessage(
      `Hi [Name],${"\n"}${"\n"}I came across your portfolio and was genuinely impressed by your work, especially in [mention specific project or skill]. I'm interested in discussing a potential job opportunity that aligns with your talents.${"\n"}${"\n"}Could we connect to explore this further when you have a moment?${"\n"}${"\n"}Best regards,${"\n"}${"\n"}[Your Name]`
    );
  };
  return (
    <div
      className="pt-10 md:pt-20 pb-20 px-5 lg:px-10 flex flex-col gap-6"
      id="contact"
    >
      <div className="flex items-center gap-4">
        <span className="text-2.5xl lg:text-4xl poppins-medium">Let's Get In Touch</span>
        <img className="h-6 md:h-10" src={contact} alt="" />
      </div>
      <div className="flex items-center mt-5">
        <div className="lg:flex hidden items-center gap-2">
          <span className="text-lg lg:text-1.5xl font-semibold">Social Links</span>
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
        <div className="lg:ml-4 flex w-full gap-8 md:w-auto justify-between md:justify-start items-center">
          <a href="https://www.linkedin.com/in/yashaswi-1063-raj/" target="_blank">
            <img
              className="h-7 hover:scale-110 transition-all cursor-pointer"
              src={linkedin}
              alt=""
            />
          </a>
          <a href="https://github.com/yashaswiraj12" target="_blank">
            <img
              className={`h-7 hover:scale-110 transition-all cursor-pointer ${
                dark ? "invert" : ""
              }`}
              src={github}
              alt=""
            />
          </a>
          <a href="/" target="_blank">
            <img
              className={`h-[32px] hover:scale-110 transition-all cursor-pointer ${
                dark ? "invert" : ""
              }`}
              src={code}
              alt=""
            />
          </a>
          <a href="https://yashaswiraj1212@gmail.com" target="_blank">
            <img
              className="h-7 hover:scale-110 transition-all cursor-pointer"
              src={gmail}
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/yashaswi.raj.5203/" target="_blank">
            <img
              className="h-[26px] hover:scale-110 transition-all cursor-pointer"
              src={instagram}
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 gap-20 lg:gap-60">
        <div className="w-full lg:w-[50%] flex flex-col gap-10">
          <div className="text-lg font-semibold">
            Ready to bring your ideas to life or explore exciting opportunities?
          </div>
          <div className="italic leading-7 tracking-wide">
            Let's connect! Whether you're an aspiring collaborator with a vision
            or a recruiter looking to chat, your message is the first step
            towards a meaningful conversation. I'm eager to hear from you!
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <form className="flex flex-col gap-10" ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col">
              <label className="ml-2 poppins-regular" htmlFor="name">
                Your Name
              </label>
              <input
                placeholder="Enter Your Name"
                className={`border-2 poppins-regular rounded-lg py-3 px-4 ${
                  dark ? "bg-[#1c1f2e]" : "bg-white"
                }`}
                type="text"
                name="from_name"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label className="ml-2 poppins-regular" htmlFor="email">
                Your Email
              </label>
              <input
                placeholder="Enter Your Email"
                className={`border-2 poppins-regular rounded-lg py-3 px-4 ${
                  dark ? "bg-[#1c1f2e]" : "bg-white"
                }`}
                type="text"
                name="email"
                id=""
              />
            </div>
            <div className="flex flex-col relative">
              <label className="ml-2 poppins-regular" htmlFor="message">
                Your Message
              </label>
              <textarea
                value={message}
                placeholder="Enter Your Message"
                className={`border-2 poppins-regular rounded-lg resize-none py-3 px-4 ${
                  dark ? "bg-[#1c1f2e]" : "bg-white"
                }`}
                name="message"
                id="textarea"
                cols="30"
                rows="8"
                onChange={(e) => {
                  setMessage(e.target.value);
                  setEmpty(e.target.value === "");
                }}
              ></textarea>
              <div
                className="hidden items-center gap-2 bg-zinc-100 border cursor-pointer hover:scale-105 transition-all border-zinc-300 px-4 rounded-md py-1 absolute bottom-[-14px] left-48 xl:flex"
                onClick={handleHiringClick}
              >
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <div className="poppins-regular text-black text-sm md:text-xl">
                  Interested In Hiring
                </div>
                <div className="text-xs md:text-xl">✅</div>
              </div>
              <div
                className="flex items-center gap-2 bg-zinc-100 border cursor-pointer hover:scale-105 transition-all border-zinc-300 px-4 rounded-md py-1 absolute bottom-[-14px] left-5"
                onClick={(e) => setMessage("")}
              >
                <div className="h-2 w-2 bg-red-400 rounded-full"></div>
                <div className="poppins-regular text-black text-sm md:text-xl">
                  Clear Text
                </div>
                <div className="text-xs md:text-xl">❌</div>
              </div>
            </div>
            <button type="submit" className="bg-violet-400 poppins-medium text-lg text-white tracking-wider p-2 rounded-lg hover:bg-violet-500 shadow-xl mt-4 transition-all">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
