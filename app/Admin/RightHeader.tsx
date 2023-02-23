"use client";
import React from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import DarkModeButton from "../(root)/DarkModeButton";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginUserdataC,
  LoginUserdataEngin,
  AdminSideBarEngin,
  AdminSideBarC,
} from "../../Redux/ActionSlice";

import jwt_decode from "jwt-decode";
import { useEffect } from "react";
function RightHeader() {
  const getmemory = localStorage.getItem("Token");
  const dispatch = useDispatch();
  const sidebar = useSelector(AdminSideBarC);
  useEffect(() => {
    if (getmemory) {
      const userdata = jwt_decode(getmemory);
      dispatch(LoginUserdataEngin({ userdata }));
    }
  }, []);

  const { userdata } = useSelector(LoginUserdataC);

  const { data } = useSession();
  return (
    <div className="w-full h-[7vh] flexRowCenter justify-between select-none ">
      <div className="flexRowCenter">
        <div className="ml-[10px]">
          {sidebar ? (
            <HiXMark
              onClick={() => dispatch(AdminSideBarEngin(false))}
              className="text-[35px]  animate-slowfade2 text-orange-500 dark:text-[#ffda85] cursor-pointer mr-[10px]"
            />
          ) : (
            <>
              <HiBars3
                onClick={() => dispatch(AdminSideBarEngin(true))}
                className="text-[35px]  flex   6xl:hidden   animate-slowfade2 text-orange-500 dark:text-[#ffda85] cursor-pointer mr-[10px]"
              />
              <HiBars3 className="text-[35px] hidden  6xl:flex  animate-slowfade2 text-orange-500 dark:text-[#ffda85] cursor-pointer mr-[10px]" />
            </>
          )}
        </div>
      </div>
      <div className="flexRowCenter mr-[10px]">
        <div className=" cursor-pointer">
          <DarkModeButton />
        </div>
        <div className="flexRowCenter cursor-pointer bg-gray-300 dark:bg-[#21295c] shadow-lg rounded-[5px] px-[10px] py-[5px]">
          <img
            src={
              data?.user?.image || userdata?.Login
                ? data?.user?.image
                  ? data?.user?.image
                  : userdata?.Login?.userProfile
                : "/user.png"
            }
            className="w-[40px] h-auto rounded-full "
          />
          <div className="flexColCenter items-start justify-start ml-[10px]">
            <div className=" font-bold text-[14px] text-black dark:text-[#ffda85]">
              {data?.user?.name || userdata?.Login
                ? data?.user?.name
                  ? data?.user?.name
                  : userdata?.Login?.name
                : ""}
            </div>
            <div className="text-[12px] font-bold text-gray-500">
              {userdata?.Login?.Userstatus ? userdata?.Login?.Userstatus : ""}
            </div>
          </div>
          <FaCaretDown className="text-[20px] ml-[8px]" />
        </div>
      </div>
    </div>
  );
}

export default RightHeader;
