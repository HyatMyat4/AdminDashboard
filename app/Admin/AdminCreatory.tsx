"use client";
import React from "react";
import { IoHomeOutline, IoTodayOutline, IoFastFood } from "react-icons/io5";
import { TfiAngleRight } from "react-icons/tfi";
import {
  FaShoppingCart,
  FaUsers,
  FaStackOverflow,
  FaCartPlus,
  FaChartPie,
} from "react-icons/fa";
import { HiCalendarDays } from "react-icons/hi2";
import { MdAdminPanelSettings } from "react-icons/md";
import { usePathname } from "next/navigation";
import { JellyTriangle } from "@uiball/loaders";
import { LeapFrog } from "@uiball/loaders";
import toast, { Toaster } from "react-hot-toast";
import { AdminSideBarEngin } from "../../Redux/ActionSlice";
import { useDispatch } from "react-redux";

import Link from "next/link";

const AdminCreatory = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const notify = (e: string) => {
    toast.success(e);
    dispatch(AdminSideBarEngin(false));
  };

  return (
    <>
      <Toaster />
      <Link
        onClick={() => notify("Dashboard")}
        className="AdminCreatoryContainer"
        href="/Admin"
      >
        <div className="AdminCreatory my-[10px] ">
          <IoHomeOutline className="text-[20px]" />
          <span className="font-bold">Dashboard</span>
          {pathname === "/Admin" ? (
            <LeapFrog size={40} speed={2.5} color="#F97316" />
          ) : (
            <TfiAngleRight className="text-[25px] " />
          )}
        </div>
      </Link>
      <Link
        onClick={() => notify("User Order")}
        className="AdminCreatoryContainer"
        href="/Admin/UserOrder"
      >
        <div className="AdminCreatory my-[10px] ">
          <FaShoppingCart className="text-[20px]" />
          <span className="font-bold">User Order </span>
          {pathname === "/Products" ? (
            <LeapFrog size={40} speed={2.5} color="#F97316" />
          ) : (
            <TfiAngleRight className="text-[25px] " />
          )}
        </div>
      </Link>
      <Link
        onClick={() => notify("Add Products")}
        className="AdminCreatoryContainer"
        href="/Admin/AddProduct"
      >
        <div className="AdminCreatory my-[10px] ">
          <FaCartPlus className="text-[20px]" />
          <span className="font-bold">Add Products</span>
          {pathname === "/Admin/AddProduct" ? (
            <LeapFrog size={40} speed={2.5} color="#F97316" />
          ) : (
            <TfiAngleRight className="text-[25px] " />
          )}
        </div>
      </Link>
      <Link
        onClick={() => notify("Add Promote")}
        className="AdminCreatoryContainer"
        href="/Admin/AddPromote"
      >
        <div className=" AdminCreatoryContainer">
          <div className="AdminCreatory my-[10px] ">
            <IoFastFood className="text-[20px]" />
            <span className="font-bold">Add Promote </span>
            {pathname === "/Admin/AddPromote" ? (
              <LeapFrog size={40} speed={2.5} color="#F97316" />
            ) : (
              <TfiAngleRight className="text-[25px] " />
            )}
          </div>
        </div>
      </Link>
      <Link
        onClick={() => notify("Customers")}
        className=" AdminCreatoryContainer"
        href={"/Admin/Customers"}
      >
        <div className="AdminCreatory my-[10px] ">
          <FaUsers className="text-[20px]" />
          <span className="font-bold">Customers</span>
          {pathname === "/Admin/Customers" ? (
            <LeapFrog size={40} speed={2.5} color="#F97316" />
          ) : (
            <TfiAngleRight className="text-[25px] " />
          )}
        </div>
      </Link>

      <Link
        onClick={() => notify("Overview")}
        className="AdminCreatoryContainer"
        href="/Admin/OverView"
      >
        <div className="AdminCreatory my-[10px] ">
          <FaStackOverflow className="text-[20px]" />
          <span className="font-bold">Overview</span>
          <TfiAngleRight className="text-[25px]" />
        </div>
      </Link>
      <Link
        onClick={() => notify("Daily")}
        className="AdminCreatoryContainer"
        href="/Admin/Daily"
      >
        <div className="AdminCreatory my-[10px] ">
          <IoTodayOutline className="text-[20px]" />
          <span className="font-bold">Daily</span>
          <TfiAngleRight className="text-[25px]" />
        </div>
      </Link>
      <Link
        onClick={() => notify("Monthly")}
        className="AdminCreatoryContainer"
        href="/Admin/Monthly"
      >
        <div className="AdminCreatory my-[10px] ">
          <HiCalendarDays className="text-[20px]" />
          <span className="font-bold">Monthly</span>
          <TfiAngleRight className="text-[25px]" />
        </div>
      </Link>
      <Link
        onClick={() => notify("Breakdown")}
        className="AdminCreatoryContainer"
        href="/Admin/Breakdown"
      >
        <div className="AdminCreatory my-[10px] ">
          <FaChartPie className="text-[20px]" />
          <span className="font-bold">Breakdown</span>
          <TfiAngleRight className="text-[25px]" />
        </div>
      </Link>
      <div className=" AdminCreatoryContainer">
        <div className="AdminCreatory my-[10px] ">
          <MdAdminPanelSettings className="text-[20px]" />
          <span className="font-bold">Admin</span>
          <TfiAngleRight className="text-[25px]" />
        </div>
      </div>
    </>
  );
};

export default AdminCreatory;
/*
"Dashboard",
"Products",
"Customers",
"Overview",
"Daily",
"Monthly",
"Breakdown",
"Admin"
*/
