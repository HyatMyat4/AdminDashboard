import React from "react";
import { FaCartPlus, FaSearch, FaSortAmountUp } from "react-icons/fa";
import UserRowRender from "./UserRowRender";
import { GET_Users } from "../../../Graphql/Queries/Users";
import Delete_Userbtn from "./Delete_Userbtn";
async function page() {
  const { data } = await GET_Users();
  return (
    <div className="w-full h-[93vh] ">
      <div className="w-full h-[20vh] 1xs:h-[14vh] 2lg:h-[7vh] flexColCenter 2lg:flexRowCenter justify-center 2lg:justify-between my-[10px] 2lg:my-0 flexColCenter ">
        <div className=" flexColCenter  1xs:flexRowCenter justify-center 1xs:justify-between mb-[10px] 2lg:mb-0">
          <div className="flexRowCenter bg-gray-200 dark:bg-[#21295c] shadow-lg rounded ml-[15px] ">
            <input
              type="text"
              placeholder="Search by name..."
              className=" outline-none px-[10px] py-[9px] rounded bg-transparent"
            />
            <div className="p-[5px] pr-[12px]">
              <FaSearch className="text-[17px] hover:scale-110 trasition cursor-pointer " />
            </div>
          </div>
          <div className="mx-[20px] select-none mt-[10px] 1xs:mt-0">
            <div
              className="  animate-slowfade shadow-lg  select-none
             p-[8px] rounded-full hover:scale-110 hover:bg-orange-500 mr-[2px]  2lg:mr-[10px] cursor-pointer transition-all
             duration-75 ease-in
             "
            >
              <FaSortAmountUp className="text-[20px]" />
            </div>
          </div>
        </div>
        <Delete_Userbtn />
      </div>
      <div
        id="scrollnone"
        className="w-full  h-[75vh] 1xs:h-[80vh] 2lg:h-[86vh]   pb-[20px] overflow-y-scroll flexRowCenter justify-center flex-wrap   rounded-[5px]"
      >
        <div className="w-[100%] h-[100%] relative ">
          <div className="w-full h-[80px] z-50 flex flex-row sticky top-0 bg-white dark:bg-[#141937] shadow-lg mb-[15px] items-center justify-around ">
            <div className="ProductHeader w-[110px] ml-[10px] ">
              Delete Mark
            </div>
            <div className="ProductHeader w-[120px] hidden 670:flex">
              User Profile
            </div>
            <div className="ProductHeader hidden 2lg:flex ">User Name</div>
            <div className="ProductHeader w-[250px]  ">User Email</div>
            <div className="ProductHeader w-[150px] hidden 1xs:flex ">
              UserStatus
            </div>
            <div className="ProductHeader w-[140px] hidden 1lg:flex">
              TotalBuyingPrice
            </div>
            <div className="ProductHeader w-[170px] hidden lg:flex">
              look Detail
            </div>
          </div>
          <UserRowRender data={data?.Users} />
        </div>
      </div>
    </div>
  );
}

export default page;
