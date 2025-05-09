import Achievement from "@/components/Achievement";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import Project from "@/components/Project";
import Review from "@/components/Review";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import fahim from "@/public/images/fahimmuntasir.png";
import Image from "next/image";
import PortfolioList from "@/components/portfolios/PortfolioList";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" absolute top-20 h-[1500px] md:h-[800px] lg:h-[800px] right-0 left-0 z-[-1] "></div>
      <section
        className="container mx-auto xl:max-w-screen-lg md:flex lg:flex md:justify-between lg:justify-between mt-40 md:mt-[190px] lg:mt-[190px] mb-20"
      >
        <div className="md:w-[50%] lg:w-[50%] px-5 md:px-0 lg:px-0">
          <h1 className="text-[2.5rem] font-semibold text-gray-800 mb-3 ">
            Hey there!
          </h1>
          <h2 className="text-3xl text-gray-800 mb-5">
            I&#39;m Fahim, a passionate <br />{" "}
            <span className="underline decoration-amber-400 font-medium bg-gradient-to-r from-fuchsia-600 via-purple-500 to-sky-500 bg-clip-text text-transparent">
              web application developer
            </span>
            .
          </h2>
          <h3 className="text-xl text-gray-800 leading-normal mb-5">
            with a strong focus on creating intuitive and efficient user
            experiences. With 3 years of experience in the industry, I
            specialize in building robust web applications that leverage the
            latest technologies to deliver exceptional results.
          </h3>
          <h3 className="text-xl text-gray-800 leading-normal">
            I have a deep understanding of HTML, CSS, and JavaScript, React js,
            Next js, Node js and I keep myself updated with the latest trends
            and best practices in the ever-evolving web development landscape.🚀
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
              href="https://drive.google.com/file/d/1oENn3JYJCVAvbvjrqSfgOMKLXki1z3Jr/view?usp=sharing"
              target="blank"
              className="bg-sky-500 py-2 px-4 text-white hover:bg-sky-600 "
            >
              Resume
            </a>
          </div>
        </div>
        <div className="md:w-[50%] lg:w-[50%] relative px-5 mt-0 md:-mt-[40px] lg:-mt-[40px]">
          <Image
            src={fahim}
            width={450}
            height={300}
            alt="myPic"
            className="md:ml-auto lg:ml-auto rounded-xl h-[520px] w-full md:w-[485px] lg:w-[485px] md:h-[540px] lg:h-[540px] md:mt-[5.5rem] lg:mt-[5.5rem] shadow-2xl mt-16 grayscale hover:grayscale-0 transition-all border-4 border-gray-100 rotate-1 hover:rotate-0 duration-500 ease-in-out"
          />
        </div>
      </section>

      {/* skill section  */}
      <Skills />
      {/* skill section  */}

      {/* project section  */}
      {/* <Project /> */}
      <PortfolioList />
      {/* project section  */}

      {/* review section  */}
      <Testimonials />
      {/* review section  */}

      {/* achievement section  */}
      <Achievement />
      {/* achievement section  */}

      <Contact />
    </>
  );
}
