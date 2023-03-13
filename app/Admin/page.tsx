"use client"
import React from "react";
import Adminleft from "./Adminleft";
import RightHeader from "./RightHeader";
import PreFecthing from "./PreFecthing";
import { GET_FoodProducts } from "../../Graphql/Queries/Products";
import { GET_Users } from "../../Graphql/Queries/Users";
import DashboardHeader from "./DashboardHeader";
import DashboardFirstRow from "./DashboardFirstRow";
import DashBoardSecondRow from "./DashBoardSecondRow";
import { useEffect , useState } from "react";
 function HomePage() {
  const [data , setdata] = useState<any>()
  const [userdata , setuserdata] = useState<any>()
  useEffect(() => {
    fetchdata()
  }, [])
  
 const fetchdata = async () => {
  const { data } = await GET_FoodProducts();
  const { data: userdata } = await GET_Users();
  setdata(data)
  setuserdata(userdata)
 }
 
 

  return (
    <div className="dark:bg-[#141937] w-[100%] h-auto overflow-hidden">
      <PreFecthing data={data} />
      <DashboardHeader />
      <div className="w-full h-auto 6xl:h-[86vh] flexColCenter justify-center ">
        <div className="w-full h-[1500px] 775:h-[1000px] 6xl:h-[50%]">
          <DashboardFirstRow data={userdata} />
        </div>
        <div className="w-full h-[1000px] 6xl:h-[50%]">
          <DashBoardSecondRow data={data?.FoodProducts} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
