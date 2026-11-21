
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaGithub,
  FaLaptopCode,
  FaLinkedin,
  FaRocket,
} from "react-icons/fa";

import Reveal from "../ReUsable/Reveal";

const Home = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-gray-950 sm:py-32">
      
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          <Reveal direction="right">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Welcome to my portfolio
              </span>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
                  Vamsi.
                </span>
                <br />
                I Build Digital
                <br />
                Experiences.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                I'm a passionate developer focused on building modern,
                responsive, and user-friendly web experiences. I enjoy learning
                new technologies and turning ideas into reality through code.
              </p>

              
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
                >
                  View My Work
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="/Vamsi-CV.pdf"
                  download="Vamsi-CV.pdf"
                  className="inline-flex items-center gap-3 rounded-xl border border-purple-500 px-7 py-3.5 font-semibold text-purple-700 transition duration-300 hover:-translate-y-1 hover:bg-purple-50 dark:text-purple-300 dark:hover:bg-purple-500/10"
                >
                  <FaDownload />
                  Get My CV
                </a>
              </div>

              
              <div className="mt-10 flex items-center gap-5">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Follow me:
                </span>

                <a
                  href="https://github.com/vamsi-bytt"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-xl text-gray-600 transition hover:-translate-y-1 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/vamsi-bytt"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-xl text-gray-600 transition hover:-translate-y-1 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Reveal>

          
          <Reveal direction="left" delay={0.2}>
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 blur-2xl" />

              <div className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl shadow-purple-500/10 dark:border-gray-800 dark:bg-gray-900 sm:p-8">
                
                <div className="flex items-center justify-between border-b border-gray-200 pb-5 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>

                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    developer.js
                  </span>
                </div>

                
                <div className="space-y-5 py-8 font-mono text-sm sm:text-base">
                  <p className="text-gray-400">
                    <span className="text-purple-500">const</span>{" "}
                    developer = {"{"}
                  </p>

                  <div className="space-y-4 pl-5">
                    <p className="text-gray-700 dark:text-gray-300">
                      name:{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Vamsi"
                      </span>
                      ,
                    </p>

                    <p className="text-gray-700 dark:text-gray-300">
                      role:{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Web Developer"
                      </span>
                      ,
                    </p>

                    <p className="text-gray-700 dark:text-gray-300">
                      skills: [
                    </p>

                    <div className="space-y-2 pl-5 text-green-600 dark:text-green-400">
                      <p>"React",</p>
                      <p>"JavaScript",</p>
                      <p>"Tailwind CSS",</p>
                      <p>"HTML & CSS"</p>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300">],</p>

                    <p className="text-gray-700 dark:text-gray-300">
                      passion:{" "}
                      <span className="text-green-600 dark:text-green-400">
                        "Building useful things"
                      </span>
                    </p>
                  </div>

                  <p className="text-gray-400">{"};"}</p>

                  <p className="pt-3 text-purple-600 dark:text-purple-400">
                    developer.createSomething();
                  </p>
                </div>

               
                <div className="flex items-center justify-between border-t border-gray-200 pt-5 dark:border-gray-800">
                  <span className="text-xs text-gray-500">
                    Always learning. Always building.
                  </span>
                  <FaCode className="text-xl text-purple-500" />
                </div>
              </div>

              
              <div className="absolute -bottom-7 -left-5 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:-left-10">
                <div className="rounded-xl bg-purple-100 p-3 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400">
                  <FaLaptopCode className="text-xl" />
                </div>

                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    Creative Developer
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Turning ideas into code
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        
        <Reveal delay={0.3}>
          <div className="mt-32 grid gap-6 border-t border-gray-200 pt-12 dark:border-gray-800 sm:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-purple-100 p-4 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400">
                <FaCode className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Clean Code
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Simple and maintainable code
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-indigo-100 p-4 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <FaLaptopCode className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Responsive Design
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Experiences for every screen
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-pink-100 p-4 text-pink-600 dark:bg-pink-500/10 dark:text-pink-400">
                <FaRocket className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Continuous Learning
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Growing with every project
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;
