import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { teal } from "@mui/material/colors";
import { FaEdit } from "react-icons/fa";
const accent = teal.A700;

function ProductRowLoding() {
  return (
    <div className="ProductRowBody items-center mt-[15px] z-0  ">
      <div className="ProductBody w-[110px] ml-[10px]">
        <div className="w-full h-[80px] flexRowCenter animate-pulse justify-center z-0  ml-[10px]">
          <Checkbox
            checked={false}
            sx={{
              color: accent,
              "&.Mui-checked": { color: accent },
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />
        </div>
      </div>
      <div className="ProductBody">
        <div className="w-[120px] h-[80px] rounded-[5px] animate-pulse bg-gray-400  overflow-hidden "></div>
      </div>
      <div className="ProductBody ">
        <div className="dark:text-[#ffda85] w-[80%] h-[25px] m-auto animate-pulse bg-gray-400 rounded flexRowCenter justify-center "></div>
      </div>

      <div className="ProductBody w-[120px]  ">
        <div
          className={`w-[100%] h-[25px] bg-gray-400 animate-pulse rounded flexRowCenter justify-center  text-emerald-500  `}
        ></div>
      </div>

      <div className="ProductBody">
        <div className="w-[100%] h-[25px] flexColCenter justify-center text-[15px] animate-pulse bg-gray-400 rounded text-gray-500 "></div>
      </div>

      <div className="ProductBody w-[110px] ">
        <div className="dark:text-[#ffda85] w-[80%] h-[25px] animate-pulse bg-gray-400 rounded flexRowCenter justify-center"></div>
      </div>
      <div className="ProductBody ">
        <div className="dark:text-[#ffda85] w-[80%] h-[25px] animate-pulse bg-gray-400 rounded flexRowCenter justify-center"></div>
      </div>

      <div className="ProductBody w-[150px]">
        <div className="w-full animate-pulse h-[80px] flexRowCenter justify-center">
          <div
            className=" flex flex-row items-center  px-[8px] xs:px-[18px] animate-slowfade   
      py-[8px]  bg-gray-400 rounded  text-slate-100 hover:scale-110 
      select-none transition-all duration-75 ease-in cursor-pointer "
          >
            Edit <FaEdit className="text-[20px] ml-[10px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRowLoding;
