import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="h-screen bg-neutral-800 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto px-24 py-24">
         <div className="flex justify-center items-center">
          <Image
            src="/Images/1000017914.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
            className="rounded-[100%] object-cover shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-red-500 font-bold text-md py-2">Discover</h2>
          <h1 className="underline decoration-4 decoration-red-500 font-bold text-3xl underline-offset-8 pb-5">
            About Me
          </h1>
          <div className="text-justify max-w-[600px]">
            {" "}
            <p>
              Hello! I&apos;m Aayusha Mulmi, a passionate Frontend Developer who
              loves building clean, responsive, and visually appealing websites.
              I enjoy transforming creative ideas into interactive,
              user-friendly experiences that connect design with functionality.
            </p>
            <p className="mt-4">
              {" "}
              I hold a B.Sc. in Computer Science and Information Technology
              (BSC.CSIT) from Mount Annapurna Campus, where I built a strong
              foundation in software development and web technologies. During my
              studies, I developed a keen interest in frontend development and
              continue to expand my expertise in HTML, CSS, JavaScript, React,
              Next.js, and TypeScript.{" "}
            </p>{" "}
            <p className="mt-4">
              {" "}
              I’m continuously exploring new tools, frameworks, and design
              principles to refine my skills and stay updated with the latest
              trends in web development. My goal is to grow as a frontend
              developer, collaborate on real-world projects, and contribute to
              building meaningful digital experiences that leave a lasting
              impact.{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
