"use client"
import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { useSession  } from "next-auth/react";
import { useSelector } from 'react-redux';
import { LoginUserdataC } from '../../Redux/ActionSlice'



function DashboardHeader() {
    const { userdata } =useSelector(LoginUserdataC)
    const {data} = useSession()
  return (
    <div className='w-full h-[7vh] flexRowCenter  items-center   justify-center 360:justify-between '>
    <div className='flexColCenter items-start ml-[10px] hidden 360:flex'>
        <span className=' font-bold text-[20px]' >DASHBOARD</span>
        <div className='flexRowCenter'>   
      </div>
    </div>
    <div   className='flex flex-row select-none  text-white items-center px-[14px] py-[9px] rounded-[5px] mr-[10px]
      bg-orange-500 shadow-lg ml-[10px] hover:scale-105 cursor-pointer trasition mt-[20px] 360:mt-0 '>
        <span className=' font-bold'>Dowload Repoter</span>
        <FaDownload className='text-[17px] ml-[5px]'/> 
    </div>
  </div>
  )
}

export default DashboardHeader

