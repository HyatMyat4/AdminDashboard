"use client";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProductOPenCloseC,
  AddProductOPenCloseENgin,
} from "../../../Redux/ActionSlice";
const AddProductBatton = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(AddProductOPenCloseENgin(true))}
      className="flex flex-row items-center mb-[10px] 360:mb-0 px-[10px] py-[9px] rounded-[5px] mr-[17px]
    bg-emerald-500 shadow-lg text-white ml-[10px] hover:scale-105 cursor-pointer trasition"
    >
      <span className=" font-bold">Add Product</span>
      <FaCartPlus className="text-[20px] ml-[5px]" />
    </div>
  );
};

export default AddProductBatton;
