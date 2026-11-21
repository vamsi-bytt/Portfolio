
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaLaptopCode,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiLinux,
} from "react-icons/si";

import Reveal from "../ReUsable/Reveal";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Technologies used to build modern web interfaces.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: "Comfortable" },
        { name: "CSS3", icon: <FaCss3Alt />, level: "Comfortable" },
        { name: "JavaScript", icon: <FaJs />, level: "Comfortable" },
        { name: "React", icon: <FaReact />, level: "Proficient" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: "Proficient" },
      ],
    },
    {
      title: "Tools & Technologies",
      description: "Tools that support my development workflow.",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: "Comfortable" },
        { name: "GitHub", icon: <FaGithub />, level: "Comfortable" },
        { name: "Vite", icon: <SiVite />, level: "Proficient" },
        { name: "Linux", icon: <SiLinux />, level: "Comfortable" },
      ],
    },
  ];

  const learningAreas = [
    {
      icon: <FaCode />,
      title: "Programming",
      description: "Improving JavaScript fundamentals and problem solving.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend",
      description: "Building responsive applications with React.",
    },
    {
      icon: <FaTools />,
      title: "Development Tools",
      description: "Practicing Git, GitHub, Linux, and development workflows.",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 px-5 py-24 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white md:px-10">
      
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        
        <Reveal>
          <div className="mb-16 text-center">
            <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-300">
              My Expertise
            </span>

            <h1 className="mt-6 text-4xl font-bold md:text-6xl">
              Skills & <span className="text-purple-600">Technologies.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-gray-500 dark:text-gray-400">
              Technologies and tools I use, practice, and explore while
              developing my technical skills.
            </p>
          </div>
        </Reveal>

        
        <div className="grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.15}>
              <div className="h-full rounded-3xl border border-gray-200 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-9">
                <h2 className="text-2xl font-bold">{group.title}</h2>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  {group.description}
                </p>

                <div className="mt-8 space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4 transition hover:border-purple-200 dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-purple-800"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl text-purple-600">
                          {skill.icon}
                        </span>

                        <span className="font-semibold">
                          {skill.name}
                        </span>
                      </div>

                      <span className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-semibold text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        
        <div className="mt-24">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-600">
                My Growth
              </p>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Currently Improving
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">
                I believe learning never stops. These are areas I'm actively
                exploring and practicing.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {learningAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.12}>
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-800">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-2xl text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    {area.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{area.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        
        <Reveal delay={0.2}>
          <div className="mt-24 rounded-3xl bg-gradient-to-r from-[#471396] via-purple-800 to-indigo-900 px-7 py-14 text-center text-white md:px-14">
            <h2 className="text-3xl font-bold md:text-4xl">
              Skills Grow Through Building.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-purple-100/80">
              Explore my projects to see how I apply what I learn.
            </p>

            <Link
              to="/projects"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-semibold text-purple-800 transition hover:-translate-y-1 hover:bg-purple-50"
            >
              Explore Projects
              <FaArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
