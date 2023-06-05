export default function Navbar() {
    return (
        <header className="body-font bg-[#F8FAFC]">
            <div className="container mx-auto xl:max-w-screen-lg flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-sky-500 mb-4 md:mb-0 logo-text text-5xl cursor-pointer ">
                    FM
                </a>
                <nav className="md:ml-auto flex gap-5 flex-wrap items-center font-medium text-sm uppercase justify-center text-gray-800 ">
                    <a className="mr-5 hover:text-gray-900 cursor-pointer ">
                        First Link
                    </a>
                    <a className="mr-5 hover:text-gray-900 cursor-pointer">
                        Second Link
                    </a>
                    <a className="mr-5 hover:text-gray-900 cursor-pointer">
                        Third Link
                    </a>
                    <a className="mr-5 hover:text-gray-900 cursor-pointer">
                        Fourth Link
                    </a>
                </nav>
            </div>
        </header>
    );
}
