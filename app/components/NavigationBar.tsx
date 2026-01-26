"use client";
import { useState } from "react";
import Link from "next/link";


export default function NavigationBar() {
  const [open, setOpen] = useState(false); 

  const menuItems = [ 
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "#" },
    { label: "About", href: "#" },
    { label: "Hire Me", href: "#" },
  ];

  return (
    <nav className="border bg-amber-100 w-full">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="#" className="font-bold text-lg">
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}