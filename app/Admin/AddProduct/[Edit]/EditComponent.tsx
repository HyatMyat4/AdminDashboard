"use client";
import React from "react";
import Image from "next/image";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { BsFillImageFill } from "react-icons/bs";
import { Update_FoodProducts } from "../../../../Graphql/Mutations/Update_Product";
import { useRouter } from "next/navigation";
type Pageprops = {
  data: FoodProduct;
  Product_id: string;
};
function EditComponent({ data, Product_id }: Pageprops) {
  const router = useRouter();
  const [FoodName, setFoodName] = useState<string>();
  const [FoodInformation, setFoodInformation] = useState<string>();
  const [FoodPrice, setFoodPrice] = useState<string>();
  const [OutOfStock, setOutOfStock] = useState<string>();
  const [TrueFalse, setTrueFalse] = useState<boolean>();
  const [PassCross, setPassCross] = useState<any>({});
  const [url, seturl] = useState<string>();

  useEffect(() => {
    setFoodName(data.name);
    setFoodInformation(data.Foodinfo);
    setFoodPrice(data.Price);
    setOutOfStock(data.Outofstock);
    setTrueFalse(true);
    seturl(data.FoodImage);
  }, [data]);

  const Update = async () => {
    const { data } = await Update_FoodProducts(PassCross);

    if (data) {
      router.push("/Admin/AddProduct/");
    }
  };

  useEffect(() => {
    setPassCross({
      name: FoodName,
      CanOrder: TrueFalse,
      Price: FoodPrice,
      Outofstock: OutOfStock,
      Foodinfo: FoodInformation,
      update_id: Product_id,
      FoodImage: url,
    });
  }, [
    TrueFalse,
    FoodName,
    FoodInformation,
    FoodPrice,
    OutOfStock,
    data,
    Product_id,
  ]);

  return (
    <div
      key={Product_id}
      className="w-full h-[100%] flexColCenter justify-center bg-black 6xl:bg-[#00000000]  "
    >
      <div
        id="scrollnone"
        className=" w-[100%] 694:w-[700px] h-auto flexColCenter  justify-center  bg-black m-auto p-[10px] 450:p-[20px] 6xl:p-[10px] 
      rounded-0 555:rounded-[10px] overflow-hidden overflow-y-scroll "
      >
        <div className="w-[100%] h-[40%] 375:h-[350px] 555:h-[600px] flexColCenter justify-center mx-[10px]  overflow-hidden ">
          <div className="w-[100%] h-[100%]  overflow-hidden rounded-[5px] mb-[5px]   ">
            <Image
              alt=""
              src={data.FoodImage}
              width={1920}
              height={1080}
              className="w-auto h-full  m-auto  rounded-[5px] "
            />
          </div>
        </div>

        <div className="w-[100%] h-[60%]  375:h-[100%]  flexColCenter justify-center rounded p-[10px]">
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
            <div className="w-full 555:w-[49%] h-auto flexRowCenter justify-center ml-[5px]">
              <div className="w-[50%] h-auto flexColCenter m-auto items-start pt-[10px] ">
                <span className="text-[14px]">Out of stock</span>
                <input
                  value={OutOfStock}
                  type="text"
                  onChange={(e) => setOutOfStock(e.target.value)}
                  className="w-full h-[40px] rounded-[5px]  outline-none px-[10px] py-[2px] "
                />
              </div>
              <div className=" w-[50%] flexColCenter pt-[10px] ml-[5px] text-white ">
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
            </div>
          </div>
          <div className="w-[100%] h-[50px] m-auto mt-[15px]">
            <Button
              id="cursive"
              className="w-[100%] h-[100%] bg-sky-600 font-bold "
              variant="contained"
              size="large"
              // disabled={false}
              onClick={Update}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditComponent;
