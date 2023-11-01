import p1 from "@/public/images/p1.jpg";
import p2 from "@/public/images/p2.jpg";
import p3 from "@/public/images/p3.jpg";
import Image from "next/image";

export default function Project() {
  return (
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
            <Image
              className="lg:h-48 md:h-36 w-full object-content object-center"
              src={p1}
              width={400}
              height={400}
              alt="portfolio"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Project 1
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
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
              src={p2}
              width={400}
              height={400}
              alt="portfolio"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Project 2
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
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
              src={p3}
              width={400}
              height={400}
              alt="portfolio"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Project 3
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
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
              src={p3}
              width={400}
              height={400}
              alt="portfolio"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Project 4
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
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
              src={p2}
              width={400}
              height={400}
              alt="portfolio"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Project 5
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
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
              src={p1}
              width={400}
              height={400}
              alt="portfolio"
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Project 6
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
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
  );
}
