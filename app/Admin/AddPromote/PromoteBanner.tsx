"use client";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import React from "react";
import { FaEdit, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { GoCheck } from "react-icons/go";
import { HiXMark } from "react-icons/hi2";
import { teal } from "@mui/material/colors";
const accent = teal.A700;
import { useSelector, useDispatch } from "react-redux";
import {
  Delete_Items_idC,
  Delete_Items_idEngin,
} from "../../../Redux/ActionSlice";

type Props = {
  data: FoodProduct;
};
function PromoteBanner({ data }: Props) {
  const dispatch = useDispatch();
  const deleteid = useSelector(Delete_Items_idC);
  return (
    <div
      key={data.id}
      className="w-[98%]  h-[auto] relative  m-auto rounded-[10px] dark:bg-[black] overflow-hidden shadow-lg mt-[15px] "
    >
      <Checkbox
        id={data.id}
        checked={deleteid.id === data.id}
        onClick={() =>
          dispatch(
            Delete_Items_idEngin({ id: data.id, IMG_SRC: data.FoodImage })
          )
        }
        sx={{
          color: accent,
          "&.Mui-checked": { color: accent },
          "& .MuiSvgIcon-root": { fontSize: 32 },
        }}
        className="m-[10px] absolute top-0 left-0"
      />
      <div className="w-[80%] h-full m-auto flexColCenter 0lg:flexRowCenter justify-around dark:bg-[black]  ">
        <div className="flex flex-col items-center 0lg:items-start justify-start p-[15px] 3lg:p-0 3lg:w-[70%] 0lg:w-[40%] mt-0 0lg:mt-[50px] ml-[10px]">
          <div className="flexRowCenter animate-slideleft mb-[15px]">
            <span className="text-[25px]  font-bold text-orange-500 ">
              {data.CanOrder ? "In Stock" : "Out of Stock"}
            </span>
            <span>
              {data.CanOrder ? (
                <GoCheck className="text-[20px] ml-[3px] text-emerald-500   " />
              ) : (
                <HiXMark className="text-[25px] ml-[2px] font-bold text-red-500  " />
              )}
            </span>
          </div>

          <span
            id="cursive"
            className="text-[40px] font-bold text-slate-800 animate-slideleft2 mb-[18px]"
          >
            {data.name}
          </span>

          <span
            id="cursive"
            className=" text-left text-gray-500 animate-slideleft3 "
          >
            {data.Foodinfo.slice(0, 280)}...
          </span>
          <div className=" flexRowCenter mt-[10px] animate-slideleft3">
            <span className=" text-[20px]   font-bold text-[gold]  flexRowCenter">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <span className="ml-[20px]">
              Popular : <span className="text-orange-500">{data.Popular}</span>
            </span>
          </div>

          <span className="text-[30px] mt-[10px] text-emerald-400 animate-slideright3  ">
            $ <span>30</span>
          </span>
          <Link
            href={`/Admin/AddPromote/${data.id}`}
            className="flexRowCenter px-[14px] animate-slideleft4   py-[8px] bg-orange-500 rounded font-bold  text-slate-100 hover:scale-110 
         transition-all duration-75 ease-in cursor-pointer my-[15px] "
          >
            Edit <FaEdit className="text-[23px] ml-[10px] " />
          </Link>
        </div>
        <div className="w-[25%] animate-slideright2 z-50  hidden 0lg:inline">
          <Image
            alt=""
            src={data.FoodImage}
            width={1920}
            height={1080}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default PromoteBanner;
