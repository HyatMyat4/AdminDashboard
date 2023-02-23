"use client";
import React from "react";
import OverviewChart from "../OverviewChart";
import DailyChart from "../Daily/DailyChart";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
function page() {
  const [view, setView] = useState("units");
  return (
    <div className="w-full h-[93vh] ">
      <div className="w-full h-[7vh] flexRowCenter justify-between  overflow-hidden   pl-[13px]">
        <div className="w-full h-full flexColCenter items-start">
          <span className=" font-bold text-[20px]">OVERVIEW</span>
          <span className=" font-bold text-[15px] text-gray-500 ">
            Overview of general revenue and profit
          </span>
        </div>
        <div className="  rounded-[5px] mr-[50px] bg-[#dadfe5] dark:bg-[#222a5e]  z-40  ">
          <Select
            value={view}
            label="View"
            className="dark:text-white"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </div>
      </div>
      <div className="w-full h-[86vh]">
        <div className="w-full h-[95%]">
          <OverviewChart view={view} isDashboard={true} />
        </div>
      </div>
    </div>
  );
}

export default page;
