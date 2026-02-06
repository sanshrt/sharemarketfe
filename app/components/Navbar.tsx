"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0D330E] text-[#f8f8f0] shadow-lg relative z-50">
      {/* Reduced vertical padding */}
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4 md:py-10 lg:py-12 relative">

  

        {/* Centered Bigger Logo with proper space */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <Image
    src="/logo.jpeg"
    alt="Company Logo"
    width={320}
    height={320}
    className="object-contain
               w-44 h-44
               sm:w-56 sm:h-56
               md:w-64 md:h-64
               lg:w-72 lg:h-72"
  />
</div>




        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12 ml-auto text-xl font-semibold tracking-wide">
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
        <div className="md:hidden ml-auto z-50">
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
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl focus:outline-none"
          >
            ✖
          </button>
        </div>

        <div className="flex flex-col mt-8 space-y-6 px-6">
          <Link href="/" className="text-2xl font-semibold hover:text-green-200" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/courses" className="text-2xl font-semibold hover:text-green-200" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          <Link href="/contact" className="text-2xl font-semibold hover:text-green-200" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
