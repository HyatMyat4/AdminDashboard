import React from "react";
import {
  FaCartPlus,
  FaSearch,
  FaSortAmountUp,
  FaSortAmountDown,
} from "react-icons/fa";
import ProductCard from "./ProductCard";
import FoodCard from "../../(root)/FoodCard";
import AddProductCOmponents from "./AddProduct";
import AddProductBatton from "./AddProductBatton";
import { GoCheck } from "react-icons/go";
import { useQuery } from "@apollo/client";
import { FaEdit } from "react-icons/fa";
import { GET_FoodProducts } from "../../../Graphql/Queries/Products";
import ProductRow from "./ProductRow";
import ProductRowRender from "./ProductRowRender";
import DeleteProductBtn from "./DeleteProductBtn";
import SearchComponent from "../SearchComponent";
async function AddProduct() {
  const { data } = await GET_FoodProducts();

  return (
    <div className="w-full h-[93vh] overflow-hidden ">
      <AddProductCOmponents />
      <div className="w-full h-[35vh] 360:h-[14vh] 775:h-[7vh] flexColCenter 775:flexRowCenter justify-center 775:justify-between  ">
        <div className=" flexColCenter 360:flexRowCenter justify-center 360:justify-between mb-[10px] 775:mb-0 mt-[10px] 360:mt-0 ">
          <SearchComponent />
          <div className="mx-[20px] select-none">
            <div
              className="  animate-slowfade shadow-lg  select-none ml-0 360:ml-[13px] 775:ml-0
             p-[8px] rounded-full hover:scale-110 hover:bg-orange-500 mr-[2px]  2lg:mr-[10px] cursor-pointer transition-all
             duration-75 ease-in
             "
            >
              <FaSortAmountUp className="text-[20px]" />
            </div>
          </div>
        </div>
        <div className=" flexColCenter 360:flexRowCenter justify-between">
          <AddProductBatton />
          <DeleteProductBtn />
        </div>
      </div>
      <div
        id="customscroll"
        className="w-full  h-[65vh] 360:h-[86vh]  pb-[20px] overflow-y-scroll flexRowCenter justify-center flex-wrap   rounded-[5px]"
      >
        <div className="w-[100%] h-[100%] relative ">
          <div className="w-full h-[80px] z-50 flex flex-row sticky top-0 bg-white dark:bg-[#141937]  shadow-lg mb-[15px] items-center justify-between">
            <div className="ProductHeader w-[110px] ml-[10px] ">
              Delete Mark
            </div>
            <div className="ProductHeader hidden sm:flex ">Product Image</div>
            <div className="ProductHeader">Product Name</div>
            <div className="ProductHeader w-[120px] hidden 1lg:flex ">
              Can Order
            </div>
            <div className="ProductHeader hidden 2xl:flex  ">
              Product Distinction
            </div>
            <div className="ProductHeader w-[110px] hidden 4se:flex ">
              Out Of Stock
            </div>
            <div className="ProductHeader">Product Price</div>
            <div className="ProductHeader w-[150px] ">Edit</div>
          </div>
          <ProductRowRender data={data} />
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
