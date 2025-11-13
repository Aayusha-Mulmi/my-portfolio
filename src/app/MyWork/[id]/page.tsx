import { projects } from "./data/projects";
import ProjectDetailsClient from "./ProjectDetailsClient";

// generate static params
export function generateStaticParams() {
  return projects.map(project => ({ id: project.id }));
}

// Server Component (no "use client")
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  return <ProjectDetailsClient id={params.id} />;
}
