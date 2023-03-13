import React from 'react'
import {  FaStar , FaStarHalfAlt ,  FaFeatherAlt } from "react-icons/fa";
const CustomerReview = ({data} : any ) => {
  return (
    <div className='w-[90%] h-[250px] rounded-[7px] shadow-lg border border-gray-200 dark:border-gray-800 dark:bg-[#000000]  overflow-hidden  '>
        <div className='w-full h-[80px] flexRowCenter justify-between pt-[10px]'>
           <div className='w-[94%] m-auto flexRowCenter justify-between'>
             <div className='w-auto flexRowCenter'>
               <div className='w-[75px] h-auto rounded-full hover:scale-110 transition-all duration-75 ease-in cursor-pointer overflow-hidden'>
                  <img
                   src={data.user_img}
                   className='w-full'
                  />
               </div>
               <div className='ml-[10px] flexColCenter items-start justify-start'>
                   <span className=' text-[20px] font-bold '>{data.user_name}</span>
                    <div className='flexRowCenter text-[gold]'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStarHalfAlt/>
                    </div>
               </div>
               </div>

               <div className='text-[50px] text-gray-300'>
                  <FaFeatherAlt/>
               </div>
           </div>
        </div>
        <div id='scrollnone' className='w-[93%]  h-[57%] overflow-y-scroll pb-[10px]   mt-[10px]  m-auto  cursor-pointer  '>
            <div  className='break-all text-gray-500 text-[16px] '>             
              
                     {data.Review_text}
                       
            </div>
        </div>
    </div>
  )
}

export default CustomerReview