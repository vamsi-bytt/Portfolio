
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Reveal from "../ReUsable/Reveal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again.",
      });

    } finally {
      setLoading(false);
    }
  };

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

  const inputStyle =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 dark:border-gray-700 dark:bg-gray-800/70 dark:text-white";

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50 px-5 py-20 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white md:px-10">

      
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        <Reveal>
          <div className="mb-14 text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-300">

              <span className="h-2 w-2 rounded-full bg-purple-500" />

              Contact Me
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
              Let's Start a{" "}
              <span className="text-purple-600">
                Conversation.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-gray-500 dark:text-gray-400">
              Have an idea, a project, or an opportunity?
              I'm always open to meaningful conversations.
            </p>

          </div>
        </Reveal>

        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/40 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20 lg:grid-cols-5">

          <Reveal direction="left" className="lg:col-span-2">

            <div className="relative flex h-full min-h-[570px] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#471396] via-purple-800 to-indigo-950 p-8 text-white md:p-10">

              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

              <div className="relative z-10">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
                  Get In Touch
                </p>

                <h2 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
                  Let's build something amazing together.
                </h2>

                <p className="mt-5 leading-relaxed text-purple-100/80">
                  I'm passionate about creating modern web experiences
                  and connecting with people who love technology.
                  Feel free to reach out.
                </p>

                <div className="mt-12 space-y-7">

                  <a
                    href="mailto:vamsi.bytt@gmail.com"
                    className="group flex items-center gap-4"
                  >

                    <div className="rounded-xl bg-white/10 p-3.5 transition group-hover:bg-white/20">
                      <FaEnvelope className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-purple-200">
                        EMAIL ME
                      </p>

                      <p className="mt-1 font-medium">
                        vamsi.bytt@gmail.com
                      </p>
                    </div>

                  </a>

                  <div className="flex items-center gap-4">

                    <div className="rounded-xl bg-white/10 p-3.5">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>

                    <div>
                      <p className="text-xs text-purple-200">
                        LOCATION
                      </p>

                      <p className="mt-1 font-medium">
                        India
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              
              <div className="relative z-10 mt-14">

                <p className="mb-5 text-sm font-semibold text-purple-100">
                  FIND ME ON
                </p>

                <div className="flex gap-3">

                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-purple-700"
                    >
                      {social.icon}
                    </a>
                  ))}

                </div>

                <p className="mt-8 text-xs text-purple-200/70">
                  © {new Date().getFullYear()} Vamsi. All rights reserved.
                </p>

              </div>
            </div>
          </Reveal>

          
          <Reveal
            direction="right"
            delay={0.15}
            className="lg:col-span-3"
          >

            <div className="p-8 md:p-12">

              <div className="mb-9">

                <h2 className="text-2xl font-bold md:text-3xl">
                  Send me a message
                </h2>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  Have something in mind? Fill in the details below.
                </p>

              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

               
                <div className="grid gap-6 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputStyle}
                      autoComplete="name"
                      maxLength={100}
                      required
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputStyle}
                      autoComplete="email"
                      maxLength={254}
                      required
                    />

                  </div>

                </div>

                
                <div>

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className={inputStyle}
                    maxLength={150}
                    required
                  />

                </div>

                
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea..."
                    className={`${inputStyle} resize-none`}
                    maxLength={5000}
                    required
                  />

                </div>

                {status.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl p-4 text-sm font-medium ${
                      status.type === "success"
                        ? "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400"
                        : "bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#471396] px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >

                  {loading ? "Sending..." : "Send Message"}

                  {!loading && (
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}

                </button>

                <p className="text-xs text-gray-400">
                  Your message will be delivered directly to my inbox.
                </p>

              </form>
            </div>
          </Reveal>

        </div>

        <Reveal delay={0.3}>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">

            <span>Have a great idea?</span>

            <span className="font-semibold text-purple-600">
              Let's make it happen.
            </span>

            <FaExternalLinkAlt className="text-purple-600" />

          </div>

        </Reveal>

      </div>
    </section>
  );
}

export default Contact;
