import React from "react";
import { FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
function LodingCard() {
  return (
    <div
      id="cursive"
      className="w-[350px] h-[450px] bg-white dark:bg-[#101010] rounded-[5px] hover:scale-110 cursor-pointer 
    transition-all  duration-75 ease-in mt-[30px] mx-[14px] animate-slidedown "
    >
      <div className="w-[95%] h-[228px] m-auto pt-[7px] rounded overflow-hidden">
        <div className="w-full h-full rounded bg-[#cfcfcf] dark:bg-[#393939] animate-pulse " />
      </div>
      <div className="w-[90%] h-auto m-auto flexColCenter justify-center ">
        <div className="flex flex-row text-[#cfcfcf] dark:text-[#393939] text-[18px] my-[5px] animate-pulse">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <span className="w-[50%] h-[15px] bg-[#cfcfcf]  dark:bg-[#393939] animate-pulse  rounded-full m-auto "></span>
        <span className="w-[100%] h-[15px] bg-[#cfcfcf]  dark:bg-[#393939]  animate-pulse rounded-full m-auto mt-[15px] "></span>
        <span className="w-[100%] h-[15px] bg-[#cfcfcf]  dark:bg-[#393939]  animate-pulse rounded-full m-auto mt-[15px] "></span>
        <span className="w-[80%] h-[15px] bg-[#cfcfcf]  dark:bg-[#393939]  animate-pulse rounded-full  mt-[15px] "></span>
        <div className="w-full h-auto flexRowCenter justify-around">
          <span className=" text-[#cfcfcf]  dark:text-[#393939] text-[20px]  xs:text-[25px] my-[5px] animate-pulse">
            $ 00.00
          </span>
          <div
            className="flexRowCenter px-[8px] xs:px-[18px] animate-slowfade  animate-pulse   py-[8px] bg-[#cfcfcf]  dark:bg-[#393939]  rounded-[5px]  text-slate-100 hover:scale-110 
        transition-all duration-75 ease-in cursor-pointer my-[15px] "
          >
            Order Now <FaShoppingCart className="text-[23px]  " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LodingCard;
