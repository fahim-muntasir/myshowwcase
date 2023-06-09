"use client";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
    const [isHide, setIsHide] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (isHide && !event.target.closest(".responsiveMobileMenu")) {
                setIsHide(false);
            }
        }

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isHide]);

    return (
        <header className="body-font bg-[#F8FAFC]">
            <div className="container mx-auto xl:max-w-screen-lg flex justify-between md:flex-wrap lg:flex-wrap p-5 md:flex-row items-center relative">
                <a className="flex title-font font-medium items-center text-sky-500 logo-text text-5xl cursor-pointer ">
                    FM
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
