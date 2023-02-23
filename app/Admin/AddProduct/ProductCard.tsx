import React from "react";
import { FaStar, FaStarHalfAlt, FaEdit } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import Image from "next/image";
type Props = {
  Productdata: FoodProduct;
};

function ProductCard({ Productdata }: Props) {
  return (
    <div
      id="cursive"
      className="w-[260px] group relative h-[330px] bg-white dark:bg-[#101010] rounded-[5px] hover:scale-110 cursor-pointer 
    transition-all  duration-75 ease-in mt-[30px] mx-[14px] animate-slidedown "
    >
      <div className="w-[95%] h-auto m-auto pt-[7px] rounded overflow-hidden">
        <Image alt="" src={Productdata.FoodImage} width={1920} height={1080} />
      </div>
      <div className="w-[90%] h-auto m-auto flexColCenter justify-center ">
        <div className="w-full flexRowCenter  justify-between text-[gold] text-[18px] my-[5px]">
          <div className="flexRowCenter">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>
          <span className=" text-[20px] text-slate-700 font-bold ">
            {Productdata.name}
          </span>
        </div>

        <span className=" text-gray-500 text-[15px]">
          {Productdata.Foodinfo}
          <span className="text-orange-500 cursor-pointer hover:underline">
            See More
          </span>
        </span>
        <div className="w-full  h-auto flexRowCenter justify-around">
          <span className="text-emerald-400 text-[20px]  xs:text-[20px] trasition my-[5px]">
            $ {Productdata.Price}
          </span>
          <div
            className="flex-row items-center  hidden px-[8px] xs:px-[18px] animate-slowfade   
          py-[8px] hover:bg-blue-600 bg-orange-500 rounded  text-slate-100 hover:scale-110 
          group-hover:flex select-none
         transition-all duration-75 ease-in cursor-pointer my-[15px] "
          >
            Edit <FaEdit className="text-[20px] ml-[10px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
