"use client";
import { motion, AnimatePresence } from "framer-motion";
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

  // This function handles the smooth scrolling using the native browser API
  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close mobile menu after clicking
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-stone-900 backdrop-blur-md pt-3 flex flex-col md:flex-row items-center justify-center">
      <motion.div
        className="max-w-7xl bg-teal-500 mx-auto px-4 w-full rounded-xl py-3 flex items-center justify-between shadow-2xl relative"
        // You can add entrance animations to the nav bar itself here if you want
        // initial={{ y: -100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="font-bold text-lg text-white tracking-wide hover:opacity-90 transition"
        >
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-white font-semibold">
            {menuItems.map((item) => {
              const isAnchorLink = item.href.startsWith("#");

              return isAnchorLink ? (
                <button
                  key={item.label}
                  onClick={() => handleScroll(item.href.substring(1))}
                  // Styled to look exactly like a link
                  className="relative group cursor-pointer bg-transparent border-none text-white font-semibold p-0"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative group"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </div>

          <div className="ml-4">
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <div>
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
      </motion.div>

      {/* Mobile Menu with Framer Motion Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 right-0 md:hidden bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm rounded-xl mt-2 shadow-lg w-full mx-auto max-w-7xl overflow-hidden"
          >
            <div className="flex flex-col gap-3 px-4 py-4 text-gray-700 dark:text-gray-200 font-semibold">
              {menuItems.map((item) => {
                const isAnchorLink = item.href.startsWith("#");

                return isAnchorLink ? (
                  <button
                    key={item.label}
                    onClick={() => handleScroll(item.href.substring(1))}
                    className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-stone-700 transition-colors text-left w-full bg-transparent border-none"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-stone-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavigationBar;