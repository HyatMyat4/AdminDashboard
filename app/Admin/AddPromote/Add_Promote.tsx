"use client"
import React from 'react'
import { FaCocktail } from 'react-icons/fa'
import { PromoteOpenCloseEngin , PromoteOpenCloseC } from "../../../Redux/ActionSlice"
import { useDispatch , useSelector } from 'react-redux';
function Add_Promote() {
  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(PromoteOpenCloseEngin(true))}  className='flex flex-row items-center  mb-[10px] 360:mb-0 px-[10px] py-[9px] rounded-[5px] mr-[17px]
    bg-emerald-500 shadow-lg text-white ml-[10px] hover:scale-105 cursor-pointer trasition'>
      <span className=' font-bold'>Add Promote</span>
      <FaCocktail className='text-[20px] ml-[5px]'/>
  </div>
  )
}

export default Add_Promote