import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8 px-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm sm:text-base">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="text-white font-semibold">Aayusha Mulmi</span> |{" "}
          <span className="text-neutral-500">
            All Rights Reserved © {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </footer>
  );
}
