import React from "react";
import PromoteStore from "./PromoteStore";
import {
  FaCartPlus,
  FaSearch,
  FaSortAmountUp,
  FaSortAmountDown,
} from "react-icons/fa";
import Add_Promote from "./Add_Promote";
import Delete_Promote from "./Delete_Promote";
import { GET_PromoteProducts } from "../../../Graphql/Queries/PromoteProduct";
import Add_Promote_data from "./Add_Promote_data";
async function AddPromote() {
  const { data } = await GET_PromoteProducts();

  return (
    <div className="w-full h-full ">
      <Add_Promote_data />
      <div className="w-full h-[35vh] 360:h-[14vh] 775:h-[7vh] flexColCenter 775:flexRowCenter justify-center 775:justify-between  ">
        <div className="flexColCenter 360:flexRowCenter justify-center 360:justify-between mb-[10px] 775:mb-0 mt-[10px] 360:mt-0">
          <div className="flexRowCenter bg-gray-200 dark:bg-[#21295c] shadow-lg rounded ml-[15px]  mb-[10px] 360:mb-0  ">
            <input
              type="text"
              placeholder="Search by name..."
              className=" outline-none px-[10px] py-[9px] rounded bg-transparent"
            />
            <div className="p-[5px] pr-[12px]">
              <FaSearch className="text-[17px] hover:scale-110 trasition cursor-pointer " />
            </div>
          </div>
          <div className="mx-[20px] select-none">
            <div
              className="  animate-slowfade shadow-lg  select-none ml-0 360:ml-[13px] 775:ml-0
             p-[8px] rounded-full hover:scale-110 hover:bg-orange-500 mr-[2px]  2lg:mr-[10px] cursor-pointer transition-all
             duration-75 ease-in
             "
            >
              <FaSortAmountUp className="text-[20px]" />
            </div>
          </div>
        </div>
        <div className="flexColCenter 360:flexRowCenter justify-between">
          <Add_Promote />
          <Delete_Promote />
        </div>
      </div>
      <div
        id="scrollnone"
        className="w-full h-[65vh] 360:h-[86vh]  pb-[20px] overflow-y-scroll flexRowCenter justify-center flex-wrap   rounded-[5px]"
      >
        {data ? <PromoteStore data={data} /> : ""}
      </div>
    </div>
  );
}

export default AddPromote;
