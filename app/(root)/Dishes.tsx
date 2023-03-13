"use client";
import FoodCard from "./FoodCard";
import LodingCard from "./LodingCard";
import { ProductdataEngin, ProductdataC } from "../../Redux/ActionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
type Props = {
  data: FoodProducts;
};

const Dishes = ({ data }: Props) => {
  const dispatch = useDispatch();
  const productdata = useSelector(ProductdataC);


  useEffect(() => {
    try {
      if (data) {
        dispatch(ProductdataEngin([...data.FoodProducts]));
      }
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <div>
      <section id="Food" className="w-full h-[auto]0lg:py-[30px] pb-[50px] ">
        <div className="flexColCenter my-[10px] animate-slowfade">
          <span className="text-[18px] font-bold text-orange-500">
            Our Dishes
          </span>
          <span id="cursive" className=" text-[25px]">
            Popular Food
          </span>
        </div>
        <div className=" w-[99%] 2xl:w-[90%] h-full m-auto flex flex-row items-center justify-center flex-wrap ">
          {productdata ? (
            productdata
              .slice(0, 12)
              .map((Productdata: FoodProduct) => (
                <FoodCard Productdata={Productdata} />
              ))
          ) : (
            <LodingCard />
          )}
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Dishes;

/*

        <div className='flex flex-row items-center justify-center my-[30px] animate-slidedown'>
         <div className='px-[18px] py-[6px] bg-emerald-500 rounded-full text-[20px] text-gray-200 shadow-lg
         hover:scale-110  transition-all duration-75 ease-in cursor-pointer
         '>See More...</div>
      </div>

*/
