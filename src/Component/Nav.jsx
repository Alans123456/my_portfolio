import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function ResponsiveNav({ navItems }) {
  const [open, setOpen] = useState(false);

  // tailwind helper for active link colour
  const linkClasses = ({ isActive }) =>
    `block px-2 py-1 capitalize hover:text-purple-300 ${
      isActive ? "text-yellow-500" : ""
    }`;

  return (
    <nav className="w-full px-6 py-4 bg-slate-900 text-white shadow-md flex items-center justify-between relative">
      {/* logo */}
      <h1 className="text-xl font-bold">Logo</h1>

      {/* desktop links */}
      <ul className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <li key={item}>
            <NavLink to={`/${item.toLowerCase()}`} className={linkClasses}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded hover:bg-slate-800 focus:outline-none z-10" // lower z‑index than menu
        aria-label="Toggle navigation menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* mobile dropdown */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-slate-900 flex flex-col gap-2 px-6 py-4 md:hidden shadow-lg z-50 relative animate-slide-down">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={linkClasses}
                onClick={() => setOpen(false)} // close menu after click
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

/* ---------------------------------------------------------
Add this Tailwind animation utility once in your globals (e.g., index.css):

@layer utilities {
  .animate-slide-down {
    @apply transition-all duration-300 ease-out transform-gpu translate-y-[-10%] opacity-0;
  }
  .animate-slide-down.active {
    @apply translate-y-0 opacity-100;
  }
}
---------------------------------------------------------- */
