import React from "react";
import { Get_All_Order } from "../../../Graphql/Queries/Get_All_Order";
import SearchComponent from "../SearchComponent";
import User_Order_Component from "./User_Order_Component";
import { BsPersonLinesFill } from "react-icons/bs";
async function page() {
  const { data } = await Get_All_Order();
  const Puredata = data.User_Orders.filter((data: any) => data.email !== null);
  console.log(data, "😎");
  return (
    <div className="w-full h-[93vh]">
      <div className="w-full h-[17%] 390:h-[12%] xs:h-[7%] flexColCenter xs:flexRowCenter justify-around xs:justify-between  ">
        <div className="w-[258px] h-auto  ">
          <SearchComponent />
        </div>
        <div className="px-[20px] py-[8px] text-white bg-orange-500 hover:bg-emerald-500 flexRowCenter rounded-[5px] mr-[15px] trasition hover:scale-110 cursor-pointer ">
          <span className="text-[15px]">Complete Order</span>
          <BsPersonLinesFill className=" text-[20px] ml-[5px] " />
        </div>
      </div>
      <div className="w-full h-[83%] 390:h-[88%] xs:h-[93%]">
        <User_Order_Component User_Orders={Puredata} />
      </div>
    </div>
  );
}

export default page;

// stripe listen --forward-to localhost:4000/checkout/WebHook
