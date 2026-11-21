
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

import Reveal from "../ReUsable/Reveal";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio",
      category: "Web Development",
      description:
        "A responsive personal portfolio showcasing my introduction, skills, projects, and contact information.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/your-username/Portfolio",
      demo: "#",
      gradient: "from-purple-600 to-indigo-600",
    },
    {
      number: "02",
      title: "Project Two",
      category: "Web Application",
      description:
        "Replace this description with details about another application you have developed.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "#",
      demo: "#",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      number: "03",
      title: "Project Three",
      category: "Frontend Development",
      description:
        "Add a short explanation of your third project, its purpose, and the problem it solves.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
      gradient: "from-pink-600 to-purple-600",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 px-5 py-24 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white md:px-10">
      
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        
        <Reveal>
          <div className="mb-16 text-center">
            <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-300">
              My Portfolio
            </span>

            <h1 className="mt-6 text-4xl font-bold md:text-6xl">
              Featured <span className="text-purple-600">Projects.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-gray-500 dark:text-gray-400">
              A selection of projects where I explore ideas, practice my
              skills, and build useful digital experiences.
            </p>
          </div>
        </Reveal>

        
        <Reveal delay={0.1}>
          <div className="mb-8 flex items-center justify-between">
            <p className="font-semibold text-gray-700 dark:text-gray-300">
              Selected Work
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {String(projects.length).padStart(2, "0")} Projects
            </p>
          </div>
        </Reveal>

        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-800">
                
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/20" />

                  <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-white/20" />

                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/30 bg-white/15 text-5xl text-white shadow-2xl backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <FaCode />
                  </div>

                  <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    {project.number}
                  </span>
                </div>

                
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-600">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>

                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  
                  <div className="mt-7 flex items-center gap-5 border-t border-gray-200 pt-5 dark:border-gray-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition hover:text-purple-600"
                    >
                      <FaGithub className="text-lg" />
                      Source Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition hover:text-purple-800"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        
        <Reveal delay={0.2}>
          <div className="mt-24 rounded-3xl border border-gray-200 bg-white p-8 text-center dark:border-gray-800 dark:bg-gray-900 md:p-14">
            <h2 className="text-3xl font-bold">
              Interested in Working Together?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
              I'm always interested in exploring new ideas and opportunities.
              Let's start a conversation.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#471396] px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-purple-700"
            >
              Contact Me
              <FaArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
