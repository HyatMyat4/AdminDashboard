"use client";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { teal } from "@mui/material/colors";
import { FaEdit } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";
import {
  Delete_Items_idEngin,
  Delete_Items_idC,
  LoginUserdataC,
} from "../../../Redux/ActionSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
const accent = teal.A700;
type Props = {
  data: All_Users;
};
function UserRow({ data }: Props) {
  const dispatch = useDispatch();
  const deleteid = useSelector(Delete_Items_idC);
  const { userdata } = useSelector(LoginUserdataC);

  const Filternull = data.UserBuyingProduct.filter(
    (data) => data.Price !== null || undefined
  );
  const totalPrice = Filternull.reduce(
    (total, items) => total + Number(items.Price),
    0
  );

  return (
    <div
      key={data.id}
      className={`w-full h-[80px] flexRowCenter ${
        data.Userstatus === "Admin" ? "hidden" : ""
      }  justify-around`}
    >
      <div className="ProductBody w-[110px]   flexRowCenter justify-center  ml-[10px]">
        <Checkbox
          onClick={() => dispatch(Delete_Items_idEngin(data.id))}
          checked={data.id === deleteid}
          sx={{
            color: accent,
            "&.Mui-checked": { color: accent },
            "& .MuiSvgIcon-root": { fontSize: 28 },
          }}
        />
      </div>
      <div className="ProductBody w-[120px]   hidden 670:flex  ">
        <img src={data.userProfile} className="w-[60px] h-auto rounded" />
      </div>
      <div className="ProductBody  hidden 2lg:flex   ">
        <span className="font-bold">{data.name}</span>
      </div>
      <div className="ProductBody w-[250px] text-emerald-500  overflow-hidden  ">
        <div className="w-full flexRowCenter justify-center 6xl:justify-between">
          <span className="font-bold  ">{data.email}</span>
          <MdMarkEmailRead className="text-[22px] ml-[3px] text-orange-500 hidden 6xl:flex  " />
        </div>
      </div>
      <div className="ProductBody w-[150px]   hidden 1xs:flex   ">
        <span
          className={`font-bold 
          ${
            data.Userstatus === "NewUser"
              ? " text-pink-500"
              : data.Userstatus === "Normal User"
              ? " text-teal-400"
              : data.Userstatus === "Member"
              ? " text-cyan-400"
              : data.Userstatus === "TopFan"
              ? "text-red-500"
              : data.Userstatus === "Manber"
              ? "text-purple-500"
              : " text-orange-500"
          }`}
        >
          {data.Userstatus ? data.Userstatus : "----"}
        </span>
      </div>
      <div className="ProductBody  w-[140px] text-emerald-500   hidden 1lg:flex   ">
        <span className="font-bold ">${totalPrice}</span>
      </div>
      <div className="ProductBody w-[170px] hidden lg:flex">
        <div
          className={` flex flex-row items-center   ${
            userdata?.Login?.Userstatus === "Admin" ||
            userdata?.Login?.Userstatus === "Menager"
              ? "hidden"
              : ""
          }    px-[8px] xs:px-[18px] animate-slowfade   
         py-[8px]  bg-emerald-500 rounded font-bold  text-slate-100 hover:scale-110 
         select-none transition-all duration-75 ease-in cursor-pointer `}
        >
          look detail <BiDetail className="text-[20px] ml-[10px] " />
        </div>
        <Link
          href={`Admin/Customers/${data.id}`}
          className={` flex flex-row items-center   ${
            userdata?.Login?.Userstatus === "Admin" ||
            userdata?.Login?.Userstatus === "Menager"
              ? ""
              : "hidden"
          }    px-[8px] xs:px-[18px] animate-slowfade   
         py-[8px]  bg-emerald-500 rounded font-bold  text-slate-100 hover:scale-110 
         select-none transition-all duration-75 ease-in cursor-pointer `}
        >
          Update <BiDetail className="text-[20px] ml-[10px] " />
        </Link>
      </div>
    </div>
  );
}

export default UserRow;
