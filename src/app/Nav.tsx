"use client";

import { useState } from "react";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/MyWork" },
    { name: "Experience", href: "/Experience" },
    { name: "Contact Me", href: "/ContactMe" },
  ];

  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="uppercase text-5xl font-philosopher">
          <span className="text-red-500">AA</span>YU.
        </h1>
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-10">
          {navLinks
            .filter((link) => link.name !== "Contact Me")
            .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all duration-300 font-semibold hover:underline hover:decoration-red-500 hover:underline-offset-8 ${
                  pathname === link.href
                    ? "underline decoration-red-500 underline-offset-8"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
        </div>

        <div className="hidden md:block">
          <Link href="/ContactMe">
            <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 text-sm font-semibold">
              Contact Me
            </button>
          </Link>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RxHamburgerMenu />
        </button>
      </div>
      <div
        className={`md:hidden bg-[#1c1b21] text-white border-y border-red-500 px-[8%] overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="space-y-4 menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`block text-base transition-all duration-300 font-semibold hover:underline hover:decoration-red-500 hover:underline-offset-8 ${
                  pathname === link.href
                    ? "underline decoration-red-500 underline-offset-8"
                    : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
