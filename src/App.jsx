import "./App.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Skills from "./Page/Skills";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Import the star component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
