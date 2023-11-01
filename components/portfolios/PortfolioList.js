"use client";
import React, { useState } from "react";
import Portfolio from "./Portfolio";
import allPortfolio from "@/portfolio.json";

export default function PortfolioList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section>
      <div className="container mx-auto xl:max-w-screen-lg pt-20 mt-20 mb-20">
        <div className=" text-center md:text-left lg:text-left ">
          <h2 className="relative inline-block font-semibold text-3xl uppercase before:z-[-1] before:content-[''] before:absolute before:h-4 before:w-full before:bg-amber-400 before:bottom-[0px] md:before:left-0 lg:before:left-0 mb-20 md:text-left lg:text-left text-gray-800 ">
            Portfolio
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-0 lg:px-0 ">
          {allPortfolio?.map((portfolio) => (
            <Portfolio
              key={portfolio?._id}
              openModalHandler={openModal}
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              data={portfolio}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
