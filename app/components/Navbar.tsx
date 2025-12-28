"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0D330E] text-[#f8f8f0] shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-6 md:py-8">
        {/* Logo */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide z-50">
          Share Market
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-lg font-medium">
          <Link href="/" className="hover:text-green-200 transition">
            Home
          </Link>
          <Link href="/courses" className="hover:text-green-200 transition">
            Courses
          </Link>
          <Link href="/contact" className="hover:text-green-200 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0D330E] z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button inside sidebar */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl focus:outline-none"
          >
            ✖
          </button>
        </div>

        <div className="flex flex-col mt-8 space-y-6 px-6">
          <Link
            href="/"
            className="text-2xl font-semibold hover:text-green-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-2xl font-semibold hover:text-green-200"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-semibold hover:text-green-200"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
