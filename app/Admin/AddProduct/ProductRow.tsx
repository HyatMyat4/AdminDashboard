"use client";
import React from "react";
import { GoCheck } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import { teal } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import {
  Delete_Items_idEngin,
  Delete_Items_idC,
} from "../../../Redux/ActionSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
const accent = teal.A700;
type Props = {
  Productdata: FoodProduct;
};
function ProductRow({ Productdata }: Props) {
  const dispatch = useDispatch();
  const deleteid = useSelector(Delete_Items_idC);
  const [Mark, setMark] = useState(false);

  return (
    <div key={Productdata.id} className=" ProductRowBody    mt-[15px] z-0  ">
      <div className="ProductBody w-[110px] ml-[10px]">
        <div className="w-full h-[80px] flexRowCenter justify-center z-0  ml-[10px]">
          <Checkbox
            id={Productdata.id}
            checked={deleteid.id === Productdata.id}
            onChange={(e: any) =>
              dispatch(
                Delete_Items_idEngin({
                  id: e.target.id,
                  IMG_SRC: Productdata.FoodImage,
                })
              )
            }
            sx={{
              color: accent,
              "&.Mui-checked": { color: accent },
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />
        </div>
      </div>
      <div className="ProductBody hidden sm:flex">
        <div className="w-[90px] 4se:w-[120px] h-[80px] rounded-[5px]  overflow-hidden ">
          <Image
            alt=""
            src={Productdata.FoodImage}
            width={1920}
            height={1080}
            className="w-full h-auto rounded-[5px]"
          />
        </div>
      </div>
      <div className="ProductBody ">
        <div className="dark:text-[#ffda85] w-full h-[80px] flexRowCenter justify-center text-center ">
          {Productdata.name}
        </div>
      </div>

      <div className="ProductBody w-[120px] hidden 1lg:flex ">
        <div
          className={`w-full h-[80px] flexRowCenter justify-center ${
            Productdata.CanOrder ? "text-emerald-500" : "text-red-500"
          }  `}
        >
          {Productdata.CanOrder ? "True" : "False"}
          {Productdata.CanOrder ? (
            <GoCheck className="text-[20px] ml-[3px] text-orange-500  " />
          ) : (
            <HiXMark className="text-[23px] ml-[2px] font-bold text-orange-500  " />
          )}
        </div>
      </div>

      <div className="ProductBody hidden 2xl:flex ">
        <div className="w-full h-[80px] flexColCenter justify-center text-[15px] text-gray-500 ">
          {Productdata.Foodinfo.slice(0, 20)}...
          <div className="text-[17px] ml-[3px] text-orange-500  cursor-pointer hover:underline ">
            See More
          </div>
        </div>
      </div>
      <div className="ProductBody w-[110px] hidden 4se:flex">
        <div className="dark:text-[#ffda85] w-full h-[80px] flexRowCenter justify-center">
          {Productdata.Outofstock}
        </div>
      </div>
      <div className="ProductBody ">
        <div className="dark:text-[#ffda85] w-full h-[80px] flexRowCenter justify-center">
          ${Productdata.Price}
        </div>
      </div>

      <div className="ProductBody w-[150px]">
        <div className="w-full h-[80px] flexRowCenter justify-center">
          <Link
            href={`/Admin/AddProduct/${Productdata.id}`}
            className=" flex flex-row items-center  px-[8px] xs:px-[18px] animate-slowfade   
     py-[8px] hover:bg-blue-600 bg-orange-500 rounded  text-slate-100 hover:scale-110 
     select-none transition-all duration-75 ease-in cursor-pointer "
          >
            Edit <FaEdit className="text-[20px] ml-[10px] " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductRow;
