import { FaShippingFast, FaHeadset, FaDollarSign } from "react-icons/fa";
import SwiperOrderCountry from "./SwiperOrderCountry";
const About = () => {
  return (
    <div>
      <section
        id="About"
        className="w-full h-[auto] bg-white dark:bg-[black] flex flex-col items-center"
      >
        <div className="flex flex-col items-center pt-[10px]">
          <span className="text-[18px] font-bold text-orange-500  animate-slideleft2">
            About Us
          </span>
          <span id="cursive" className=" text-[25px]  animate-slideright2 ">
            WHY CHOOSE US?
          </span>
        </div>
        <div className="w-full h-auto 0lg:h-[400px] flexColCenter 0lg:flexRowCenter justify-between    ">
          <div className="w-[100%] 0lg:w-[40%] h-full flexRowCenter justify-center animate-slidedown2">
            <img src="/food.png" />
          </div>
          <div className="w-[100%] 0lg:w-[60%] h-auto flex flex-col items-center justify-center px-[4px]">
            <span className="text-[35px] animate-slideleft2 cursor-pointer mb-[20px] font-bold text-center text-slate-800 flexColCenter sm:flexRowCenter">
              <span> Best Food Deliver In The Country</span>
              <FaShippingFast className="ml-[5px] text-orange-500 text-[40px]" />
            </span>
            <div className="font-bold animate-slideright2  flex flex-col items-center cursor-pointer text-gray-500">
              <span className="flexRowCenter  text-center">
                Most Food Categories Get in Our Fast Food Resturent In The
                Country{" "}
              </span>

              <span className=" font-normal flex  flex-col items-center text-center">
                Our Food🌮 Are So Clean and Refreshing Using Naturely🥦 Fruit🍇
                <div className=" flexColCenter sm:flexRowCenter">
                  <span>Product and Good Coustmer servieces </span>
                  <FaHeadset className="ml-[5px] text-amber-500" />
                </div>
              </span>
            </div>
            <div className="flexRowCenter flex-wrap justify-center my-[30px] animate-slideleft2 ">
              <div className="Ads dark:bg-[#212121] ">
                <FaShippingFast className="mr-[5px] text-orange-500 text-[40px]" />
                <span id="cursive" className="">
                  Free Delivery
                </span>
              </div>
              <div className="Ads dark:bg-[#212121] ">
                <FaDollarSign className="mr-[5px] text-emerald-500 text-[40px]" />
                <span id="cursive" className="">
                  Easy Payments
                </span>
              </div>
              <div className="Ads dark:bg-[#212121]">
                <FaHeadset className="mr-[10px] text-amber-500 text-[40px]" />
                <span id="cursive" className="">
                  14/7 Services
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[auto] ">
          <div className="w-full flex flex-row items-center justify-center">
            <div
              id="cursive"
              className=" text-[25px]  animate-slideright2 flexRowCenter text-center"
            >
              Can Order Country / City 🕍
            </div>
          </div>
          <SwiperOrderCountry />
        </div>
      </section>
    </div>
  );
};

export default About;
