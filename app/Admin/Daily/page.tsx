"use client";
import React from "react";
import DailyChart from "../Daily/DailyChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
function page() {
  const [startDate, setStartDate] = useState<Date | null>(
    new Date("2021-02-01")
  );
  const [endDate, setEndDate] = useState<Date | null>(new Date("2021-03-01"));

  return (
    <div className="w-full h-[93vh] ">
      <div className="w-full h-[7vh] flexRowCenter  justify-between overflow-hidden   pl-[10px]">
        <div className="flexColCenter items-start">
          <span className=" font-bold text-[20px]">DAILY SALES</span>
          <span className=" font-bold text-[15px] text-gray-500 ">
            Chart of daily sales
          </span>
        </div>
        <div className="flexRowCenter items-start">
          <DatePicker
            className="mr-[10px] outline-none py-[4px] px-[8px] rounded-[5px]  dark:bg-[#21295C]"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <DatePicker
            className="mr-[10px] outline-none py-[4px] px-[8px] rounded-[5px]  dark:bg-[#21295C]"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
      <div className="w-full h-[86vh]">
        <div className="w-full h-[95%]">
          <DailyChart startDate={startDate} endDate={endDate} />
        </div>
      </div>
    </div>
  );
}

export default page;
