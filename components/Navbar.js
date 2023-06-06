export default function Navbar() {
    return (
        <header className="body-font bg-[#F8FAFC]">
            <div className="container mx-auto xl:max-w-screen-lg flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-sky-500 mb-4 md:mb-0 logo-text text-5xl cursor-pointer ">
                    FM
                </a>
                <nav className="md:ml-auto flex gap-5 flex-wrap items-center font-medium text-sm uppercase justify-center text-gray-800 ">
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
            </div>
        </header>
    );
}
