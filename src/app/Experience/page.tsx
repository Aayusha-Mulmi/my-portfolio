import React from "react";

import {
  FaBriefcase,
  FaGraduationCap,
  FaSchool,
  FaLaptopCode,
} from "react-icons/fa";

export default function Experience() {
  const timeline = [
    {
      title: "Junior Front-End Developer",
      place: "Nipuna Prabidhik Sewa",
      desc: "Worked as a Junior Front-End Developer at Nipuna Prabidhik Sewa, building modern, responsive web interfaces.",
      date: "October 2024 – Present",
      icon: <FaBriefcase />,
    },
    {
      title: "Front-End Intern",
      place: "Nipuna Prabidhik Sewa",
      desc: "Built projects with React, Next.js, Tailwind, and Firebase, focusing on responsive design, API integration, and collaborative development.",
      date: "April 2024- October 2024",
      icon: <FaLaptopCode />,
    },
    {
      title: "Bsc.CSIT",
      place: "Mount Annapurna Campus",
      desc: "Completed Bachelor's degree in Computer Science and Information Technology, gaining a solid foundation in software development, algorithms, and data structures.",
      date: "2019–2024",
      icon: <FaGraduationCap />,
    },
    {
      title: "High School (+2)",
      place: "Prativa Secondary",
      desc: "Completed high school with a strong foundation in Science",
      date: "2017–2019",
      icon: <FaSchool />,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 px-4 sm:px-8 py-16">
      <h1 className="text-center text-3xl sm:text-4xl font-bold text-white mb-16">
        Education <span className="text-red-500">&</span> Experience
      </h1>

      <div className="relative max-w-4xl mx-auto">
        <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-white -translate-x-1/2"></div>

        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-cols-2 relative mt-12"
          >
            <div
              className={`flex items-center justify-center mb-3 md:mb-0 md:mt-8 mx-5 md:mx-10 ${
                index % 2 === 0
                  ? "md:text-left md:order-2"
                  : "md:text-right md:order-1"
              }`}
            >
              <div className="md:hidden flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full border-2 border-white mr-3">
                {item.icon}
              </div>
              <span className="text-lg font-semibold text-neutral-400 text-center">
                {item.date}
              </span>
            </div>

            <div
              className={`relative mx-5 md:mx-10 p-4 sm:p-5 bg-neutral-600 border-b-4 border-neutral-300 rounded-md text-left
                before:content-[''] before:absolute before:top-[35%] before:-translate-y-1/2
                ${
                  index % 2 === 0
                    ? "md:before:right-[-10px] md:before:border-y-[10px] md:before:border-l-[10px] md:before:border-y-transparent md:before:border-l-neutral-600 md:order-1"
                    : "md:before:left-[-10px] md:before:border-y-[10px] md:before:border-r-[10px] md:before:border-y-transparent md:before:border-r-neutral-600 md:order-2"
                }`}
            >
              <h1 className="font-bold text-xl sm:text-2xl">{item.title}</h1>
              <h3 className="text-neutral-300 text-md sm:text-lg pb-2 font-bold">
                {item.place}
              </h3>
              <p className="text-left text-sm sm:text-md">{item.desc}</p>
            </div>
            <div className="hidden md:flex absolute left-1/2 top-[35%] w-10 h-10 items-center justify-center bg-red-600 text-white rounded-full -translate-x-1/2 z-10 border-2 border-white text-lg">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
