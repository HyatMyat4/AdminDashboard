"use client";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Delete_User } from "../../../Graphql/Mutations/DeleteUser";
import {
  Delete_Items_idEngin,
  Delete_Items_idC,
  Delete_UserEngin,
  LoginUserdataC,
} from "../../../Redux/ActionSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
function Delete_Userbtn() {
  const dispatch = useDispatch();
  const { userdata } = useSelector(LoginUserdataC);
  const DElete_id = useSelector(Delete_Items_idC);
  const roles = userdata?.Login?.Userstatus;
  const notify = () => toast.success("Delete User Success");
  const notify__Earr = () => toast.error("Something is Wroung Please Try Agin");

  const handle_delete = async () => {
    try {
      const success_id = await Delete_User({ id: DElete_id, roles: roles });
      if (success_id) {
        dispatch(Delete_UserEngin(success_id.data.deleteUser.id));
        notify();
      }
    } catch (err) {
      notify__Earr();
      console.warn(err);
    }
  };
  return (
    <div
      onClick={handle_delete}
      className="flex flex-row select-none  text-white items-center px-[14px] py-[9px] rounded-[5px] mr-[17px]
    bg-red-500 shadow-lg ml-[10px] hover:scale-105 cursor-pointer trasition"
    >
      <span className=" font-bold">Delete User</span>
      <FaUserAlt className="text-[18px] ml-[5px]" />
    </div>
  );
}

export default Delete_Userbtn;
