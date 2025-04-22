import "./App.css";
import Front from "./Component/Front";
import Nav from "./Component/Nav";

function App() {
  return (
    <>
      <div
        className="w-full m-h-screen flex-col
       bg-gradient-to-r from-black to-purple-900 "
      >
        <Nav navItems={["Home", "About", "Skills", "Contact"]} />
        <Front />
      </div>
    </>
  );
}

export default App;
