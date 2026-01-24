"use client";
import { useState } from "react";
import Link from "next/link";

// Your exact code with minimal TypeScript
export default function NavigationBar() {
  const [open, setOpen] = useState(false); // TypeScript infers boolean

  const menuItems = [ // TypeScript infers {label: string, href: string}[]
    { label: "Solutions", href: "#" },
    { label: "Cases", href: "#" },
    { label: "Services", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Company", href: "#" },
  ];

  return (
    <nav className="border bg-amber-100 w-full">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="#" className="font-bold text-lg">
          Car Garages
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