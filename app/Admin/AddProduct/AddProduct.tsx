"use client";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { HiOutlineXMark } from "react-icons/hi2";
import { RiFileEditFill } from "react-icons/ri";
import { AiFillTags } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { BsFillImageFill, BsFillCloudArrowUpFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProductOPenCloseC,
  AddProductOPenCloseENgin,
  AddProductdataEngin,
} from "../../../Redux/ActionSlice";
import { useState, useRef, useEffect } from "react";
import { app, storage } from "../../../FireBaseConfig";
import { uploadBytesResumable, ref, getDownloadURL } from "firebase/storage";
import Button from "@mui/material/Button";
import Image from "next/image";
import { RaceBy } from "@uiball/loaders";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Add_FoodProducts } from "../../../Graphql/Mutations/AddProduct";
import { Delete_FoodProducts } from "../../../Graphql/Mutations/DeleteProduct";
import toast, { Toaster } from "react-hot-toast";

function AddProduct() {
  const imageRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const openclose = useSelector(AddProductOPenCloseC);
  const Role = localStorage.getItem("Role");
  const [image, setiamge] = useState();
  const [url, seturl] = useState("");
  const [uploadProcess, setprocess] = useState();
  const [TrueFalse, setTrueFalse] = React.useState(true);
  const [ProductName, setProductName] = React.useState("");
  const [Productinfo, setProductinfo] = React.useState("");
  const [ProductPrice, setProductPrice] = React.useState("");
  const [OustStock, setOustStock] = React.useState("");

  // @ts-ignore
  const [PassCross, setPassCross] = React.useState<PropsCross>({});
  const notify = () => toast.success("Add Product Success");
  const notifyEarr = () => toast.error("Something is Wroung Please Try Agin");
  const onUpload = async () => {
    if (!url || !ProductName || !Productinfo || !ProductPrice || !OustStock)
      return;
    try {
      const { data } = await Add_FoodProducts(PassCross);
      if (!data.addProduct) return;
      dispatch(AddProductdataEngin([{ ...data.addProduct }]));
      dispatch(AddProductOPenCloseENgin(false));
      seturl("");
      setTrueFalse(true);
      setProductName("");
      setProductinfo("");
      setProductPrice("");
      setOustStock("");
      notify();
    } catch (err) {
      notifyEarr();
    }
  };

  const handleChooseimage = () => {
    imageRef.current?.click();
  };

  const handleimage = (e: any) => {
    if (e.target.files) {
      setiamge(e.target.files[0]);
    }
  };
  const uploadimage = () => {
    if (!image) return;
    // @ts-ignore
    const storageRef = ref(storage, `${uuidv4()}.` + image.type.slice(6));
    // @ts-ignore
    const metadata = { contentType: image.type };
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // @ts-ignore
        setprocess(progress);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          seturl(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    uploadimage();
  }, [setiamge, image]);

  useEffect(() => {
    setPassCross({
      name: ProductName,
      CanOrder: TrueFalse,
      Price: ProductPrice,
      Outofstock: OustStock,
      Foodinfo: Productinfo,
      FoodImage: url,
      roles: Role,
    });
  }, [TrueFalse, ProductName, Productinfo, ProductPrice, OustStock]);

  return (
    <div
      className={`${
        openclose ? "" : "hidden"
      } trasition animate-slowfade3 w-full h-full absolute top-0 left-0 bg-[#15151543] z-[999] flexRowCenter justify-center  `}
    >
      <Toaster />
      <div
        onClick={() => dispatch(AddProductOPenCloseENgin(false))}
        className=" absolute right-[10px] top-[10px] p-[5px] bg-[#ffd677] text-black rounded-full shadow-lg hover:scale-110 trasition "
      >
        <HiOutlineXMark className="text-[30px] cursor-pointer" />
      </div>
      <div className="w-[500px] h-auto pb-[20px] bg-[#151515] flexColCenter rounded-[5px]  ">
        <div className="w-[97%] h-[300px] rounded-[5px] overflow-hidden pt-[8px] flexColCenter justify-center ">
          {url ? (
            <Image
              alt=""
              src={url}
              width={1920}
              height={1080}
              className="w-full h-auto rounded-[5px]  "
            />
          ) : uploadProcess || uploadProcess === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <div className="w-auto h-auto flexRowCenter items-center justify-center mb-[15px]">
                <div
                  id="cursive"
                  className=" text-emerald-500  "
                >{`Upload ${Math.floor(uploadProcess)} % Done `}</div>
                <BsFillCloudArrowUpFill className=" animate-pulse text-yellow-600 text-[30px] ml-[5px] " />
              </div>

              <RaceBy size={90} lineWeight={5} speed={1.4} color="#FF5722" />
            </div>
          ) : (
            <BsFillImageFill
              onClick={handleChooseimage}
              className=" text-emerald-400 text-[45px] hover:text-emerald-300 cursor-pointer"
            />
          )}

          <input
            type="file"
            accept="image/*"
            ref={imageRef}
            onChange={(e) => handleimage(e)}
            className=" absolute hidden bottom-0 right-0 "
          />
        </div>
        <div className="w-[95%] h-auto mx-auto">
          <div className="w-[95%] h-[auto] m-auto mb-[5px] mt-[10px]  ">
            <span className="flexRowCenter items-center text-[#ffd677] font-bold select-none ">
              Product Name <AiFillTags className="ml-[5px]" />
            </span>
            <div className="w-[100%] h-[45px] rounded-[5px] mx-auto  ">
              <input
                type="text"
                value={ProductName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full h-full rounded-[5px] dark:bg-[#ffffff] text-[18px] text-[black] px-[15px] outline-none "
              />
            </div>
          </div>
          <div className="w-[95%] h-[120px] m-auto mb-[28px] ">
            <span className="flexRowCenter items-center text-orange-500 font-bold  select-none">
              Product Imformation <RiFileEditFill className="ml-[5px]" />
            </span>
            <div className="w-[100%] h-[100%] rounded-[5px] mx-auto  ">
              <textarea
                id="scrollnone"
                value={Productinfo}
                onChange={(e) => setProductinfo(e.target.value)}
                className="w-full h-full resize-none 
                             rounded-[5px] dark:bg-[#ffffff]  text-[18px] text-[black] px-[15px] py-[10px] outline-none "
              ></textarea>
            </div>
          </div>
          <div className="w-[95%] h-[auto] m-auto mb-[5px] mt-[4px]  ">
            <span className="flexRowCenter items-center text-emerald-500 font-bold select-none ">
              Product Price ${" "}
            </span>
            <div className="w-[100%] h-[45px] rounded-[5px] mx-auto  ">
              <input
                type="text"
                value={ProductPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="w-full h-full rounded-[5px] dark:bg-[#ffffff]  text-[18px] text-[black] px-[15px] outline-none "
              />
            </div>
          </div>
          <div className="w-[95%] h-auto flexRowCenter justify-center items-end m-auto">
            <div className="w-[110px] h-[auto] mb-[5px] mt-[4px]  ">
              <span className="flexRowCenter items-center justify-center text-[#ffd677] font-bold select-none  ">
                Outofstock🍽
              </span>
              <div className="w-[100%] h-[41px] rounded-[5px] mx-auto mb-[2px]  ">
                <input
                  type="text"
                  value={OustStock}
                  onChange={(e) => setOustStock(e.target.value)}
                  className="w-full h-full rounded-[5px] dark:bg-white  text-[18px] text-[black] px-[15px] outline-none "
                />
              </div>
            </div>
            <div className="flexColCenter">
              <FormControl
                sx={{ m: 1, minWidth: 120, outline: "none" }}
                size="small"
              >
                <span className="flexRowCenter items-center justify-center text-[#ffd677] font-bold select-none  ">
                  Can Order💻
                </span>
                <Select
                  displayEmpty
                  value={TrueFalse}
                  inputProps={{ "aria-label": "Without label" }}
                  className=" rounded-[5px] outline-none  bg-white  "
                >
                  <MenuItem onClick={() => setTrueFalse(true)} value="true">
                    <em>True</em>
                  </MenuItem>
                  <MenuItem onClick={() => setTrueFalse(false)} value="false">
                    False
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mb-[7px]">
              <Button
                id="cursive"
                variant="contained"
                className=" bg-sky-600 font-bold "
                size="large"
              >
                Review
                <FaArrowRight className="ml-[5px]" />
              </Button>
            </div>
          </div>

          <div className="w-[95%] h-[50px] m-auto mt-[15px]">
            <Button
              id="cursive"
              className="w-[100%] h-[100%] bg-sky-600 font-bold "
              variant="contained"
              size="large"
              // disabled={false}
              onClick={onUpload}
            >
              Upload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
