"use client";
import React from "react";
import ProductRow from "./ProductRow";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ProductdataC, ProductdataEngin } from "../../../Redux/ActionSlice";
import ProductRowLoding from "./ProductRowLoding";

type Props = {
  data: FoodProducts;
};

function ProductRowRender({ data }: Props) {
  const dispatch = useDispatch();
  const fakedata = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    dispatch(ProductdataEngin([...data.FoodProducts]));
  }, []);

  const productdata = useSelector(ProductdataC);

  return (
    <div className="pb-[50px] ">
      {productdata.length
        ? productdata.map((Productdata: FoodProduct) => (
            <ProductRow Productdata={Productdata} />
          ))
        : fakedata.map((data) => <ProductRowLoding />)}
    </div>
  );
}

export default ProductRowRender;
