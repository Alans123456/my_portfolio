import React from "react";

export default function Front() {
  return (
    <>
      <div className="flex justify-between item-center text-white">
        <div>
          <h2 className="text-5xl ml-30 mt-25">
            Hi! I am <br />
            lerning Developer:
          </h2>
          <p className="leading-relaxed max-w-[600px] ml-35 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis laudantium fugit dignissimos assumenda, ea neque
            nesciunt dicta recusandae pariatur eum quos accusantium hic
            laboriosam tempora officia quod animi aspernatur velit. Tenetur
            nulla provident iure numquam! Doloribus velit error adipisci illum
            nam ratione reiciendis? Rerum atque facere qui! Obcaecati, quo
            delectus! Nihil molestiae natus porro. Nam sint quaerat laborum
            assumenda explicabo! Blanditiis magni numquam repellendus rem eos
            illo delectus soluta odio? Ad laboriosam iste ducimus hic repellat
            et harum expedita nostrum ipsum, quisquam vero, consectetur
            laudantium sit sapiente cumque architecto eius.
          </p>
          <button className="bg-gray-500 px-4 py-2 ml-35 mt-10">Hire me</button>
          <button className="bg-gray-500 px-4 py-2 ml-5 mt-10">
            Download CV
          </button>
          <div>
            <h2 className="ml-30 mt-5 text-2xl">Follow me on:</h2>
          </div>
        </div>
        <div>
          <img
            src="src/assets/my.png"
            alt=""
            className="w-[500px]   mr-[100px] mt-10"
          />
        </div>
      </div>
    </>
  );
}
