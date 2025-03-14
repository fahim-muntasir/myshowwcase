import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";

export default function Portfolio_new({ data }) {
  const { name, summary, technology, liveLink, githubLink } = data || {};
  return (
    <div className="border-dashed border-2 rounded-lg px-6 mb-5 grid grid-rows-3 gap-3 h-auto py-5 cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8FAFC] relative group ">
      <div className=" absolute right-2 top-2 border border-dashed rounded-full text-xl bg-white hidden group-hover:block ">
        <div className="flex gap-5 py-1 px-3">
          {liveLink && (
            <a href={liveLink} target="_blank">
              <FaEye className=" hover:scale-110 " />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank">
              <FaGithub className=" hover:scale-110 " />
            </a>
          )}
        </div>
      </div>
      <div className="flex items-center">
        <h2 className="text-lg font-medium">{name}</h2>
      </div>
      <div>
        <p className="text-sm font-light tracking-wide line-clamp-3 leading-6 ">
          {summary}
        </p>
      </div>
      <div className="flex justify-start items-center gap-3">
        {technology
          .filter((tech) => tech?.icon)
          .map((item, index) => (
            <div
              key={index}
              className="text-2xl grayscale group-hover:grayscale-0 transition-all"
            >
              {item.icon}
            </div>
          ))}
        {/* <div className="w-10 h-10 rounded-full border-dashed border-2 flex justify-center items-center text-2xl">
          <FaReact />
        </div>
        <div className="w-10 h-10 rounded-full border-dashed border-2 flex justify-center items-center text-2xl">
          <SiTailwindcss />
        </div>
        <div className="w-10 h-10 rounded-full border-dashed border-2 flex justify-center items-center text-2xl">
          <SiRedux />
        </div>
        <div className="w-10 h-10 rounded-full border-dashed border-2 flex justify-center items-center text-2xl">
          <SiSupabase />
        </div> */}
      </div>
    </div>
  );
}
