import React from "react";
import { MdEmail } from "react-icons/md";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FcSalesPerformance } from "react-icons/fc";
type Props = {
  data: any;
};
function AdminBox({ data }: Props) {
  return (
    <div className="w-[99%] 6xl:w-[35%] h-[auto] lg:h-[25%] 6xl:h-full flexColCenter lg:flexRowCenter 6xl:flexColCenter justify-center p-0  6xl:pl-[5px] m-auto mb-[10px] lg:mb-0">
      <div className="w-[100%] h-[100%] 6xl:h-[46%] flexColCenter 775:flexRowCenter justify-center  mb-[10px] ">
        <div className="w-[96%] 775:w-[48%] h-[100%] flexColCenter justify-between m-auto overflow-hidden   ">
          <div className="w-[100%]  h-[100%] flexColCenter justify-between  bg-gray-200 dark:bg-[#191f48] m-auto rounded-[7px] mb-[20px] 775:mb-0 ">
            <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between">
              <span className=" font-bold">Total Customers</span>
              <MdEmail className="text-[22px] ml-[3px] text-orange-500  " />
            </div>
            <div
              id="cursive"
              className="w-[90%] h-[60px] text-[20px] flexRowCenter   text-start m-auto"
            >
              {data?.Users?.length}
            </div>
            <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between">
              <span className=" font-bold">+17%</span>
              <span className=" text-gray-700 font-bold dark:text-gray-300  text-[13px] ">
                since last month
              </span>
            </div>
          </div>
        </div>
        <div className="w-[96%] 775:w-[48%] h-[100%] flexColCenter justify-between m-auto overflow-hidden  ">
          <div className="w-[100%] h-[100%] flexColCenter  bg-gray-200 dark:bg-[#191f48] m-auto rounded-[7px] ">
            <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between">
              <span className=" font-bold">Sales Today</span>
              <FaMoneyBillAlt className="text-[22px] ml-[3px]  text-emerald-500  " />
            </div>
            <div
              id="cursive"
              className="w-[90%] h-[60px] text-[20px] flexRowCenter   text-start m-auto"
            >
              1285
            </div>
            <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between">
              <span className=" font-bold">+24%</span>
              <span className=" text-gray-700 font-bold dark:text-gray-300 text-[13px] ">
                since last month
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] 6xl:h-[46%] flexColCenter 775:flexRowCenter justify-between mb-[10px] 6xl:mb-0    ">
        <div className="w-[96%] 775:w-[48%] h-[100%] flexColCenter justify-between m-auto overflow-hidden ">
          <div className="w-[100%] h-[100%] flexColCenter  bg-gray-200 dark:bg-[#191f48] m-auto rounded-[7px] mb-[20px] 775:mb-0 ">
            <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between">
              <span className=" font-bold">Monthly Sales</span>
              <GiMoneyStack className="text-[22px] ml-[3px] text-emerald-600   " />
            </div>
            <div
              id="cursive"
              className="w-[90%] h-[60px] text-[20px] flexRowCenter   text-start m-auto"
            >
              9285
            </div>
            <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between">
              <span className=" font-bold">+12%</span>
              <span className=" text-gray-700 font-bold dark:text-gray-300 text-[13px] ">
                since last month
              </span>
            </div>
          </div>
        </div>
        <div className="w-[96%] 775:w-[48%] h-[100%] flexColCenter justify-between m-auto overflow-hidden ">
          <div className="w-[100%] h-[100%] flexColCenter  bg-gray-200 dark:bg-[#191f48] m-auto rounded-[7px] ">
            <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between">
              <span className=" font-bold">Yearly Sales</span>
              <FcSalesPerformance className="text-[22px] ml-[3px] text-orange-500  " />
            </div>
            <div
              id="cursive"
              className="w-[90%] h-[60px] text-[20px] flexRowCenter   text-start m-auto"
            >
              64825
            </div>
            <div className="w-[90%] h-[60px] m-auto flexRowCenter justify-between">
              <span className=" font-bold">+2%</span>
              <span className=" text-gray-700 font-bold dark:text-gray-300 text-[13px] ">
                since last month
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBox;
