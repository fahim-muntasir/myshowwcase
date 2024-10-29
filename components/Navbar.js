"use client";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export default function Navbar() {
  const [isHide, setIsHide] = useState(false);
  const [showNavBar, setShowNavBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // for hide mobile menu
    function handleClickOutside(event) {
      if (isHide && !event.target.closest(".responsiveMobileMenu")) {
        setIsHide(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    // for show menu when user will scrool top
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHide, prevScrollPos]);

  return (
    <header
      className={`body-font fixed w-full z-50 transition-all duration-400 backdrop-filter backdrop-blur-lg bg-opacity-80 ${
        showNavBar
          ? "top-0 bg-[#F8FAFC]"
          : prevScrollPos === 0
          ? "bg-transparent"
          : "-top-32"
      }`}
    >
      <div className="container mx-auto xl:max-w-screen-lg flex justify-between md:flex-wrap lg:flex-wrap p-5 md:flex-row items-center relative">
        <a className="flex title-font font-medium items-center logo-text cursor-pointer ">
          <Image
            src="/images/mylogo.png"
            alt="fahim muntasir"
            width={48}
            height={50}
            quality={100}
            className="w-9 md:w-12 lg:w-12"
          />
        </a>
        <nav className="hidden md:ml-auto md:flex lg:flex gap-5 flex-wrap items-center font-medium text-sm uppercase justify-center text-gray-800 ">
          <a
            href="#skills"
            className="mr-5 hover:text-gray-900 cursor-pointer "
          >
            Skills
          </a>
          <a
            href="#portfolio"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Portfolio
          </a>
          <a
            href="#reviews"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Reviews
          </a>
          <a
            href="#achievement"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Achievement
          </a>
          <a
            href="#contact"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Contact
          </a>
        </nav>

        <AiOutlineMenu
          className=" text-2xl md:hidden lg:hidden cursor-pointer "
          onClick={() => setIsHide(true)}
        />

        {/* responsive menu  */}
        <nav
          className={`responsiveMobileMenu fixed ${
            isHide ? "right-[0px]" : "right-[-290px]"
          } top-0 bg-white h-screen z-10 w-72 pl-10 pt-10 shadow-xl transition-all md:hidden lg:hidden`}
        >
          <AiOutlineClose
            className="text-3xl ml-auto mr-5 cursor-pointer mb-5 text-gray-800 hover:text-gray-900 hover:rotate-180 transition"
            onClick={() => setIsHide(false)}
          />
          <ul>
            <li className="mb-5">
              <a
                href="#skills"
                className="mr-5 hover:text-gray-900 cursor-pointer text-xl "
              >
                Skills
              </a>
            </li>
            <li className="mb-5">
              <a
                href="#portfolio"
                className="mr-5 hover:text-gray-900 cursor-pointer text-xl"
              >
                Portfolio
              </a>
            </li>
            <li className="mb-5">
              <a
                href="#reviews"
                className="mr-5 hover:text-gray-900 cursor-pointer text-xl"
              >
                Reviews
              </a>
            </li>
            <li className="mb-5">
              <a
                href="#achievement"
                className="mr-5 hover:text-gray-900 cursor-pointer text-xl"
              >
                Achievement
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="mr-5 hover:text-gray-900 cursor-pointer text-xl"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
