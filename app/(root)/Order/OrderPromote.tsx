"use client"
import SwiperCore,{ Autoplay } from 'swiper';
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  Pagination, Mousewheel, Keyboard } from "swiper";
import "../../../styles/globals.css";
import SwiperSlideOrder from './SwiperSlideOrder';

function OrderPromote({data} : any) {
    
  
  return (
    <div className='w-full h-full flexRowCenter justify-between  '>
              <Swiper
                loop={true}
                modules={[Autoplay]}
                grabCursor={true}         
                spaceBetween={20}
                slidesPerView={1}        
                autoplay={{delay: 5000}}            
                style={{ width: '100%', height: 'auto' , }}
                className="mySwiper"
            >
        {data?.map((data : FoodProduct) => (
            <SwiperSlide>
              <SwiperSlideOrder data={data}/>
            </SwiperSlide>
        ))}      
        
      </Swiper>
    </div>
  )
   
}

export default OrderPromote