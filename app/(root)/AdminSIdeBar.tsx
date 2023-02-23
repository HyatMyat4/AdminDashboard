"use client";
import React from "react";
import { FaDharmachakra } from "react-icons/fa";
import { categories } from "../../constants";
import { HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  SideBarOpenCLoseC,
  SideBarOpenCLoseENgin,
} from "../../Redux/ActionSlice";
const AdminSIdeBar = () => {
  const dispatch = useDispatch();
  const openclose = useSelector(SideBarOpenCLoseC);
  const body = document.getElementById("root") as HTMLElement;

  if (body && openclose === true) {
    body.style.height = "100vh";
    body.style.overflow = "hidden";
  } else {
    if (body) {
      body.style.height = "";
      body.style.overflow = "";
    }
  }

  return (
    <div
      className={` absolute  h-[92vh] w-[80%] 1xs:w-[350px] animate-slideleft2  bg-[white] dark:bg-[#000000] z-20 overflow-y-hidden top-[8vh] left-0 
    ${openclose ? " " : "hidden right-[-350px]"}`}
    >
      <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between ">
        <div className="Header-icon group p-[5px] ">
          <FaDharmachakra className="text-[25px] text-sky-500 group-hover:text-slate-200 " />
        </div>
        <div className="p-[2px] dark:bg-orange-500 hover:bg-slate-100 trasition rounded-full shadow-lg cursor-pointer hover:scale-110">
          <HiXMark
            onClick={() => dispatch(SideBarOpenCLoseENgin(false))}
            className="text-[30px]   "
          />
        </div>
      </div>
      {categories.map((categories) => (
        <a
          href={`#${categories}`}
          key={categories}
          onClick={() => dispatch(SideBarOpenCLoseENgin(false))}
          className="siderBarCretory cursor-pointer dark:bg-[black] dark:shadow dark:shadow-[#c4c4c4]  font-bold text-orange-500"
        >
          {categories}
        </a>
      ))}
    </div>
  );
};

export default AdminSIdeBar;
