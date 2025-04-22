import React from "react";
import Lottie from "lottie-react";
import animationData from "../Animation/FaceBook.json";
import instagramAnim from "../Animation/Instagram.json";
import GitHub from "../Animation/GitHub.json";
import WhatsApp from "../Animation/WhatsApp.json";

export default function Front() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-white p-5 mt-[70px]">
      {/* Text Section */}
      <div className="md:w-1/2 md:ml-[40px]">
        <h2 className="text-5xl mt-6 md:mt-0">
          Hi! I am <br />
          Learning Developer
        </h2>
        <p className="leading-relaxed max-w-xl mt-5 md:ml-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          laudantium fugit dignissimos assumenda, ea neque nesciunt dicta
          recusandae pariatur eum quos accusantium hic laboriosam tempora
          officia quod animi aspernatur velit Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Rem perferendis, animi accusantium,
          saepe repellat magni eius architecto porro odio praesentium quisquam
          quibusdam cupiditate deserunt, earum ab nesciunt illum veritatis
          maiores.
        </p>
        <div className="mt-10 md:ml-3">
          <button className="bg-gray-500 px-4 py-2 mr-5 rounded">
            Hire me
          </button>
          <button className="bg-gray-500 px-4 py-2 rounded">Download CV</button>
        </div>
        <h2 className="mt-8 text-2xl">Follow me on:</h2>
        <div className="mt-9 ml-[-110px]">
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
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-10 md:mt-[-80px] flex justify-center">
        <img
          src="My.png"
          alt="Profile"
          className="w-[300px] md:w-[500px] brightness-110"
        />
      </div>
    </div>
  );
}
