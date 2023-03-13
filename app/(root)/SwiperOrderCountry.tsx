"use client"
import { canOrderCountry } from '../../constants'
import CanOrderCountry from "./CanOrderCountry";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/globals.css";
import SwiperCore,{ Autoplay } from 'swiper';

const SwiperOrderCountry = () => {
  return (
    <div className=" w-[100%] 2xl:w-[90%] m-auto flexRowCenter flex-wrap ">
       <Swiper
         loop={true}
         modules={[Autoplay]}
         grabCursor={true}         
         spaceBetween={20}
         slidesPerView={1}        
         autoplay={{delay: 5000}}            
         style={{ width: '100%', height: '300px' , }}
         className="   animate-slideright"
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
          1610: {
            slidesPerView: 4,
            
          },
      
        }}
        >
         
         {canOrderCountry.map((canOrderCountry, i )=> (
        <SwiperSlide key={i} className=' w-auto sm:min-w-[400px] h-[auto] select-none animate-slideright2  dark:bg-[black]  ' >        
             
                <CanOrderCountry
                     key={i}
                     canOrderCountry={canOrderCountry.name}
                     Countryname={canOrderCountry.Countryname}
                />                                        
                            
        </SwiperSlide>  
          ))}  
     
      </Swiper>       
    </div>
  )
}

export default SwiperOrderCountry