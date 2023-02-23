"use client"
import React from 'react'
import ChartPie from './ChartPie'
import DashBoardProduct from './DashBoardProduct'
type Props= {
  data :   any,
}

function DashBoardSecondRow({data} : Props) {
  
  return (
    <div className='w-[98%] 6xl:w-[100%]  h-[100%] flexColCenter 6xl:flexRowCenter items-start justify-center m-auto mt-[10px] 6xl:mt-0 translate-y-[-6px]'>
       <div className='w-full 6xl:w-[66%] h-[60%] 6xl:h-[97%]  bg-gray-200 dark:bg-[#191f48] rounded-[5px] mr-[10px] overflow-hidden '>
           <div className='w-full h-[14%] 6xl:h-[17%] relative  flexRowCenter  justify-around text-orange-500 bg-gray-200 dark:bg-[#1c2350] shadow-lg font-bold'>
           <div className='w-[12%] h-full flexRowCenter justify-center hidden 360:flex text-center '>Product Img</div>
           <div className='w-[20%] h-full flexRowCenter justify-center text-center'>Product Name</div>
           <div className='w-[17%] h-full flexRowCenter justify-center hidden lg:flex text-center '>Product Popular</div>
           <div className='w-[13%] h-full flexRowCenter justify-center  hidden 3lg:flex text-center '>Out of Stock</div>
           <div className='w-[13%] h-full flexRowCenter justify-center text-center'>Product Price</div>
           <div className='w-[14%] h-full flexRowCenter justify-center text-center '>Total <span className='hidden lg:flex ml-[5px]'>Product</span> <span className=' text-emerald-500 ml-[5px]'>{data.length}</span></div>           
           </div>
           <div id="scrollnone" className='w-full h-[85%] 6xl:h-[82%] overflow-y-scroll'>
            { data.map((data : FoodProduct) => (
              <DashBoardProduct data={data}/>
            ))
            }
           

           </div>
       </div>
       <div className='w-full 6xl:w-[31.8%] h-[40%] 6xl:h-[97%] bg-gray-200 dark:bg-[#191f48] rounded-[5px] mt-[10px] 6xl:mt-0'>
          <ChartPie isDashboard={true} />
       </div>
    </div>
  )
}

export default DashBoardSecondRow