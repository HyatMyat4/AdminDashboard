"use client"
import React from 'react'
import Image from 'next/image'
import { FaEdit } from 'react-icons/fa'
type Props= {
    data :   FoodProduct,
  }
function DashBoardProduct({data} : Props) {
  return (
    <div key={data?.id} className='w-full h-[80px] flexRowCenter  justify-around  overflow-hidden mt-[10px]'>
           <div className=' w-[15%] 4se:w-[12%] h-[80px] rounded-[5px]  overflow-hidden hidden 360:flex '>    
                 <Image
                    alt=''
                    src={data?.FoodImage}
                    width={1920}
                    height={1080}
                    className="w-full h-auto m-0 lg:m-auto 6xl:m-0"
                />
          </div>             
          <div className='dark:text-[#ffda85] w-[20%] h-[80px] flexRowCenter justify-center text-center  text-[14px]  360:text-auto '>{data?.name}</div>  
            
          <div className='dark:text-[#ffda85] w-[17%] h-[80px] flexRowCenter justify-center hidden lg:flex'>{data?.Popular}</div>        
          <div className='dark:text-[#ffda85] w-[13%] h-[80px] flexRowCenter justify-center hidden 3lg:flex '>{data?.Outofstock}</div>        
      
        
          <div className='dark:text-[#ffda85] w-[14%] h-[80px] flexRowCenter justify-center'>${data?.Price}</div>   

              <div className='w-[13%] h-[80px] flexRowCenter justify-center'>
                <div  className=" flex flex-row items-center  px-[8px] xs:px-[18px] animate-slowfade   
                py-[8px] hover:bg-blue-600 bg-orange-500 rounded  text-slate-100 hover:scale-110 
                select-none transition-all duration-75 ease-in cursor-pointer ">
                Edit <FaEdit className='text-[20px] ml-[10px] ' /> 
                </div>  
              </div> 
    </div>
  )
}

export default DashBoardProduct