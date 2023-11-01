import review1 from "@/public/images/review1.jpg";
import review2 from "@/public/images/review2.jpg";
import review3 from "@/public/images/review3.jpg";
import review4 from "@/public/images/review4.jpg";
import review5 from "@/public/images/review5.jpg";
import review6 from "@/public/images/review6.jpg";
import review7 from "@/public/images/review7.jpg";
import review8 from "@/public/images/review8.jpg";
import Image from "next/image";

export default function Review() {
  return (
    <section
      id="reviews"
      className="container mx-auto xl:max-w-screen-lg pt-20 mt-20 mb-20"
    >
      <div className=" relative pl-10 mb-20 ">
        <span className="skill-header text-gray-700 text-2xl">Reviews.</span>
        <div className=" absolute left-20 top-5 pl-10 ">
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

      <div className="mt-20 flex flex-wrap px-5 md:px-0 lg:px-0">
        <div className="mb-10 hover:scale-105 transition">
          <Image
            src={review1}
            width={550}
            height={150}
            alt="review"
            className=" shadow-md border border-amber-400 "
          />
        </div>
        <div className="mb-10 hover:scale-105 transition ml-auto">
          <Image
            src={review4}
            width={400}
            height={150}
            alt="review"
            className=" shadow-md border border-amber-400 "
          />
        </div>
        <div className="mb-10 hover:scale-105 transition">
          <Image
            src={review6}
            width={350}
            height={150}
            alt="review"
            className=" shadow-md border border-amber-400 "
          />
        </div>
        <div className="ml-auto mb-10 hover:scale-105 transition">
          <Image
            src={review2}
            width={550}
            height={150}
            alt="review"
            className=" shadow-md border border-amber-400 "
          />
        </div>
        <div className="mb-10 hover:scale-105 transition">
          <Image
            src={review3}
            width={450}
            height={150}
            alt="review"
            className=" shadow-md border border-amber-400 "
          />
        </div>
        <div className="mb-10 hover:scale-105 transition ml-auto">
          <Image
            src={review7}
            width={500}
            height={150}
            alt="review"
            className=" shadow-md border border-amber-400 "
          />
        </div>
        <div className="mb-10 hover:scale-105 transition">
          <Image
            src={review8}
            width={550}
            height={150}
            alt="review"
            className=" shadow-md border border-amber-400 "
          />
        </div>
        <div className="mb-10 hover:scale-105 transition ml-auto">
          <Image
            src={review5}
            width={400}
            height={150}
            alt="review"
            className=" shadow-md border border-amber-400 "
          />
        </div>
      </div>
    </section>
  );
}
