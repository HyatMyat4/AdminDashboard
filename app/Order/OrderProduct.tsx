import React from 'react'
import Image from 'next/image'
import { FaStar, FaStarHalf , FaShippingFast } from 'react-icons/fa'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Orderproduct__id , OrderproductEngin , OrderproductRemoveEngin , TotalPrice } from '../../Redux/ActionSlice'
import { useDispatch } from 'react-redux'

type Props = {
    data : FoodProduct  
}
function OrderProduct({data } : Props ) {
  const dispatch = useDispatch()
  const id = data.id
  const TotalPriceC = useSelector(TotalPrice)
  const filterProduct = useSelector((state) => Orderproduct__id(state,id))
  console.log(filterProduct,'🌺🌺🌸OK')
  const Min = 1
  const Max = 5
  const [rating] = useState(Math.floor(Math.random() * (Max - Min + 1  )) + Min )
  const ProductPopular =  Math.floor(Math.random() * 50000)

  return (
    <>     
    <div key={filterProduct[0]?.id} className={` ${filterProduct[0]?.id ? "" : "hidden"} w-full h-auto flexColCenter  
    775:flexRowCenter justify-between mt-[10px] animate-slowfade2  `}>      
    <div className='w-[95%] h-full flexColCenter  775:flexRowCenter p-[15px] 775:p-0 relative justify-between mt-[10px] m-auto bg-[#e3e3e3] overflow-hidden  dark:bg-[#3636363e] rounded-[5px] '>
    <div className=' absolute top-[6px] right-[6px] px-[7px] py-[4px] text-[15px] bg-teal-500 text-white rounded-full' >x{filterProduct.length}</div>
     <div  className={`absolute w-[150px] h-auto flexRowCenter ${ TotalPriceC > 30 ? "" : "hidden"} rounded justify-center bg-orange-500 rotate-[-30deg]  text-white top-[20px] left-[-20px] `} >
       <FaShippingFast className='mr-[5px] text-[15px]' />
       <span  className='text-[12px]' >Free Delivery</span>
       </div>
      <div className='w-[50%] 775:w-[27%] h-auto   overflow-hidden p-[10px]'>
           <Image
                alt=''
                src={filterProduct[0]?.FoodImage}
                width={1920}
                height={1080}
                className='w-full h-auto  rounded'
                       
            /> 
      </div>
      <div className='w-full 775:w-[52%] h-auto flexColCenter justify-start px-[10px] '>
         <div className='w-full h-[40px] flexRowCenter justify-center animate-slideleft3 '>
            <div className='w-auto flexColCenter  775:h-full font-bold text-[20px] flexRowCenter'>
                {filterProduct[0]?.name} 
            </div>
              <div  className="w-auto h-full flexRowCenter text-[15px]  ml-[10px]  font-bold text-[gold]  flexRowCenter">       
              { // @ts-ignore 
              Array(rating).fill().map((i) => (
                <FaStar/>
              ))}
             </div> 
         </div>
         <div className=' text-center text-gray-400 text-[13px] lg:text-auto'>
             {filterProduct[0]?.Foodinfo.slice(0,190)}...
         </div>       
         <div className='text-gray-600 dark:text-gray-400 text-[14px] lg:text-auto'>Popular : {ProductPopular} </div>  
         <div className='text-emerald-500 text-[20px] font-bold'>${filterProduct[0]?.Price}</div>
      </div>
      <div className='w-full 775:w-[20%] h-auto  775:h-full flexColCenter justify-center animate-slideright2 text-white select-none '>
            <div onClick={() => dispatch(OrderproductEngin(filterProduct[0]))} className='px-[25px] py-[8px]  bg-emerald-500 hover:scale-110 trasition rounded-[5px] mb-[15px] mt-[30px] cursor-pointer'>
                Add Items 
            </div>
            <div onClick={() => dispatch(OrderproductRemoveEngin(id))} className='px-[11px] py-[8px]  bg-red-500 rounded-[5px] hover:scale-110 trasition cursor-pointer'>
                Remove Items
            </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default OrderProduct