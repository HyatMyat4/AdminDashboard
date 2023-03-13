"use client";
import React from "react";
import AdminCreatory from "./AdminCreatory";
import { FaShoppingCart } from "react-icons/fa";
import { AdminSideBarC } from "../../Redux/ActionSlice";
import { useSelector } from "react-redux";
import { HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { AdminSideBarEngin } from "../../Redux/ActionSlice";
import { useEffect , useState } from 'react'
function Adminleft() {
  const dispatch = useDispatch();
  const [Role ,setRole] = useState<any>('');
  useEffect(() => {
    const Role = localStorage.getItem("Role");
    setRole(Role)
  }, [])
  const openclose = useSelector(AdminSideBarC);
  return (
    <>
      <div
        className={`${
          Role === "Admin" || Role === "Manager" || Role === "Manber"
            ? " hidden"
            : "w-full h-full bg-black absolute flexRowCenter justify-center top-0 left-0 z-[9999999]"
        }`}
      >
        <div className=" font-bold text-[30px] flexRowCenter">
          404 <span className="text-[20px] ml-[5px]">Page Not Found!</span>
        </div>
      </div>

      <div
        className={` h-[100vh] ${
          openclose
            ? "w-[280px] absolute z-[9999] animate-slideleft2"
            : "w-[full] hidden 6xl:flex relative"
        }   trasition flex-col items-center bg-white dark:bg-[#191F45]`}
      >
        <div className="w-full h-[80px] font-semibold  flex flex-row items-center justify-center text-orange-500 dark:text-[#ffda85] text-[20px] ">
          <span>ECOMVISION</span>
          <HiXMark
            onClick={() => dispatch(AdminSideBarEngin(false))}
            className={`text-[35px] ${
              openclose ? "" : " hidden"
            } absolute right-0  animate-slowfade2 text-orange-500
            dark:text-[#ffda85] cursor-pointer mr-[10px]  flex  6xl:hidden  `}
          />
        </div>
        <AdminCreatory />
      </div>
    </>
  );
}

export default Adminleft;
