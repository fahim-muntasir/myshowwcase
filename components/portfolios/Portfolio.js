import React from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio_new({ data, right }) {
  const { name, summary, technology, liveLink, githubLink, thumbnail } = data || {};
  return (
    <div className="border-dashed border-2 rounded-lg p-6 mb-5 cursor-pointer transition duration-300 ease-in-out hover:bg-[#F8FAFC] relative group shadow-sm ">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {!right && (<div className="h-56 w-full md:w-[26rem] rounded-xl shadow-2xl overflow-hidden">
          <Image
            src={`/images/${thumbnail}`}
            width={430}
            height={150}
            alt={`${name} thumbnail`}
            className="h-auto group-hover:-translate-y-full transition ease-in-out"
            style={{
              transitionDuration: '8000ms',
            }}
          />
        </div>)}

        {right && (<div className="h-56 w-full md:w-[26rem] rounded-xl shadow-2xl overflow-hidden ml-auto block md:hidden">
          <Image
            src={`/images/${thumbnail}`}
            width={430}
            height={150}
            alt={`${name} thumbnail`}
            className=" h-auto group-hover:-translate-y-full transition ease-in-out"
            style={{
              transitionDuration: '8000ms',
            }}
          />
        </div>)}

        <div className="grid grid-rows-3 gap-3 h-auto">
          <div className="flex items-center">
            <h2 className="text-2xl font-medium">{name}</h2>
          </div>
          <div>
            <p className="text-base font-light tracking-wide line-clamp-3 leading-6 ">
              {summary}
            </p>
          </div>
          <div className="flex justify-start flex-wrap items-center gap-2">
            {technology
              .filter((tech) => tech?.icon)
              .map((item, index) => (
                <div
                  key={index}
                  className="text-xs font-light px-2 py-[2px] rounded-full border border-gray-300 bg-gray-100 text-gray-700"
                >
                  {item.name}
                </div>
              ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="flex-1 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md font-medium transition-colors text-sm"
            >
              View Case Study
            </button>

            <Link href={data.githubLink} target="blank" className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <Github className="h-4 w-4" />
            </Link>

            {data.liveLink && (<Link href={data.liveLink} target="blank" className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
              <ExternalLink className="h-4 w-4" />
            </Link>)}
          </div>

        </div>

        {right && (<div className="h-56 w-full md:w-[26rem] rounded-xl shadow-2xl overflow-hidden ml-auto hidden md:block">
          <Image
            src={`/images/${thumbnail}`}
            width={430}
            height={150}
            alt={`${name} thumbnail`}
            className=" h-auto group-hover:-translate-y-full transition ease-in-out"
            style={{
              transitionDuration: '8000ms',
            }}
          />
        </div>)}
      </div>

    </div>
  );
}
