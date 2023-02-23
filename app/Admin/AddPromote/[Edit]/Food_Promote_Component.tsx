"use client";
import React from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Update_Promote_FoodProducts } from "../../../../Graphql/Mutations/Update_Promote_Product";
type Pageprops = {
  data: FoodProduct;
  id: string;
};
function Food_Promote_Component({ data, id }: Pageprops) {
  const router = useRouter();
  const [TrueFalse, setTrueFalse] = useState<boolean>();
  const [FoodName, setFoodName] = useState<string>();
  const [FoodInformation, setFoodInformation] = useState<string>();
  const [FoodPrice, setFoodPrice] = useState<string>();
  const [OutOfStock, setOutOfStock] = useState<string>();
  const [url, seturl] = useState<string>();
  const [PassCross, setPassCross] = useState<any>({});

  useEffect(() => {
    setTrueFalse(data.CanOrder);
    setFoodName(data.name);
    setFoodInformation(data.Foodinfo);
    setFoodPrice(data.Price);
    setOutOfStock(data.Outofstock);
    seturl(data.FoodImage);
  }, [data]);

  const Update = async () => {
    const { data } = await Update_Promote_FoodProducts(PassCross);

    if (data) {
      router.push("/Admin/AddPromote/");
    }
  };

  useEffect(() => {
    setPassCross({
      name: FoodName,
      CanOrder: TrueFalse,
      Price: FoodPrice,
      Outofstock: OutOfStock,
      Foodinfo: FoodInformation,
      update_id: id,
      FoodImage: url,
    });
  }, [TrueFalse, FoodName, FoodInformation, FoodPrice, OutOfStock, url]);

  return (
    <div key={id} className="w-full h-full flexRowCenter justify-between">
      <div className="w-[98%]  h-[auto]   m-auto rounded-[10px] dark:bg-[black] overflow-hidden shadow-lg p-[15px] ">
        <div className="w-[80%] h-full m-auto flexColCenter 0lg:flexRowCenter justify-around dark:bg-[black]  ">
          <div className="w-[55%] animate-slideright2 z-50  inline  0lg:hidden mt-[30px]">
            <Image
              alt=""
              src={data.FoodImage}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col items-center 0lg:items-start justify-start p-[15px] 3lg:p-0 w-[100%] 3lg:w-[70%] 0lg:w-[40%] mt-0 0lg:mt-[50px] ml-[10px]">
            <div className=" w-[100%]  flexColCenter pt-[10px]  text-white ">
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 120,
                  outline: "none",
                  margin: 0,
                  marginbottom: 0,
                }}
                className="w-full m-0 text-white "
                size="small"
              >
                <span className="flexRowCenter items-center  justify-start text-[14px]  select-none  ">
                  Can Order💻
                </span>
                <Select
                  displayEmpty
                  value={`${TrueFalse}`}
                  inputProps={{ "aria-label": "Without label" }}
                  className="w-full rounded-[5px] outline-none  bg-[#3B3B3B] text-white  mb-0 "
                >
                  <MenuItem onClick={() => setTrueFalse(true)} value="true">
                    True
                  </MenuItem>
                  <MenuItem onClick={() => setTrueFalse(false)} value="false">
                    False
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="w-[100%] h-auto flexColCenter m-auto items-start pt-[10px]">
              <span className="text-[14px]">Food Name</span>
              <input
                value={FoodName}
                type="text"
                onChange={(e) => setFoodName(e.target.value)}
                className="w-full h-[40px] rounded-[5px]  outline-none px-[10px] py-[4px] "
              />
            </div>
            <div className="w-[100%] h-[200px] flexColCenter m-auto items-start pt-[10px]">
              <span className="text-[14px]">Food Information</span>
              <textarea
                id="scrollnone"
                value={FoodInformation}
                onChange={(e) => setFoodInformation(e.target.value)}
                className="w-full h-full resize-none  rounded-[5px]   px-[15px] py-[10px] outline-none "
              ></textarea>
            </div>
            <div className="w-full h-auto flexColCenter 555:flexRowCenter justify-between ">
              <div className=" w-[100%] 555:w-[50%] h-auto flexColCenter m-auto items-start pt-[10px]">
                <span className="text-[14px]">Food Price</span>
                <input
                  value={FoodPrice}
                  type="text"
                  onChange={(e) => setFoodPrice(e.target.value)}
                  className="w-full h-[40px] rounded-[5px]  outline-none px-[10px] py-[2px] "
                />
              </div>
              <div className=" w-[100%] 555:w-[50%] h-auto flexRowCenter justify-center ml-[5px]">
                <div className="w-[100%] h-auto flexColCenter m-auto items-start pt-[10px] ">
                  <span className="text-[14px]">Out of stock</span>
                  <input
                    value={OutOfStock}
                    type="text"
                    onChange={(e) => setOutOfStock(e.target.value)}
                    className="w-full h-[40px] rounded-[5px]  outline-none px-[10px] py-[2px] "
                  />
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[50px] m-auto mt-[15px]">
              <Button
                id="cursive"
                className="w-[100%] h-[100%] bg-sky-600 disabled:bg-sky-800 font-bold "
                variant="contained"
                size="large"
                disabled={
                  !FoodName &&
                  !FoodInformation &&
                  !FoodPrice &&
                  !OutOfStock &&
                  !url
                }
                onClick={Update}
              >
                Update
              </Button>
            </div>
          </div>
          <div className="w-[35%] animate-slideright2 z-50  hidden 0lg:inline">
            <Image
              alt=""
              src={data.FoodImage}
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food_Promote_Component;
