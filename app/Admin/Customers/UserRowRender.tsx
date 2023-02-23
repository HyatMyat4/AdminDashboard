"use client";
import React from "react";
import UserRow from "./UserRow";
import { All_UserEngin, All_UserEnginC } from "../../../Redux/ActionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
type Props = {
  data: All_Users[];
};
function UserRowRender({ data }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(All_UserEngin(data));
  }, [data]);
  const All__Users = useSelector(All_UserEnginC);

  return (
    <div className="w-full h-auto  flexColCenter ">
      {All__Users?.length
        ? All__Users.map((data: All_Users) => <UserRow data={data} />)
        : ""}
    </div>
  );
}

export default UserRowRender;
