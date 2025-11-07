'use client';

import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin, IoMdMail } from "react-icons/io";

export default function ContactMe() {
  return (
    <section className="min-h-screen bg-neutral-900 px-4 sm:px-8 py-16 text-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Get <span className="text-red-500">In</span> Touch
        </h1>
        <p className="text-neutral-400 max-w-2xl mx-auto mt-3">
          Have a project idea or want to collaborate? Let’s connect and build
          something great together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Side - Contact Info */}
        <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 shadow-lg hover:shadow-red-500/10 transition">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">
            Contact Information
          </h2>
          <div className="space-y-5">
            <div className="flex items-center  gap-4">
              <IoLogoGithub className="text-2xl text-white hover:text-red-500 transition" />
              <a
                href="https://github.com/Aayusha-Mulmi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/Aayusha-Mulmi
              </a>
            </div>

            <div className="flex items-center gap-4">
              <IoLogoLinkedin className="text-2xl text-white hover:text-red-400 transition" />
              <a
                href="https://www.linkedin.com/in/aayusha-mulmi-060a49333/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/aayusha-mulmi
              </a>
            </div>

            <div className="flex items-center gap-4">
              <IoMdMail className="text-2xl text-white hover:text-red-400 transition" />
              <a
                href="mailto:aayumulmi7@gmail.com"
                className="hover:underline"
              >
                aayumulmi7@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaInstagram className="text-2xl text-white hover:text-red-400 transition" />
              <a
                href="https://www.instagram.com/aayu_mulmi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @aayu_mulmi
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          className="bg-neutral-800 border border-neutral-700 rounded-2xl p-8 shadow-lg hover:shadow-red-500/10 transition"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (Form handling to be added)");
          }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-red-500">
            Send a Message
          </h2>

          <div className="flex flex-col gap-5">
            <div>
              <label className="block mb-2 text-sm text-neutral-400">
                Your Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-red-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-neutral-400">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-red-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-neutral-400">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 focus:border-red-500 outline-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
