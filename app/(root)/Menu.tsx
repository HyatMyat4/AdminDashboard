"use client"
import React from 'react'
import FoodCard from './FoodCard'
import { useSelector } from 'react-redux'
import { ProductdataC } from "../../Redux/ActionSlice"
import LodingCard from './LodingCard'
const Menu = () => {
  const productdata = useSelector(ProductdataC)
  return (
    <div>
    <section id='Menus' className='w-full h-[auto]  overflow-hidden pb-[40px]'>
        <div className='w-full flexRowCenter justify-center py-[15px]'>
            <span id='cursive' className='text-[25px] text-orange-500'>Our Menu 🍽</span>
        </div>
        <div  className='w-[99%] h-[100%] m-auto flexRowCenter justify-center flex-wrap  '>
        {productdata ?
          productdata.map((Productdata : FoodProduct ) => (
            <FoodCard             
             Productdata={Productdata}           
            /> 
          ))               
         : 
           <LodingCard/>
         }
        </div>
    </section>
    </div>  
  )
}

export default Menu