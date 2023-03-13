"use client";
import React from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import {
  SideBarOpenCLoseENgin,
  SideBarOpenCLoseC,
} from "../../Redux/ActionSlice";
import { useState } from "react";
const SideBarOpenCLose = () => { 
  const dispatch = useDispatch();
  const openclose = useSelector(SideBarOpenCLoseC);
  const [topdata, settopdata] = useState<number>(0);

  useEffect(() => {
    if (window !== undefined) {
    window.onscroll = () => {
      let top = window.scrollY;
      settopdata(top);
    };
  }
  }, [])
  


  return (
    <div className="flex-row-between select-none   4se:hidden ml-[10px] sm:ml-[15px] trasition">
      <HiBars3
        onClick={() => dispatch(SideBarOpenCLoseENgin(true))}
        className={` ${
          openclose || topdata !== 0 ? "hidden" : ""
        } animate-slowfade text-[30px] sm:text-[40px] cursor-pointer text-orange-500 animate-slowfade2 trasition `}
      />
    </div>
  );
};

export default SideBarOpenCLose;
