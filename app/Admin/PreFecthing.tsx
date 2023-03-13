"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductdataC, ProductdataEngin } from "../../Redux/ActionSlice";
import { useEffect } from "react";
type Props = {
  data: FoodProducts;
};
function PreFecthing({ data }: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(ProductdataEngin([...data.FoodProducts]));
    } catch (err) {
      console.warn(err);
    }
  }, [data]);

  return <div></div>;
}

export default PreFecthing;
