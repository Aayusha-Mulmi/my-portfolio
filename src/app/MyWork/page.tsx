"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "./data/projects";

export default function MyWork() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-neutral-900 px-8 py-16">
      <h1 className="text-center text-4xl font-bold text-white mb-4">
        My <span className="text-red-500">Projects</span>
      </h1>

      <p className="text-neutral-400 max-w-3xl mx-auto text-center mb-12">
        Explore some of my featured projects — each one blending functionality
        with clean, responsive design.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map(project => (
          <div
            key={project.id}
            className="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg w-full max-w-sm transition-all"
          >
            <div className="relative w-full h-56">
              <Image src={project.src} alt={project.title} fill className="object-cover" />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-neutral-400 text-sm leading-relaxed">{project.short}</p>
              <button
                onClick={() => router.push(`/MyWork/${project.id}`)}
                className="mt-3 text-red-500 hover:underline transition-all text-sm"
              >
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-neutral-600" />
    </div>
  );
}
