"use client";
import React from "react";
import { FaCocktail } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  Delete_Items_idC,
  Delete_PromoteProductEngin,
} from "../../../Redux/ActionSlice";
import { Delete_Promote_Product } from "../../../Graphql/Mutations/Detete_Promote_Product";
import { Delete_Img } from "../../../Graphql/Mutations/DeleteImg";
import toast, { Toaster } from "react-hot-toast";

function Delete_Promote() {
  const dispatch = useDispatch();
  const items = useSelector(Delete_Items_idC);
  const id = items.id;
  const notify = () => toast.success("Delete Product Success");
  const notifyEarr = (e: any) => toast.error(e.toString());

  const handleDelete = async () => {
    try {
      const back_id = await Delete_Promote_Product(id);
      dispatch(Delete_PromoteProductEngin(id));
      Delete_Img(items.IMG_SRC);
      if (back_id.data) notify();
    } catch (err) {
      if (!id) {
        notifyEarr("Required choose mark");
      } else {
        notifyEarr(err);
      }

      console.warn(err);
    }
  };

  return (
    <>
      <Toaster />
      <div
        onClick={handleDelete}
        className="flex flex-row select-none text-white items-center px-[12px] py-[9px] rounded-[5px] mr-[17px]
    bg-red-500 shadow-lg ml-[10px] hover:scale-105 cursor-pointer trasition"
      >
        <span className=" font-bold">Delete Promote</span>
        <FaCocktail className="text-[20px] ml-[5px]" />
      </div>
    </>
  );
}

export default Delete_Promote;
