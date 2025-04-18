import React from "react";

export default function nav(props) {
  return (
    <nav className="w-full px-8 py-4  text-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Logo</h1>

      <ul className="flex gap-6">
        {props.navItems.map((item) => (
          <li className="hover:text-purple-300 cursor-pointer">{item}</li>
        ))}
      </ul>

      <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </nav>
  );
}
