"use client";
import React from "react";
import PromoteBanner from "./PromoteBanner";
import { useSelector, useDispatch } from "react-redux";
import {
  Delete_Items_idC,
  Delete_Items_idEngin,
  Promote_ProductEngin,
  Promote_ProductC,
} from "../../../Redux/ActionSlice";
import { useEffect } from "react";
type Props = {
  data: any;
};
function PromoteStore({ data }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Promote_ProductEngin(data.PromoteProducts));
  }, [data]);
  const Get_data = useSelector(Promote_ProductC);

  return (
    <div>
      {Get_data
        ? Get_data?.map((Product: FoodProduct) => (
            <PromoteBanner data={Product} />
          ))
        : "loding.."}
    </div>
  );
}

export default PromoteStore;
