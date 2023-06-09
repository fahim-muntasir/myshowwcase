import Achievement from "@/components/Achievement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Review from "@/components/Review";
import Skills from "@/components/Skills";
import fahim from "@/public/images/fahim.jpg";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className=" absolute top-20 h-[1400px] md:h-[800px] lg:h-[800px] right-0 left-0 bg-[#F8FAFC] z-[-1] "></div>
            <section className="container mx-auto xl:max-w-screen-lg md:flex lg:flex md:justify-between lg:justify-between mt-28 md:mt-36 lg:mt-36 mb-20 ">
                <div className="md:w-[50%] lg:w-[50%] px-5 md:px-0 lg:px-0">
                    <h1 className="text-5xl font-semibold text-gray-700 mb-5 ">
                        Hey there!
                    </h1>
                    <h2 className="text-3xl text-gray-800 mb-5">
                        I&#39;m Fahim, a passionate <br />{" "}
                        <span className="underline decoration-amber-400 font-medium">
                            web application developer
                        </span>
                        .
                    </h2>
                    <h3 className="text-xl text-gray-800 leading-normal mb-5">
                        with a strong focus on creating intuitive and efficient
                        user experiences. With 3 years of experience in the
                        industry, I specialize in building robust web
                        applications that leverage the latest technologies to
                        deliver exceptional results.
                    </h3>
                    <h3 className="text-xl text-gray-800 leading-normal">
                        I have a deep understanding of HTML, CSS, and
                        JavaScript, React js, Next js, Node js and I keep myself
                        updated with the latest trends and best practices in the
                        ever-evolving web development landscape.🚀
                    </h3>
                    <div className="text-xl mt-5">
                        Get me on
                        <a
                            href="https://github.com/fahim-muntasir"
                            target="blank"
                            className="text-sky-500 ml-2"
                        >
                            Github
                        </a>
                        ,
                        <a
                            href="https://www.linkedin.com/in/fahim-muntasir0909"
                            target="blank"
                            className="text-sky-500 ml-2"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <a
                            href="mailto:fahimmuntasir0909@gmail.com"
                            className="bg-sky-500 py-2 px-4 text-white hover:bg-sky-600 "
                        >
                            Contact
                        </a>
                        <a
                            href="@"
                            className="bg-sky-500 py-2 px-4 text-white hover:bg-sky-600 "
                        >
                            Resume
                        </a>
                    </div>
                </div>
                <div className="md:w-[50%] lg:w-[50%] relative px-5">
                    <div className="absolute top-10 md:top-0 lg:top-0 md:right-0 lg:right-0 z-[-1] border-[3px] border-amber-400 rounded-lg w-96 h-[520px] md:w-[450px] lg:w-[450] md:h-[550px] lg:h-[550px]"></div>
                    <Image
                        src={fahim}
                        width={450}
                        height={300}
                        alt="myPic"
                        className="md:ml-auto lg:ml-auto rounded-lg h-[520px] w-96 md:w-[450px] lg:[450px] md:h-[550px] lg:h-[550px] md:mt-8 lg:mt-8 md:mr-8 lg:mr-8 shadow mt-20 ml-10"
                    />
                </div>
            </section>

            {/* skill section  */}
            <Skills />
            {/* skill section  */}

            {/* project section  */}
            <Project />
            {/* project section  */}

            {/* review section  */}
            <Review />
            {/* review section  */}

            {/* achievement section  */}
            <Achievement />
            {/* achievement section  */}

            <section
                id="contact"
                className="container mx-auto xl:max-w-screen-lg mt-40 mb-20"
            >
                <div className=" text-center md:text-left lg:text-left ">
                    <h2 className=" relative inline-block font-semibold text-3xl uppercase before:content-[''] before:absolute before:h-4 before:z-[-1] before:w-full  before:bg-amber-400 before:bottom-[0px] md:before:left-0 lg:before:left-0 mb-20 md:text-left lg:text-left text-gray-800 ">
                        Contact Info
                    </h2>
                </div>

                <div className=" md:flex lg:flex  md:justify-between lg:justify-between md:items-center lg:items-center px-5 md:px-0 lg:px-0">
                    <div className="md:w-[600px] lg:w-[600px] mb-10 md:mb-0 lg:mb-0">
                        <p className="mb-10">
                            I am interested in working with any company that
                            thinks my skill will be helpful for them. If you are
                            looking for someone like me, please let me know Or
                            you can just say hi to me.
                        </p>

                        <a
                            href="mailto:fahimmuntasir0909@gmail.com"
                            className="bg-sky-500 py-3 px-4 text-white hover:bg-sky-600 "
                        >
                            Contact Me
                        </a>
                    </div>

                    <div>
                        <div className="mb-2">
                            <h2 className="text-2xl text-gray-800">
                                Email Address
                            </h2>
                            <span>fahimmuntasir0909@gmail.com</span>
                        </div>
                        <div className="mb-2">
                            <h2 className="text-2xl text-gray-800">Skype</h2>
                            <span>live:.cid.67d5ce38182c1db0</span>
                        </div>
                        <div>
                            <h2 className="text-2xl text-gray-800">Address</h2>
                            <span>Rupatoly, Barishal, Bangladesh.</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
