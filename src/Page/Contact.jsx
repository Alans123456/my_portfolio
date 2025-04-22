import React from "react";
import Nav from "../Component/Nav";

export default function Contact() {
  return (
    // Add return here
    <>
      <div className="relative w-full min-h-screen bg-gradient-to-r from-black to-purple-900 overflow-hidden">
        <Nav navItems={["Home", "About", "Skills", "Contact"]} />
      </div>
    </>
  );
}
