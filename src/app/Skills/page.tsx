import Image from "next/image";
import React from "react";

export default function Skills() {
  const skills = [
    { src: "/Skills/html (1).png", title: "HTML" },
    { src: "/Skills/text.png", title: "CSS" },
    { src: "/Skills/tailwind-css-2.svg", title: "Tailwind CSS" },
    { src: "/Skills/js.png", title: "JavaScript" },
    { src: "/Skills/typescript.png", title: "TypeScript" },
    { src: "/Skills/science.png", title: "React" },
    { src: "/Skills/next.svg", title: "Next.js" },
    { src: "/Skills/git-icon.svg", title: "Git" },
    { src: "/Skills/github-icon-1.svg", title: "GitHub" },
    { src: "/Skills/gitlab.svg", title: "GitLab" },
    { src: "/Skills/jira-1.svg", title: "Jira" },
    { src: "/Skills/firebase-1.svg", title: "Firebase" },
  ];

  return (
    <div className="min-h-screen bg-neutral-800 px-10 py-10">
      <h1 className="flex justify-center items-center text-4xl font-bold py-4">
        My <span className="text-red-500 ml-2">Skills</span>
      </h1>

      <p className="text-neutral-400 max-w-4xl mx-auto text-center">
        My focus is on writing clean, well-structured code and continuously
        improving my design and development skills through hands-on practice and
        real projects.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 py-12 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center bg-neutral-700 rounded-lg py-6 px-6 w-[140px]
                       border-b-4 border-neutral-500 hover:border-red-500 transition-all duration-300"
          >
            <div className="flex justify-center items-center h-[80px] w-full transform transition-transform duration-300 group-hover:-translate-y-3">
              <Image
                src={skill.src}
                alt={skill.title}
                width={skill.title === 'Next.js' ? 90 : 70}
                height={70}
                className="object-contain"
              />
            </div>
            <p className="text-white text-sm mt-3 font-medium text-center">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
