import React from "react";
import { RiStore3Fill, RiPercentLine, RiPieChartLine } from "react-icons/ri";

const Siderbar = () => {
  return (
    <div
      className="text-white bg-[#1F1D2B] fixed 
  left-0 top-0 w-28 h-full py-4"
    >
      <h1
        className="text-2xl  text-grey-300 uppercase
     font-bold text-center my-5"
      >
        logo
      </h1>
      <ul className="pl-4  bg-stone-900/40">
    
        <li className=" bg-stone-700 p-4 rounded-tl-xl rounded-bl-xl">
          <a
            className=" flex justify-center bg-orange-600 rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
            text-center"
            href="#"
          >
            <RiStore3Fill className="text-2xl "/>
          </a>
        </li>
        <li className=" hover:bg-stone-700  p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a
            className=" flex justify-center  rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
            text-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
            href="#"
          >
            <RiPercentLine className="text-2xl "/>
          </a>
        </li>
        <li className=" hover:bg-stone-700  p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a
            className=" flex justify-center  rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
            text-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
            href="#"
          >
            <RiPieChartLine className="text-2xl "/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Siderbar;
