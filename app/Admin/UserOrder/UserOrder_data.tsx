import React from "react";
import Product_data from "./Product_data";
type Props = {
  data: User_Orders;
};
function UserOrder_data({ data }: Props) {

  return (
    <div
      key={data.id}
      className="w-[98%] h-[800px] shadow-lg 1lg:h-[500px] flexColCenter 1lg:flexRowCenter mt-[15px] bg-gray-200 dark:bg-[#191f48]  justify-center m-auto rounded-[5px] overflow-hidden "
    >
      <div className="w-full 1lg:w-[30%] h-[38%] 1lg:h-full   flexColCenter items-start justify-around   ">
        <div className="w-full h-[11%] flexRowCenter justify-center shadow-lg hidden 1lg:flex bg-slate-200 dark:bg-[#1d2456]">
          <span className="font-bold text-teal-500 text-[18px]">
            User_Adress
          </span>
        </div>
        <div className="w-[100%] h-[100%] 1lg:h-[89%]   flexColCenter items-start justify-between p-[15px] ">
          <span className="">
            {" "}
            <span className="   text-orange-500">Name </span> : {data.name}
          </span>
          <span className="">
            {" "}
            <span className="   text-orange-500">Email </span> : {data.email}
          </span>
          <span className="">
            {" "}
            <span className="   text-orange-500">Phone </span> :{" "}
            {data.phone ? data.phone : "-------------"}
          </span>
          <span className="">
            {" "}
            <span className="   text-orange-500">Country </span> :{" "}
            {data.country}
          </span>
          <span className="">
            {" "}
            <span className="   text-orange-500">City </span> : {data.city}
          </span>
          <span className="">
            {" "}
            <span className="   text-orange-500">Postal_code </span> :{" "}
            {data.postal_code}
          </span>
          <span className="">
            {" "}
            <span className="   text-orange-500">State </span> : {data.state}
          </span>
        </div>
      </div>
      <div className="w-full 1lg:w-[70%] h-[72%] 1lg:h-[100%]   ">
        <div className="w-full h-[11%] flexRowCenter shadow-lg  justify-center hidden 1lg:flex bg-slate-200 dark:bg-[#1d2456]">
          <span className="font-bold text-teal-500 text-[18px]">
            Order Product
          </span>
        </div>
        <div
          id="scrollnone"
          className="w-full h-[100%] 1lg:h-[89%] overflow-y-scroll   "
        >
          {data.Order_data
            ? data.Order_data.map((data) => <Product_data data={data} />)
            : "Not_Found_data"}
        </div>
      </div>
    </div>
  );
}

export default UserOrder_data;
