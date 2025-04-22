import { NavLink } from "react-router-dom"; // Correct import
import React from "react";

export default function Nav(props) {
  function linkClasses({ isActive }) {
    return isActive ? "text-yellow-500" : "";
  }
  return (
    <nav className="w-full px-8 py-4 text-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Logo</h1>

      <ul className="flex gap-6">
        {props.navItems.map((item, index) => (
          <NavLink to={`/${item.toLowerCase()}`} className={linkClasses}>
            {" "}
            {/* Dynamically create the path */}
            <li className="hover:text-purple-300 cursor-pointer">{item}</li>
          </NavLink>
        ))}
      </ul>

      {/* <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
        Login
      </button> */}
    </nav>
  );
}
