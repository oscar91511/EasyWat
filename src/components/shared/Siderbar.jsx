import React from "react";
import { RiStore3Fill } from "react-icons/ri";

const Siderbar = () => {
  return (
    <div
      className="text-white bg-[#1F1D2B] fixed 
  left-0 top-0 w-28 h-full"
    >
      <h1
        className="text-2xl  text-grey-300 uppercase
     font-bold text-center my-5"
      >
        logo
      </h1>
      <ul className="pl-4 bg-stone-900/40">
        <li className=" bg-stone-600/40 p-4 rounded-tl-xl rounded-bl-xl">
          <a
            className="bg-red-400 rounded-tl-xl rounded-bl-xl block p-4 box-content text-3xl
             text-center"
            href="a"
          >
            <RiStore3Fill />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Siderbar;
