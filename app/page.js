import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className=" absolute top-20 h-[1400px] md:h-[800px] lg:h-[800px] right-0 left-0 bg-[#F8FAFC] z-[-1] "></div>
            <section className="container mx-auto xl:max-w-screen-lg md:flex lg:flex md:justify-between lg:justify-between mt-10 md:mt-20 lg:mt-20 mb-20 ">
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
                        src="/../public/images/fahim.jpg"
                        width={450}
                        height={300}
                        alt="myPic"
                        className="md:ml-auto lg:ml-auto rounded-lg h-[520px] w-96 md:w-[450px] lg:[450px] md:h-[550px] lg:h-[550px] md:mt-8 lg:mt-8 md:mr-8 lg:mr-8 shadow mt-20 ml-10"
                    />
                </div>
            </section>
            <Skills />

            <section
                id="portfolio"
                className="container mx-auto xl:max-w-screen-lg pt-20 mt-20 mb-20"
            >
                <div className=" text-center md:text-left lg:text-left ">
                    <h2 className=" relative inline-block font-semibold text-3xl uppercase before:content-[''] before:absolute before:h-4 before:z-[-1] before:w-full  before:bg-amber-400 before:bottom-[0px] md:before:left-0 lg:before:left-0 mb-20 md:text-left lg:text-left text-gray-800 ">
                        Portfolio
                    </h2>
                </div>

                <div className="flex flex-wrap px-5 md:px-0 lg:px-0">
                    <div className="p-4 md:w-1/3 hover:scale-105 transition">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative ">
                            {/* <div className=" absolute lg:h-48 md:h-36 w-full bg-[#a6a6a65c] top-0 right-0 left-0 hover:opacity-0"></div> */}
                            <Image
                                className="lg:h-48 md:h-36 w-full object-content object-center"
                                src="/../public/images/project01.PNG"
                                width={400}
                                height={400}
                                alt="portfolio"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Quiz App
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer mr-2 ">
                                        Code↗
                                    </a>

                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer ">
                                        Live View↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 hover:scale-105 transition">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-content object-center"
                                src="/../public/images/project01.PNG"
                                width={400}
                                height={400}
                                alt="portfolio"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Quiz App
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer mr-2 ">
                                        Code↗
                                    </a>

                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer ">
                                        Live View↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 hover:scale-105 transition">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-content object-center"
                                src="/../public/images/project01.PNG"
                                width={400}
                                height={400}
                                alt="portfolio"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Quiz App
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer mr-2 ">
                                        Code↗
                                    </a>

                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer ">
                                        Live View↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 hover:scale-105 transition">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-content object-center"
                                src="/../public/images/project01.PNG"
                                width={400}
                                height={400}
                                alt="portfolio"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Quiz App
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer mr-2 ">
                                        Code↗
                                    </a>

                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer ">
                                        Live View↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 hover:scale-105 transition">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-content object-center"
                                src="/../public/images/project01.PNG"
                                width={400}
                                height={400}
                                alt="portfolio"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Quiz App
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer mr-2 ">
                                        Code↗
                                    </a>

                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer ">
                                        Live View↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 hover:scale-105 transition">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-content object-center"
                                src="/../public/images/project01.PNG"
                                width={400}
                                height={400}
                                alt="portfolio"
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                    Quiz App
                                </h1>
                                <p className="leading-relaxed mb-3">
                                    Photo booth fam kinfolk cold-pressed
                                    sriracha leggings jianbing microdosing
                                    tousled waistcoat.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer mr-2 ">
                                        Code↗
                                    </a>

                                    <a className="text-sky-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer ">
                                        Live View↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" text-center mt-20">
                    <a
                        href="https://github.com/fahim-muntasir"
                        target="blank"
                        className=" border-2 border-sky-400 uppercase py-2 px-5 hover:bg-sky-400 hover:text-white transition "
                    >
                        More
                    </a>
                </div>
            </section>

            <section
                id="reviews"
                className="container mx-auto xl:max-w-screen-lg pt-20 mt-20 mb-20"
            >
                <div className=" relative pl-10 mb-20 ">
                    <span className="skill-header text-gray-700 text-2xl">
                        Reviews.
                    </span>
                    <div className=" absolute left-20 top-5 pl-10 ">
                        <svg
                            width="57"
                            height="61"
                            viewBox="0 0 57 61"
                            fill="none"
                            xmlns="https://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M27.24 59.656c3.056-4.048 6.993-7.064 11.733-8.884 1.044-.403.601-2.019-.494-1.686a27.466 27.466 0 00-7.22 3.363c4.386-6.307 6.793-13.976 7.43-21.601.826-9.907-1.403-22-8.078-29.72-.977-1.136-3.166.194-2.558 1.583C30 7.16 32.27 11.285 33.525 16.038c1.242 4.705 1.793 9.525 1.53 14.385-.434 8.056-3.296 15.458-7.17 22.389-.355-2.259-1.235-4.428-2.668-6.287-1.3-1.681-4.121-.045-2.869 1.776 2.13 3.113 3.128 6.322 2.577 10.122-.167 1.186 1.416 2.426 2.317 1.233z"
                                    fill="#333"
                                    fill-opacity=".85"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <path
                                        transform="rotate(148.25 56.2 41.845)"
                                        fill="#fff"
                                        d="M56.2 41.845h35.638v49.209H56.2z"
                                    ></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="mt-20 flex flex-wrap px-5 md:px-0 lg:px-0">
                    <div className="mb-10 hover:scale-105 transition">
                        <Image
                            src="/../public/images/review1.PNG"
                            width={550}
                            height={150}
                            alt="review"
                            className=" shadow-md border border-amber-400 "
                        />
                    </div>
                    <div className="mb-10 hover:scale-105 transition ml-auto">
                        <Image
                            src="/../public/images/review4.PNG"
                            width={400}
                            height={150}
                            alt="review"
                            className=" shadow-md border border-amber-400 "
                        />
                    </div>
                    <div className="mb-10 hover:scale-105 transition">
                        <Image
                            src="/../public/images/review6.PNG"
                            width={350}
                            height={150}
                            alt="review"
                            className=" shadow-md border border-amber-400 "
                        />
                    </div>
                    <div className="ml-auto mb-10 hover:scale-105 transition">
                        <Image
                            src="/../public/images/review2.PNG"
                            width={550}
                            height={150}
                            alt="review"
                            className=" shadow-md border border-amber-400 "
                        />
                    </div>
                    <div className="mb-10 hover:scale-105 transition">
                        <Image
                            src="/../public/images/review3.PNG"
                            width={450}
                            height={150}
                            alt="review"
                            className=" shadow-md border border-amber-400 "
                        />
                    </div>
                    <div className="mb-10 hover:scale-105 transition ml-auto">
                        <Image
                            src="/../public/images/review7.PNG"
                            width={500}
                            height={150}
                            alt="review"
                            className=" shadow-md border border-amber-400 "
                        />
                    </div>
                    <div className="mb-10 hover:scale-105 transition">
                        <Image
                            src="/../public/images/review8.PNG"
                            width={550}
                            height={150}
                            alt="review"
                            className=" shadow-md border border-amber-400 "
                        />
                    </div>
                    <div className="mb-10 hover:scale-105 transition ml-auto">
                        <Image
                            src="/../public/images/review5.PNG"
                            width={400}
                            height={150}
                            alt="review"
                            className=" shadow-md border border-amber-400 "
                        />
                    </div>
                </div>
            </section>

            <section
                id="achievement"
                className="container mx-auto xl:max-w-screen-lg pt-20 mt-20 mb-20"
            >
                <div className=" relative pl-10 mb-20 ">
                    <span className="skill-header text-gray-700 text-2xl">
                        Achievement.
                    </span>
                    <div className=" absolute left-32 top-5 pl-10 ">
                        <svg
                            width="57"
                            height="61"
                            viewBox="0 0 57 61"
                            fill="none"
                            xmlns="https://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0)">
                                <path
                                    d="M27.24 59.656c3.056-4.048 6.993-7.064 11.733-8.884 1.044-.403.601-2.019-.494-1.686a27.466 27.466 0 00-7.22 3.363c4.386-6.307 6.793-13.976 7.43-21.601.826-9.907-1.403-22-8.078-29.72-.977-1.136-3.166.194-2.558 1.583C30 7.16 32.27 11.285 33.525 16.038c1.242 4.705 1.793 9.525 1.53 14.385-.434 8.056-3.296 15.458-7.17 22.389-.355-2.259-1.235-4.428-2.668-6.287-1.3-1.681-4.121-.045-2.869 1.776 2.13 3.113 3.128 6.322 2.577 10.122-.167 1.186 1.416 2.426 2.317 1.233z"
                                    fill="#333"
                                    fill-opacity=".85"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <path
                                        transform="rotate(148.25 56.2 41.845)"
                                        fill="#fff"
                                        d="M56.2 41.845h35.638v49.209H56.2z"
                                    ></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="md:flex lg:flex md:justify-between lg:justify-between">
                    <div className=" w-full px-5 md:px-0 lg:px-0 md:w-[500px] lg:w-[500px] mb-10 md:mb-0 lg:mb-0">
                        <p className="my-8">
                            It was a redux course. When i was learning Redux
                            then i did this course and my mark was almost 93%. I
                            have learned from this course Redux, Redux-Toolkit,
                            Redux-Thunk, React-Redux, RTK Query.{" "}
                            <a
                                href="https://learnwithsumit.com/certificates/verify/LWSCTXN-5YK1NQ5Q?fbclid=IwAR2c08Oq5p_J0K9affKQ0MSKsCWEJWTG2MbxFJaAZNWlaaSzH_fcLQarkiQ"
                                target="blank"
                                className="text-sky-500"
                            >
                                To verify 🏆
                            </a>
                        </p>
                        <Image
                            src="/../public/images/Certificate.jpeg"
                            width={500}
                            height={150}
                            alt="review"
                            className=" shadow-md hover:scale-105 transition"
                        />
                    </div>
                    <div className="px-5 md:px-0 lg:px-0">
                        <Image
                            src="/../public/images/Recommendation.jpg"
                            width={450}
                            height={150}
                            alt="review"
                            className="shadow-md hover:scale-105 transition w-full md:w-[450px] lg:w-[450px]"
                        />
                    </div>
                </div>
            </section>

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
