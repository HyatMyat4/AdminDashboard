"use client";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Delete_Img } from "../../../Graphql/Mutations/DeleteImg";
import { Delete_FoodProducts } from "../../../Graphql/Mutations/DeleteProduct";
import { useEffect , useState } from 'react'
import {
  Delete_Items_idEngin,
  Delete_Items_idC,
  DeleteProductdataEngin,
} from "../../../Redux/ActionSlice";
import toast, { Toaster } from "react-hot-toast";

function DeleteProductBtn() {
  const items = useSelector(Delete_Items_idC);
  const dispatch = useDispatch();
  const [ Role , setRole ] = useState<any>('');
  useEffect(() => {
    const Role = localStorage.getItem("Role");
    setRole(Role)
  }, [])
  const id = items.id;
  const notify = () => toast.success("Delete Product Success");
  const notifyEarr = (e: any) => toast.error(e);
  const handleDelete = async () => {
    try {
      const result = await Delete_FoodProducts({ id: id, roles: Role });
      Delete_Img(items.IMG_SRC);
      dispatch(DeleteProductdataEngin(id));
      notify();
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
        <span className=" font-bold">DeleteProduct</span>
        <FaCartPlus className="text-[20px] ml-[5px]" />
      </div>
    </>
  );
}

export default DeleteProductBtn;
