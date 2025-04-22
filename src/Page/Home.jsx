import React from "react";
import Stars from "../Component/stars";
import Nav from "../Component/Nav";
import Front from "../Component/Front";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative w-full min-h-screen bg-gradient-to-r from-black to-purple-900 overflow-hidden">
          <Stars />
          <Nav navItems={["Home", "About", "Skills", "Contact"]} />
          <Front />
        </div>
      </div>
    </>
  );
}
