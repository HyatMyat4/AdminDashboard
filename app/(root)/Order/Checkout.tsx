"use client"
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { OrderproductC , LoginUserdataC } from '../../../Redux/ActionSlice'
import { useSession  } from "next-auth/react";




const stripePromise = loadStripe("pk_test_51MaXuPLEcPSAQWYOLF7If8mxUqm15Mlt6xkOFggOGE0xJdQkckzvLcyH8TSPA5Fzg1wrwe3lTVk0rLOvJl38I7z800nEe4L4LA") 
function Checkout({userdata , notifyEarr , setloding} : any) { 
      
      const data_Product = useSelector(OrderproductC)   
      const { data  } = useSession();
        
      const createCheckoutSession = async  () => {        
        setloding(true)
        if(!data_Product) {
        setloding(false)
        }
        try{
          const stripe = await stripePromise;
          const  CheckoutSession = await fetch("https://fastfoodbackend.onrender.com/CheckOut/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({  "items": data_Product ,"Email": userdata.Login?.email || data?.user?.email , userImage : data?.user?.image || userdata.Login?.image }),
          })          
           const { id , order_id } = await CheckoutSession.json() 
           if(!id || !order_id ) return
           localStorage.setItem("UserLastOrder_id",order_id)
          const Check_outdata = await stripe?.redirectToCheckout({
             sessionId : id 
          })         
          if(id){
            setloding(false)
          }          
        } catch (err) {
           
          console.warn(err)
          setloding(false)
          notifyEarr("Some thing  wrong Please try again")          
        }  
      
      }

  return (   
   

      <button onClick={createCheckoutSession}
      disabled={ !data?.user &&  !userdata  || !data_Product.length  ? true :   false }
      className={`px-[20px] py-[10px] bg-orange-500  font-bold z-50  disabled:opacity-[0.3]  text-white rounded-[5px] hover:scale-110 mt-[10px] flexRowCenter
      trasition  cursor-pointer `}>
        {!data?.user &&  !userdata ? "Need to Login"   : !data_Product.length ? "Soort Order Not Found" : "Proceed to Checkout"} 
      </button>
  
  )
}

export default Checkout


//whsec_936ff5d440cdd329257a4bb919d7136524884159b8415d7a36f745c29a1548b1