"use client";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Experience", href: "/Experience" },
    { name: "Portfolio", href: "/Portfolio" },
    { name: "Contacts", href: "/Contacts" },
  ];

  return (
    <nav>
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-5xl p-5 font-philosopher">
          <span className="text-red-500">AA</span>YU.
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 mr-12 justify-end">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-all duration-300 font-semibold hover:underline hover:decoration-red-500 hover:underline-offset-8 ${
                pathname === link.href ? "underline decoration-red-500 underline-offset-8" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl mr-12"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden bg-[#1c1b21] text-white border-y border-red-500 px-[8%] overflow-hidden transition-all duration-500 ${
          isMenuOpen ? "max-h-96 py-5 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <ul className="space-y-4 menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`block text-base relative transition-all duration-300 font-semibold hover:underline hover:decoration-red-500 hover:underline-offset-8 ${
                  pathname === link.href ? "underline decoration-red-500 underline-offset-8" : ""
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
