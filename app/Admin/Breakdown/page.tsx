import React from "react";
import ChartPie from "../ChartPie";

function page() {
  return (
    <div className="w-full h-[93vh] ">
      <div className="w-full h-[7vh] flexRowCenter justify-between  overflow-hidden   pl-[13px]">
        <div className="w-full h-full flexColCenter items-start">
          <span className=" font-bold text-[20px]">Breakdown</span>
          <span className=" font-bold text-[15px] text-gray-500 ">
            Breakdown of Sales By Category
          </span>
        </div>
      </div>
      <div className="w-full h-[86vh]">
        <div className="w-full h-[95%]">
          <ChartPie isDashboard={true} />
        </div>
      </div>
    </div>
  );
}

export default page;
