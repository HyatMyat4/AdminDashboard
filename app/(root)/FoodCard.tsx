"use client";
import { FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import { OrderproductEngin } from "../../Redux/ActionSlice";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

type Props = {
  Productdata: FoodProduct;
};

const FoodCard = ({ Productdata }: Props) => {
  const notify = (e: string) => toast.success(`Success Order ${e}`);
  const dispatch = useDispatch();
  const Min = 1;
  const Max = 5;
  const [rating] = useState(Math.floor(Math.random() * (Max - Min + 1)) + Min);

  const handleAdd = (e: string) => {
    dispatch(OrderproductEngin(Productdata));
    notify(e);
  };

  return (
    <>
      <div className=" absolute top-0 ">
        <Toaster />
      </div>
      <div
        id="cursive"
        key={Productdata.id}
        className="w-[350px] h-[auto] bg-white dark:bg-[#101010] rounded-[5px] hover:scale-110 cursor-pointer 
     transition-all  duration-75 ease-in mt-[30px] mx-[14px] animate-slidedown "
      >
        <div className="w-[95%] h-auto 670:h-[230px] m-auto pt-[7px] rounded overflow-hidden">
          <Image
            alt=""
            src={Productdata.FoodImage}
            width={1920}
            height={1080}
            className="w-full h-full rounded "
          />
        </div>
        <div className="w-[90%] h-auto m-auto flexColCenter justify-center ">
          <div className="flex flex-row text-[gold] text-[18px] my-[5px]">
            {
              // @ts-ignore
              Array(rating).fill().map((i) => (
                  <FaStar />
                ))
            }
          </div>
          <span className=" text-[25px] text-slate-700 font-bold ">
            {Productdata.name}
          </span>
          <span className=" text-gray-500">
            {Productdata.Foodinfo.slice(0, 90)}...
            <span className="text-orange-400 cursor-pointer hover:underline">
              See More
            </span>
          </span>
          <div className="w-full h-auto flexRowCenter justify-around">
            <span className="text-emerald-400 text-[20px]  xs:text-[25px] my-[5px]">
              $ {Productdata.Price}
            </span>
            <div
              onClick={() => handleAdd(Productdata.name)}
              className={`flexRowCenter px-[8px] xs:px-[18px] animate-slowfade select-none
            py-[8px]  rounded  text-slate-100 hover:scale-110 
            ${
              Productdata.CanOrder
                ? "hover:bg-emerald-500 bg-orange-500 "
                : " bg-[#393939] "
            }
            transition-all duration-75 ease-in cursor-pointer my-[15px]  `}
            >
              {Productdata.CanOrder ? "Order Now" : "OutofStock"}{" "}
              <FaShoppingCart className="text-[23px]  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
