import "./App.css";
import Front from "./Component/Front";
import Nav from "./Component/Nav";
import Stars from "./Component/stars"; // Import the star component

function App() {
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

export default App;
