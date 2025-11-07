import Link from "next/link";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Hero() {
  return (
    <div className="h-100vh flex relative py-15  ">
      <div className="mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-items-center">
        <div>
          <Image
            src="/Images/1000017914.jpg"
            width={375}
            height={375}
            alt="Picture of the author"
            className="rounded-t-full object-cover shadow-lg h-70 w-60 sm:h-full sm:w-full"
          />
        </div>
        <div>
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold mb-3">
            Hi, I&apos;m <span className="text-red-500">Aayusha Mulmi</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Front-End Developer
          </h2>
          <p className="text-justify max-w-[600px]">
            A passionate Frontend Developer with hands-on experience in
            JavaScript, React, Next.js, TypeScript, Tailwind CSS and modern
            technologies. I craft modern, responsive, and user-friendly web
            applications with a focus on clean code and seamless user
            experiences.
          </p>
          <div className="flex gap-3">
            <button className="mt-5 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 flex justify-center items-center gap-3 text-sm font-semibold">
              <Link
                href="/MyWork"
                className="flex justify-center items-center gap-3 text-sm font-semibold"
              >
                View My Work <FaArrowRight />
              </Link>
            </button>
            <a
              href="/AayuResume.pdf "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-5 px-4 py-2 border bg-gray-900 border-gray-500 text-white rounded-md hover:bg-gray-800 transition duration-300 flex justify-center items-center gap-3 text-sm font-semibold">
                <MdOutlineFileDownload className="text-xl" /> Resume
              </button>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
