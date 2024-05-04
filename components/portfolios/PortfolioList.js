"use client";
import React, { useState } from "react";
// import Portfolio from "./Portfolio";
// import allPortfolio from "@/portfolio.json";
import Portfolio from "./Portfolio";
import portfolios from "./data";

export default function PortfolioList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="portfolio">
      <div className="container mx-auto xl:max-w-screen-lg pt-20 mt-20 mb-20">
        <div className=" text-center md:text-left lg:text-left ">
          <h2 className="relative inline-block font-semibold text-3xl uppercase before:z-[-1] before:content-[''] before:absolute before:h-4 before:w-full before:bg-amber-400 before:bottom-[0px] md:before:left-0 lg:before:left-0 mb-20 md:text-left lg:text-left text-gray-800 ">
            Explorations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-5 md:px-0 lg:px-0">
          {portfolios?.map((item) => (
            <Portfolio key={item?.id} data={item} />
          ))}
        </div>

        <div className="text-md text-center mt-10">
          <a
            href="https://github.com/fahim-muntasir?tab=repositories"
            target="blank"
            className="text-sky-500 ml-2"
          >
            More projects
          </a>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-0 lg:px-0 ">
          {allPortfolio?.map((portfolio) => (
            <Portfolio
              key={portfolio?.id}
              openModalHandler={openModal}
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              data={portfolio}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
