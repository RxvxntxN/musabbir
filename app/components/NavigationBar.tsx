"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ModeToggle from "./ModeToggle";

interface MenuItem {
  label: string;
  href: string;
}

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Hire Me", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-stone-900 backdrop-blur-md pt-3 flex flex-col md:flex-row items-center justify-center">
      <div className="max-w-7xl bg-teal-500 mx-auto px-4 w-full rounded-xl py-3 flex items-center justify-between shadow-2xl relative">
        <Link
          href="/"
          className="font-bold text-lg text-white tracking-wide hover:opacity-90 transition"
        >
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-white font-semibold">
            {menuItems.map((item: MenuItem) => (
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
          
          {/* Mode Toggle for Desktop */}
          <div className="ml-4">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button and Mode Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mode Toggle for Mobile */}
          <div className="">
            <ModeToggle />
          </div>
          
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="text-white p-1 hover:bg-teal-600 rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4 py-4 bg-white/90 backdrop-blur-xs rounded-xl mt-2 shadow-lg text-gray-700 font-semibold w-full mx-auto max-w-7xl">
          {menuItems.map((item: MenuItem) => (
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
};

export default NavigationBar;