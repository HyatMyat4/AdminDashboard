"use client";
import { categories } from "../../constants";
import { FaShoppingCart, FaDharmachakra } from "react-icons/fa";
import DarkModeButton from "./DarkModeButton";
import Category from "./Category";
import React, { useState } from "react";
import SideBarOpenCLose from "./SideBarOpenCLose";
import Auth from "./Auth";
import jwt_decode from "jwt-decode";
import { LoginUserdataEngin, OrderproductC , OrderOpencloseEngin } from "../../Redux/ActionSlice";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import VerifyComponent from "./VerifyComponent";
import { useEffect , } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const Order = useSelector(OrderproductC);
  const [pathname, setpathname] = useState<string | undefined>("Home");
  const [Verify, setVerify] = useState<boolean>(false);
  const [getmemory, setgetmemory] = useState<any>('');
  const [role, setgrole] = useState<any>('');
  const [count, setcount] = useState<any>(0);




  const notify = (e: string) => {
    setcount(count+1)
    const getmemory = localStorage.getItem("Token");
    const role = localStorage.getItem("Role");    
    setgetmemory(getmemory)
    setgrole(role)  
    if(count > 1){
    toast.error(e);
    }
  };

  

  useEffect(() => {
    const getmemory = localStorage.getItem("Token");
    const role = localStorage.getItem("Role");
  
    setgetmemory(getmemory)
    setgrole(role)     
  }, [])

  useEffect(() => { 
    if (window !== undefined) {
      window.addEventListener("hashchange", () => {
        const pathname = window.location.hash;
        setpathname(pathname);
      });
    }
    
  }, [])





  if (getmemory) {
    const userdata = jwt_decode(getmemory);
    dispatch(LoginUserdataEngin({ userdata }));
  }



  const isActive = pathname?.split("#").pop();

  return (
    <header>
      <Toaster />
      <div
        className={`w-[100%] h-screen  fixed top-0 left-0 right-0 ${
          Verify ? "" : "hidden"
        }   z-[99999] bg-white dark:bg-[#000000] overflow-hidden flexRowCenter items-center`}
      >
        <VerifyComponent setVerify={setVerify} />
      </div>
      <div
        className="w-[100vw] h-[8vh] text-[20px]  select-none  border-b border-[#8080802a] overflow-hidden shadow-md bg-[#FFFFFF] dark:bg-[black]
         flex flex-row items-center justify-between 4se:justify-around fixed top-0 left-0 right-0 z-50  "
      >
        <div className="flexRowCenter">
          <a
            href="#Home"
            className="ml-[20px]  4se:ml-0 animate-slideleft hover:scale-110 transition-all duration-75 cursor-pointer"
          >
            <img
              alt=""
              src="/food.png"
              className="w-[60px] sm:w-[95px] h-auto"
            />
          </a>
          <SideBarOpenCLose />
        </div>
        <div className="flex-row-between select-none  hidden 4se:flex">
          {categories?.map((category) => (
            <Category key={category} category={category} isActive={isActive} />
          ))}
        </div>
        <div className="flex-row-between animate-slideright mr-[4px] sm:mr-[15px]">
          <DarkModeButton />

          <Link
            href="/SuccessPayment"
            className="Header-icon hidden xs:inline group "
          >
            <MdOutlineHistoryToggleOff className="text-[25px] text-sky-500 group-hover:text-slate-200 " />
          </Link>
          {role === "Admin" || role === "Manager" ? (
            <div
              onClick={() => setVerify(true)}
              className="Header-icon group hidden xs:inline"
            >
              <FaDharmachakra className="text-[25px] text-sky-500 group-hover:text-slate-200 " />
            </div>
          ) : (
            <div
              onClick={() => notify("Soorty you are not Admin")}
              className="Header-icon group hidden xs:inline"
            >
              <FaDharmachakra className="text-[25px] text-sky-500 group-hover:text-slate-200 " />
            </div>
          )}

          <div onClick={() => dispatch(OrderOpencloseEngin(true))}>
            <div className="Header-icon relative group">
              <span className=" absolute top-[-4px] right-[-9px] text-[11px] w-[23px] h-[23px] flex flex-roe items-center justify-center text-center text-white bg-emerald-400 hover:bg-teal-400 rounded-full">
                {Order.length}
              </span>
              <FaShoppingCart className="text-[23px] text-sky-400 group-hover:text-slate-200 " />
            </div>
          </div>
          <Auth />
        </div>
      </div>
    </header>
  );
};

export default Header;
