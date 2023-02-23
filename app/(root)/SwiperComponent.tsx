"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Keyboard } from "swiper";
import "../../styles/globals.css";
import SwiperCore, { Autoplay } from "swiper";
import SwiperSlideComponent from "./SwiperSlideComponent";
type Props = {
  data: any;
};
const SwiperComponent = ({ data }: Props) => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="w-full h-[auto] relative rounded-t-none rounded-[10px] overflow-hidden">
      <Swiper
        loop={true}
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        style={{ width: "100%", height: "auto" }}
        className="mySwiper"
      >
        {data?.PromoteProducts?.map((data: FoodProduct) => (
          <SwiperSlide>
            <SwiperSlideComponent data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

//<div className="w-full h-[45vh] absolute z-20 bg-gradient-to-t from-gray-300 to-transparent bottom-0" />
