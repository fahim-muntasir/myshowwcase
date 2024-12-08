import {
    AiFillFacebook,
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
    return (
        <section className="bg-gray-900 py-10">
            <div className="container mx-auto xl:max-w-screen-lg flex justify-between items-center px-5 md:px-0 lg:px-0 ">
                <p className="text-white text-sm">&#169; Fahim muntasir 2023</p>
                <div>
                    <ul className="flex justify-end  items-center gap-4 text-2xl text-white ">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/fahim-muntasir0909"
                                target="blank"
                            >
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/fahim-muntasir"
                                target="blank"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/fahim.muntasir.37625"
                                target="blank"
                            >
                                <AiFillFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/iamfahimmuntasir"
                                target="blank"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
