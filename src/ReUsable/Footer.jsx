
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/vamsi-bytt",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/vamsi-bytt",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/vamsim07",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-700 transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          <div>
            <Link
              to="/"
              className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Vamsi<span className="text-purple-600">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Creating modern digital experiences through creativity,
              technology, and continuous learning.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-lg transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-600 hover:text-white dark:border-gray-800"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm transition hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Let's Connect
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Interested in working together or just want to say hello?
              Feel free to get in touch.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-purple-600 transition hover:gap-4"
            >
              Get In Touch
              <span>→</span>
            </Link>
          </div>
        </div>

       
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-8 text-center dark:border-gray-800 sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Vamsi. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            Made with <FaHeart className="text-purple-600" /> by Vamsi
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600 text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-700"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
