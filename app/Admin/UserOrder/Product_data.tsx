import React from "react";
import Image from "next/image";
type Props = {
  data: Order_data;
};
function Product_data({ data }: Props) {
  return (
    <div
      key={data.images.slice(77)}
      className="w-full h-auto flexColCenter md:flexRowCenter justify-between relative p-[10px]"
    >
      <div className=" absolute top-[6px] right-[6px] px-[5px] py-[3px] text-[13px] bg-teal-500 text-white rounded-full">
        x{data.quantity}
      </div>
      <div className="w-[70%] 3lg:w-[30%] h-auto rounded-[5px] overflow-hidden">
        <Image
          alt=""
          src={data.images}
          width={1920}
          height={1080}
          className="w-full h-auto rounded-[5px]"
        />
      </div>
      <div className=" w-[90%] 3lg:w-[70%] h-full flexColCenter justify-between p-[10px]">
        <span className=" font-bold text-orange-500">{data.name}</span>
        <p className="text-[13px]">{data.description}</p>
      </div>
    </div>
  );
}

export default Product_data;
