import React from 'react'
import Image from 'next/image'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import { OrderproductEngin } from '../../Redux/ActionSlice'
type Props= {
    data : FoodProduct
}

function SwiperSlideOrder({data}: Props) {
    const dispatch = useDispatch()
    const notify = (e : string) => toast.success(`Success Order ${e}`);
    const handleAdd = (e : string) => {
      dispatch(OrderproductEngin(data))
      notify(e)
    }
  return (
    <div key={data.id} className="w-full h-full flexRowCenter justify-between ">
      <div className='w-[40%] 775:w-[65%] h-full flexColCenter p-[20px] ' >
        <span className="text-[18px] font-bold hidden  775:inline text-orange-500 animate-slideleft  ">Today Our Spical Dish</span>   
        <span id='cursive' className="text-[25px] font-bold text-orange-500 775:text-slate-800 animate-slideleft2 ">{data.name}</span>
        <span id='cursive' className=" text-left text-gray-500 text-[13px] lg:text-[15px] animate-slideleft3 hidden  775:inline ">
        {data.Foodinfo.slice(0, 150)}...
        </span>        
        <span  className=" text-[15px]   font-bold text-[gold] animate-slideleft3 flexRowCenter">       
            <FaStar/>
            <FaStar/>
            <FaStar/> 
            <FaStar/> 
        </span> 
        <span className="text-[15px]  text-emerald-400 animate-slideright3  ">$ <span>{data.Price}</span></span>
        <div onClick={() =>handleAdd(data.name)} className="flexRowCenter px-[14px] animate-slideleft4   py-[8px] bg-orange-500 rounded  text-slate-100 hover:scale-110 
           transition-all duration-75 ease-in cursor-pointer   ">
            Order Now 
            <FaShoppingCart className='text-[23px] hidden 775:inline ' /> 
        </div>
      </div>
      <div className=' w-[60%]  775:w-[35%] h-full flexColCenter justify-center ' >
        <div className='w-[60%] h-auto  animate-slideright2 '>
        <Image
            alt=''
            src={data.FoodImage}
            width={1920}
            height={1080}
            className='w-full h-full'
                
         /> 
        </div>
      </div>
    </div>
  )
}

export default SwiperSlideOrder


