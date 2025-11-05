import React from "react";

export default function Experience() {
  return (
    <>
      <div className="min-h-screen bg-neutral-900 px-8 py-16">
        <h1 className="text-center text-4xl font-bold text-white mb-4">
          <span>
            Education <span className="text-red-500">&</span> Experience
          </span>
        </h1>

        <div className="grid grid-cols-2 relative mt-16">
          {/* <div className="p-8 text-right">Left side</div> */}

          <div className=" mx-20 p-3 text-left bg-neutral-600 relative border-b-4 border-neutral-300 rounded-md">
            <h1 className="font-bold text-2xl  ">Junior Front-End Developer</h1>
            <h3 className="text-neutral-300 text-lg pb-2">Nipuna Prabidhik Sewa</h3>
            <p>
              Worked as a Junior Front-End Developer at Nipuna Prabidhik Sewa. Gained hands-on experience in building responsive web
              applications using modern front-end technologies.
            </p>
          </div>

            <div className="mx-20 text-left bg-neutral-600 relative border-b-4 border-neutral-300 rounded-md">
            <h3 className="text-neutral-300 text-lg ">2024-2025</h3>
          </div>

          <span className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-500 -translate-x-1/2"></span>
        </div>
      </div>
    </>
  );
}
