"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "./data/projects";

export default function ProjectDetailsClient({ id }: { id: string }) {
  const router = useRouter();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-lg">
        Project not found 😕
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 px-8 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden group">
          <Image
            src={project.src}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 backdrop-blur-[0.5px] opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-all"
          ></a>
        </div>

        <p className="text-neutral-300 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        <button
          onClick={() => router.back()}
          className="text-red-500 hover:underline transition-all"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  );
}
