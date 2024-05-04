import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import ProjectModal from "../ProjectModal";

export default function Portfolio({
  openModalHandler,
  isModalOpen,
  closeModal,
  data,
}) {
  return (
    <>
      <div
        onClick={openModalHandler}
        className=" relative rounded-lg flex shadow-[0.2rem_0.2rem_4rem_rgba(0,0,0,.1)] p-5 justify-between items-center cursor-pointer bg-white bg-gradient-to-r from-sky-200 to-sky-400 hover:from-sky-400 hover:to-sky-200 group "
      >
        <div>
          <h2
            className={` font-semibold text-3xl md:text-4xl lg:text-4xl text-gray-800 leading-6 `}
          >
            {data?.name}
          </h2>
        </div>
        <div>
          <Image
            src={`/images/${data?.image}`}
            width={100}
            height={100}
            alt="myPic"
            className="h-48 w-72 shadow-[0.2rem_0.2rem_4rem_rgba(0,0,0,.1)] object-content object-center rounded-md scale-95 group-hover:scale-100 transition"
          />
        </div>
        <div className="absolute transition shadow-[0.2rem_0.2rem_4rem_rgba(0,0,0,.1)] right-2 flex items-center justify-center rounded-full w-12 h-12 bg-white text-3xl opacity-0 group-hover:opacity-100 ">
          <BsArrowRight />
        </div>
      </div>
      <ProjectModal isOpen={isModalOpen} onClose={closeModal} data={data} />
    </>
  );
}
