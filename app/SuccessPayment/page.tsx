"use client"
import React from 'react'
import { GoCheck } from 'react-icons/go'
import DarkModeButton from '../(root)/DarkModeButton'
import Link from 'next/link'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Get_Single_Order } from "../../Graphql/Queries/User_Order"
import User_Order from './User_Order'
import { useSelector } from 'react-redux'
import { TotalCostC  } from '../../Redux/ActionSlice'
function page() {
     const totalcost = useSelector(TotalCostC)
  return (
    <div className='w-screen h-screen relative bg-[#e9e9e9] dark:bg-[#0b0b0bd3]  '>
      <Link href={"/"}>
        <FaArrowAltCircleLeft className=" absolute z-50  top-[10px] left-[10px] text-[30px] text-[#3fdffb] hover:scale-110 trasition  cursor-pointer"/>
      </Link>
        <div className=' absolute top-[10px] right-[10px] z-[999]'>
          <DarkModeButton/>
        </div>
        <div className=' w-[100%] xl:w-[1200px] h-full flexColCenter  m-auto relative overflow-hidden z-0 '>
        <div  className={`absolute w-[190px] h-auto flexRowCenter z-[99999]  rounded justify-center bg-orange-500 rotate-[-30deg] 
             text-white top-[30px] left-[-30px] animate-slowfade `} >
          <span  className='text-[12px]' >Total Cost : ${totalcost ? totalcost : ""}</span>
          </div>
             <div className='w-full h-[25vh] sm:h-[15vh] flexColCenter justify-center bg-white  dark:bg-black rounded-[5px] '>
                <div className='w-full h-auto flexColCenter sm:flexRowCenter justify-center animate-slideleft4'>
                    <div className='px-[1px] py-[2px] rounded-full  bg-emerald-500 mr-[5px] animate-slideleft3'>
                    <GoCheck className='text-[18px] ml-[3px] text-white text-center '/>
                    </div>
                    <div className='text-[18px] sm:text-[30px] font-bold animate-slideleft3  text-center ' >Thank your order has been comfirmed! </div>
                </div>
                <span className=' animate-slideleft3' >Thanks you for Shopping us.</span>
                <span className='text-center text-[13px] mt-[10px] animate-slideleft ' >Your order below</span>
             </div>   
             <div className='w-full h-[74vh] sm:h-[84vh] flexRowCenter justify-center bg-white  dark:bg-black  rounded-[5px] mt-[10px]' >
                 <User_Order/>
             </div>
        </div>
    </div>
  )
}

export default page