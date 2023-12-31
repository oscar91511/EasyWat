import React from "react";
import {
  RiStore3Fill,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Fill,
  RiLogoutCircleLine,
  RiHome6Line,
} from "react-icons/ri";

const Siderbar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`text-white bg-[#1F1D2B] fixed 
        lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-br-xl rounded-tr-xl
         z-50 transition-all ${showMenu ? "left-0" : "-left-full" } `}
    >
      <div
        className="flex justify-center text-5xl  text-grey-300 uppercase
     font-bold text-center my-5 animate-pulse "
      >
        <RiStore3Fill />
      </div>
      <div>
        <ul className="pl-4 mt-2 bg-stone-900/40">
          <li className=" bg-[#334155]p-4 rounded-tl-xl rounded-bl-xl">
            <a
              className=" flex justify-center bg-orange-600 rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
        text-center"
              href="#"
            >
              <RiHome6Line className="text-2xl " />
            </a>
          </li>
          <li className=" hover:bg-[#334155]  p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className=" flex justify-center  rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
        text-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
              href="#"
            >
              <RiPercentLine className="text-2xl " />
            </a>
          </li>
          <li className=" hover:bg-[#334155]  p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className=" flex justify-center  rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
        text-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
              href="#"
            >
              <RiPieChartLine className="text-2xl " />
            </a>
          </li>
          <li className=" hover:bg-[#334155] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className=" justify-center flex rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
        text-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
              href="#"
            >
              <RiMailLine className="text-2xl " />
            </a>
          </li>
          <li className=" hover:bg-[#334155]  p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className=" flex justify-center  rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
        text-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
              href="#"
            >
              <RiNotification3Line className="text-2xl " />
            </a>
          </li>
          <li className=" hover:bg-[#334155]  p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className=" flex justify-center  rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
        text-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
              href="#"
            >
              <RiSettings4Fill className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4  bg-stone-900/40">
          <li className=" hover:bg-stone-700  p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              className=" flex justify-center  rounded-tl-xl rounded-bl-xl rounded-xl p-4 box-content text-3xl
        text-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
              href="#"
            >
              <RiLogoutCircleLine className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Siderbar;
