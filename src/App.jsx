import "./App.css";
import Front from "./Component/Front";
import Nav from "./Component/Nav";
import Lottie from "lottie-react";
import animationData from "./Animation/FaceBook.json";
import instagramAnim from "./Animation/Instagram.json";
import GitHub from "./Animation/GitHub.json";
import WhatsApp from "./Animation/WhatsApp.json";
function App() {
  return (
    <>
      <div className="w-full m-h-screen flex-col bg-gradient-to-r from-black to-purple-900 ">
        <Nav navItems={["Home", "About", "Skills", "Contact"]} />
        <Front />
        <Lottie
          className="h-10 w-10 ml-30 mt-[-30px]"
          animationData={animationData}
          loop={true}
        />
        <Lottie
          animationData={instagramAnim}
          loop={true}
          className="h-10 w-10 ml-45 mt-[-40px]"
        />
        <Lottie
          animationData={GitHub}
          loop={true}
          className="h-10 w-10 ml-60 mt-[-40px]"
        />
        <Lottie
          animationData={WhatsApp}
          loop={true}
          className="h-10 w-10 ml-75 mt-[-40px]"
        />
      </div>
    </>
  );
}

export default App;
