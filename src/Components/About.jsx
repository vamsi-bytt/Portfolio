
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
  FaGraduationCap,
  FaTerminal,
  FaGithub,
  FaReact,
  FaHeart,
} from "react-icons/fa";

import Reveal from "../ReUsable/Reveal";

function About() {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Writing readable, organized, and maintainable code with attention to detail.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      description:
        "Creating responsive websites with modern frontend technologies.",
    },
    {
      icon: <FaLightbulb />,
      title: "Creative Thinking",
      description:
        "Exploring ideas and turning them into useful digital experiences.",
    },
    {
      icon: <FaRocket />,
      title: "Continuous Growth",
      description:
        "Learning new technologies and improving through practical projects.",
    },
  ];

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Linux",
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 px-5 py-24 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white md:px-10">
      
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        
        <Reveal>
          <div className="mb-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-300">
              <FaHeart />
              About Me
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              More Than Code,
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                It's My Passion.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 dark:text-gray-400 md:text-lg">
              Discover who I am, what I love building, and the journey
              that drives me to keep learning and creating.
            </p>
          </div>
        </Reveal>

        
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-purple-600 to-indigo-600 opacity-20 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
                
                <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[#471396] via-purple-700 to-indigo-900">
                  <div className="absolute -left-10 -top-16 h-48 w-48 rounded-full border border-white/10" />
                  <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full border border-white/10" />

                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-4 border-white/30 bg-white/10 text-6xl font-black text-white shadow-xl backdrop-blur-md">
                    V
                  </div>

                  <span className="absolute bottom-5 right-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    Developer in Progress
                  </span>
                </div>

                
                <div className="p-8">
                  <h2 className="text-3xl font-extrabold">
                    Hello, I'm Vamsi.
                  </h2>

                  <p className="mt-2 font-medium text-purple-600 dark:text-purple-400">
                    Web Development Enthusiast
                  </p>

                  <p className="mt-5 leading-relaxed text-gray-600 dark:text-gray-400">
                    I enjoy building websites, exploring technology,
                    solving problems, and transforming ideas into
                    interactive digital experiences.
                  </p>

                  
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                      <FaTerminal className="text-xl text-purple-600 dark:text-purple-400" />
                      <p className="mt-3 text-sm font-bold">My Focus</p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Frontend Development
                      </p>
                    </div>

                    <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                      <FaGraduationCap className="text-xl text-purple-600 dark:text-purple-400" />
                      <p className="mt-3 text-sm font-bold">My Mindset</p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Always Learning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          
          <Reveal direction="right" delay={0.15}>
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                A Little Introduction
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                Building My Skills,
                <span className="text-purple-600 dark:text-purple-400">
                  {" "}One Project at a Time.
                </span>
              </h2>

              <div className="mt-7 space-y-5 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Vamsi, a technology enthusiast with an
                  interest in web development and modern digital
                  experiences.
                </p>

                <p>
                  I enjoy working with HTML, CSS, JavaScript, React,
                  and Tailwind CSS. I like understanding how things
                  work, experimenting with new tools, and building
                  projects that help me improve my skills.
                </p>

                <p>
                  I believe becoming a good developer is a continuous
                  journey. Every project gives me an opportunity to
                  learn something new, solve problems, and improve
                  the way I write code.
                </p>
              </div>

              
              <div className="mt-8">
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Technologies I Work With
                </h3>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 transition hover:-translate-y-1 hover:border-purple-500 dark:border-purple-900/60 dark:bg-purple-950/40 dark:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#471396] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-700"
                >
                  Explore My Work
                  <FaArrowRight />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-3 rounded-xl border border-gray-300 px-6 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-purple-600 dark:border-gray-700 dark:hover:text-purple-400"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        
        <div className="mt-32">
          <Reveal>
            <div className="mb-14 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                What Drives Me
              </span>

              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                My Approach to Development
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-gray-500 dark:text-gray-400">
                The values and mindset behind the way I learn,
                build, and grow as a developer.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="group h-full rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-purple-800">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-2xl text-purple-700 transition duration-300 group-hover:bg-purple-600 group-hover:text-white dark:bg-purple-950/60 dark:text-purple-300">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        
        <Reveal>
          <div className="mt-28 rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900 md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
                  My Journey
                </span>

                <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                  Learning Today.
                  <span className="block text-purple-600 dark:text-purple-400">
                    Building Tomorrow.
                  </span>
                </h2>

                <p className="mt-5 leading-relaxed text-gray-500 dark:text-gray-400">
                  Every line of code is a chance to learn.
                  I'm focused on strengthening my fundamentals,
                  building practical projects, and exploring
                  modern technologies step by step.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    <FaCode />
                  </div>
                  <div>
                    <h3 className="font-bold">Learn the Fundamentals</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Understanding the core concepts of web development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    <FaReact />
                  </div>
                  <div>
                    <h3 className="font-bold">Build Practical Projects</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Applying what I learn through real-world projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                    <FaGithub />
                  </div>
                  <div>
                    <h3 className="font-bold">Share and Improve</h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Documenting my work and improving with every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        
        <Reveal delay={0.15}>
          <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#471396] via-purple-800 to-indigo-900 px-7 py-16 text-center text-white md:px-14">
            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[40px] border-white/5" />

            <div className="relative">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-purple-200">
                Have a Project in Mind?
              </span>

              <h2 className="mt-5 text-3xl font-extrabold md:text-5xl">
                Let's Build Something Great.
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-relaxed text-purple-100/80">
                I'm always interested in connecting, sharing ideas,
                and exploring new opportunities. Let's start a conversation.
              </p>

              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-purple-800 transition duration-300 hover:-translate-y-1 hover:bg-purple-50"
              >
                Let's Talk
                <FaArrowRight />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
