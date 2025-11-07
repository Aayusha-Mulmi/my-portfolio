import React from "react";
import Image from "next/image";

import Skills from "../Skills/page";

export default function About() {
  return (
    <>
      <div className="min-h-screen bg-neutral-800 flex items-center">
        <div className="mx-auto px-12 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-red-500 font-bold text-md py-1">Discover</h2>
            <h1 className="underline decoration-4 decoration-red-500 font-bold text-3xl underline-offset-8 pb-5">
              About Me
            </h1>
            <div className="text-justify max-w-[600px] mx-auto lg:mx-0">
              <p>
                Hello! I&apos;m Aayusha Mulmi, a passionate Frontend Developer
                who loves building clean, responsive, and visually appealing
                websites. I enjoy transforming creative ideas into interactive,
                user-friendly experiences that connect design with
                functionality.
              </p>
              <p className="mt-4">
                I hold a B.Sc. in Computer Science and Information Technology
                (BSC.CSIT) from Mount Annapurna Campus, where I built a strong
                foundation in software development and web technologies. During
                my studies, I developed a keen interest in frontend development
                and continue to expand my expertise in HTML, CSS, JavaScript,
                React, Next.js, and TypeScript.
              </p>
              <p className="mt-4">
                I’m continuously exploring new tools, frameworks, and design
                principles to refine my skills and stay updated with the latest
                trends in web development. My goal is to grow as a frontend
                developer, collaborate on real-world projects, and contribute to
                building meaningful digital experiences that leave a lasting
                impact.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <Image
              src="/Images/1000017914.jpg"
              width={300}
              height={300}
              alt="Aayusha Mulmi"
              className="rounded-full object-cover shadow-lg h-72 w-72 sm:h-80 sm:w-80"
            />
          </div>
        </div>
      </div>

      <hr className="border-neutral-600" />
      <Skills />
       <hr className="border-neutral-600" />
    </>
  );
}
