"use client"
import { getProviders , signIn } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'
import { useState } from'react'
type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}
function SigninComponent({providers}: Props) {
 
 
  console.log(providers,"🍕🍕")

  return (
    <div className='w-full h-screen flexColCenter items-center justify-center '>
      
        <div  key={providers?.google.name} onClick={() => signIn(providers?.google.id,{
          callbackUrl: "https://fastfoodbackend.onrender.com"
        })} className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition justify-around py-[13px] cursor-pointer   font-bold  text-[black]  bg-white rounded-[5px] mb-[10px]'>
          <img
           src="/Google.png"
           className='w-[35px]'
          />
          <span className='w-[85%] ml-[15px] text-start' >
            Sign in with {providers?.google.name}
          </span>
        </div>
        <div key={providers?.github.name} onClick={() => signIn(providers?.github.id,{
          callbackUrl: "https://fastfoodbackend.onrender.com"
        })} className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white] bg-[#101010]   rounded-[5px] mb-[10px]'>
          <img
           src="/github.png"
           className='w-[37px] rounded-full'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with {providers?.github.name}
          </span>
        </div>
        <div key={ providers?.facebook.name} onClick={() => signIn(providers?.facebook.id,{
          callbackUrl: "https://fastfoodbackend.onrender.com"
        })} id='linerColour3' className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white]   rounded-[5px] mb-[10px]'>
          <img
           src="/Facebook1.png"
           className='w-[37px]'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with {providers?.facebook.name}
          </span>
        </div>
        <Link  href="/FastFoodAuth" id='linerColour4' className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white]    rounded-[5px] mb-[10px]'>
          <img
           src="/Food.png"
           className='w-[45px] rounded-full'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with FastFood
          </span>
        </Link>
        <div key={providers?.instagram.name} onClick={() => signIn(providers?.instagram.id,{
          callbackUrl: "https://fastfoodbackend.onrender.com"
        })} id='linerColour2' className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white]   rounded-[5px] mb-[10px]'>
          <img
           src="/instgram.webp"
           className='w-[37px]'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with {providers?.instagram.name}
          </span>
        </div>
   
 
   
    </div>
  )
}

export default SigninComponent