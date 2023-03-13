"use client"
import CanOrderCountry from "./CanOrderCountry";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Reviews_data } from '../../constants'
import "../../styles/globals.css";
import SwiperCore,{ Autoplay } from 'swiper';

import CustomerReview from "./CustomerReview";
const ReviewSwiper = () => {
  return (

        <div className="w-[100%]  m-auto flexRowCenter flex-wrap my-[20px]  ">
              <Swiper
         loop={true}
         modules={[Autoplay]}
         grabCursor={true}         
         spaceBetween={20}
         slidesPerView={1}        
         autoplay={{delay: 5000}}           
         style={{ width: 'auto', height: 'auto'  }}
         className="mySwiper"
         breakpoints={{
          400: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
           
          },
          1224: {
            slidesPerView: 3,
            
          },
          1500: {
            slidesPerView: 3,
            
          },
   
      
        }}
       
      >
         
    
        {
          Reviews_data.map((data , index )=> (
            <SwiperSlide key={index} className='ReviewSlide mb-[20px]' >        
            <CustomerReview data={data}/>                         
           </SwiperSlide>  
          ))
        }
        
      
     
      </Swiper>       
    </div>

  )
}

export default ReviewSwiper