import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        {" "}
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12 ">
        <img
          src={assets.about_image}
          alt=""
          className="w-full md:max-w-[360px]"
        />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            finibus quam dui, interdum suscipit erat ultrices sed. Praesent
            metus augue, facilisis vitae dolor non, dictum consequat tortor.{" "}
          </p>
          <p>
            Donec tempus, nisl vitae lobortis porttitor, enim magna commodo
            dolor, eu sagittis neque mi non nibh. Sed fringilla ipsum ac tortor
            accumsan porttitor. Sed at diam vitae magna suscipit faucibus. Nunc
            vestibulum eros vitae ex tincidunt, in varius ante bibendum. Morbi
            sed gravida tellus. Sed varius non ligula nec condimentum. Fusce in
            dignissim mauris. Nunc pulvinar a libero ut ultrices.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Donec eleifend orci nec massa faucibus, vel vulputate erat sagittis.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. In non vestibulum risus, vitae iaculis
            neque. Nullam facilisis est non scelerisque tristique. Duis interdum
            est nec metus malesuada consectetur. Suspendisse ac arcu odio.
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold "> CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>
            freestar Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean finibus quam dui, interdum suscipit erat ultrices sed.{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>
            freestar Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean finibus quam dui, interdum suscipit erat ultrices sed.{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b> Personalization:</b>
          <p>
            freestar Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean finibus quam dui, interdum suscipit erat ultrices sed.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
