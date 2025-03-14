import Certificate from "@/public/images/Certificate.jpeg";
import Recommendation from "@/public/images/Recommendation.jpg";
import Image from "next/image";

export default function Achievement() {
  return (
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
            <g clipPath="url(#clip0)">
              <path
                d="M27.24 59.656c3.056-4.048 6.993-7.064 11.733-8.884 1.044-.403.601-2.019-.494-1.686a27.466 27.466 0 00-7.22 3.363c4.386-6.307 6.793-13.976 7.43-21.601.826-9.907-1.403-22-8.078-29.72-.977-1.136-3.166.194-2.558 1.583C30 7.16 32.27 11.285 33.525 16.038c1.242 4.705 1.793 9.525 1.53 14.385-.434 8.056-3.296 15.458-7.17 22.389-.355-2.259-1.235-4.428-2.668-6.287-1.3-1.681-4.121-.045-2.869 1.776 2.13 3.113 3.128 6.322 2.577 10.122-.167 1.186 1.416 2.426 2.317 1.233z"
                fill="#333"
                fillOpacity=".85"
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
            It was a redux course. When i was learning Redux then i did this
            course and my mark was almost 93%. I have learned from this course
            Redux, Redux-Toolkit, Redux-Thunk, React-Redux, RTK Query.{" "}
            <a
              href="https://learnwithsumit.com/certificates/verify/LWSCTXN-5YK1NQ5Q?fbclid=IwAR2c08Oq5p_J0K9affKQ0MSKsCWEJWTG2MbxFJaAZNWlaaSzH_fcLQarkiQ"
              target="blank"
              className="text-sky-500"
            >
              To verify 🏆
            </a>
          </p>
          <Image
            src={Certificate}
            width={500}
            height={150}
            alt="review"
            className=" shadow-md hover:scale-105 transition grayscale hover:grayscale-0"
          />
        </div>
        <div className="px-5 md:px-0 lg:px-0">
          <Image
            src={Recommendation}
            width={450}
            height={150}
            alt="review"
            className="shadow-md hover:scale-105 transition w-full md:w-[450px] lg:w-[450px] grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
}
