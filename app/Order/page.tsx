"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import DarkModeButton from '../(root)/DarkModeButton'
import { OrderproductC , TotalPrice , Promote_ProductC , Pure_OrderProductC , LoginUserdataC , LoginUserdataEngin} from '../../Redux/ActionSlice'
import Link from 'next/link'
import { FaArrowAltCircleLeft, FaShippingFast } from 'react-icons/fa'
import OrderProduct from './OrderProduct'
import OrderPromote from './OrderPromote'
import { MdOutlinePayment } from 'react-icons/md'
import Auth from '../(root)/Auth'
import { useSession  } from "next-auth/react";
import Checkout from './Checkout'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import toast, { Toaster } from 'react-hot-toast';
import { Ring } from '@uiball/loaders'
import { useState } from 'react'
function page() {
    const getmemory = localStorage.getItem("Token")
    const dispatch = useDispatch()
    const notifySuccess = (e : string) => toast.success(e);
    const notifyEarr = (e : string) => toast.error(e);
    const [ loding , setloding ] = useState(false)
    useEffect(() => {
      if(getmemory){
        const userdata = jwt_decode(getmemory)
        dispatch(LoginUserdataEngin({userdata}))
      }
    }, [])
    const data_Product = useSelector(OrderproductC)     
    const TotalPriceC = useSelector(TotalPrice)    
    const {PromoteProducts} = useSelector(Promote_ProductC)    
    const  Pure_OrderProduct = useSelector(Pure_OrderProductC)    
    const { userdata } =useSelector(LoginUserdataC)
    const { data  } = useSession();

   
    console.log(Pure_OrderProduct,'🌸🌺🍕')
  return (
    <div className='w-screen h-screen '>
     
        <div className={`w-[100%] h-[100%] absolute ${loding ? "" : "hidden"}  top-0 left-0 z-[9999]  flexColCenter justify-center   `}>
        <Ring 
          size={70}
          lineWeight={3}
          speed={2} 
          color="#3fdffb" 
        />
        <span className=' font-bold text-orange-500  animate-pulse' >Prepare Payment ...</span>
        </div>
       <Toaster/>
        <Link href={"/"}>
        <FaArrowAltCircleLeft className=" absolute z-50  top-[10px] left-[10px] text-[30px] text-[#3fdffb] hover:scale-110 trasition  cursor-pointer"/>
      </Link>
        <div className=' absolute top-[10px] right-[10px] z-50'>
          <DarkModeButton/>
        </div>
      
         <div className='w-[100%] lg:w-[1000px] 1450:w-[1400px] h-full  m-auto flexRowCenter'>
             <div className='w-[100%] 1450:w-[80%] h-full  flexColCenter' >
               <div className='w-full  h-[29%] my-[10px] flexRowCenter justify-between '>
                  <div  className='w-[60%]  775:w-[70%] hidden 670:inline 1450:w-full h-full bg-white dark:bg-[#0c0c0c] rounded-[5px]   overflow-hidden '>                  
                          <OrderPromote data={PromoteProducts} />                     
                  </div>
                  
                  <div className='w-full 670:w-[40%] 775:w-[29%] h-full inline 1450:hidden flexRowCenter justify-center bg-white dark:bg-[#0c0c0c] ml-0 670:ml-[10px] relative ' >
                 
                  <div className='w-full h-full flexColCenter justify-center' >
                    <Auth />
                    <div className='text-[15px] mt-[20px] flexRowCenter '>SubTotal ( <div  className=' text-orange-500 mx-[5px]' > {data_Product.length} items </div> ) : <span className='text-emerald-500 ml-[5px]'>${TotalPriceC}</span> 
                    </div>
                
                      <Checkout userdata={userdata} notifyEarr={notifyEarr} setloding={setloding} />
                     </div>
                  </div>
                </div>  
                  <div  className='w-full h-[69%] bg-white dark:bg-[#0c0c0c]  rounded-[5px] overflow-hidden'> 
                      <div className='w-[97%] h-[58px] flexRowCenter m-auto font-bold text-[25px] flexRowCenter justify-between '>
                         <div>Shopping Basket</div>
                         <div className='text-[20px] mr-[10px] text-orange-500 ' >{data_Product.length}</div>
                      </div>
                      <div className='w-[97%] h-[2px] m-auto bg-gray-300 rounded-full  dark:bg-gray-600'></div>
                       <div id='scrollnone' className='w-full h-[90%]  mt-[10px] rounded-[5px] overflow-y-scroll pb-[20px]'>
                           { Pure_OrderProduct ? Pure_OrderProduct.map((data : any) => (
                                <OrderProduct data={data} />
                           ))                             
                             : "Loding..."
                           }
                       </div>
                  </div>
             </div>
             <div className='  hidden  1450:flex w-[19%] h-[99%]  relative ml-[10px] mt-[9px] bg-white dark:bg-[#0c0c0c] rounded-[5px] flexColCenter   justify-center ' >
                 <div className=' absolute top-[10px] inset-0' >
                    <Auth />
                 </div>
                 <div className='text-[15px] mt-[20px] flexRowCenter '>SubTotal ( <div  className=' text-orange-500 mx-[5px]' > {data_Product.length} items </div> ) : <span className='text-emerald-500 ml-[5px]'>${TotalPriceC}</span> </div>
               
                  <Checkout userdata={userdata} notifyEarr={notifyEarr} setloding={setloding} />
               
                
                  
             </div>
         </div>
    </div>
  )
}

export default page