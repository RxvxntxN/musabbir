"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Hire Me", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-stone-900 pt-3 top-0 z-50 backdrop-blur-md flex flex-col md:flex-row items-center justify-center relative">
       
      <div className="max-w-7xl bg-teal-500 mx-auto px-4 w-full rounded-xl py-3 flex items-center justify-between shadow-2xl">

        <Link
          href="/"
          className="font-bold text-lg text-white tracking-wide hover:opacity-90 transition"
        >
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-white font-semibold">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative group"
            >
              <span>{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>
        

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        <div className="absolute pr-8 pt-2 right-4 hidden md:flex top-3">
        <ModeToggle />
      </div>
      </div>
      
      <div
        className={`md:hidden w-full mx-auto overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4 py-4 bg-teal-500 rounded-xl mt-2 shadow-lg text-white font-semibold w-full">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:translate-x-2 transition-transform duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
