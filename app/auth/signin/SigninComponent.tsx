"use client"
import { getProviders , signIn } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}
function SigninComponent({providers}: Props) {

   console.log(providers,'🥭🥭🥭')


  return (
    <div className='w-full h-screen flexColCenter items-center justify-center '>
      
        <div  key={providers?.google.name} onClick={() => signIn("google",{
          callbackUrl: "https://admin-dashboard-hyatmyat4.vercel.app"
        })} className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition justify-around py-[13px] cursor-pointer   font-bold  text-[black]  bg-white rounded-[5px] mb-[10px]'>
          <img
           src="/Google.png"
           className='w-[35px]'
          />
          <span className='w-[85%] ml-[15px] text-start' >
            Sign in with Google
          </span>
        </div>
        <div key={providers?.github.name} onClick={() => signIn("github",{
          callbackUrl: "https://admin-dashboard-hyatmyat4.vercel.app"
        })} className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white] bg-[#101010]   rounded-[5px] mb-[10px]'>
          <img
           src="/github.png"
           className='w-[37px] rounded-full'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with Github
          </span>
        </div>
        <div key={ providers?.facebook.name} onClick={() => signIn("facebook",{
          callbackUrl: "https://admin-dashboard-hyatmyat4.vercel.app"
        })} id='linerColour3' className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white]   rounded-[5px] mb-[10px]'>
          <img
           src="/Facebook1.png"
           className='w-[37px]'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with Facebook
          </span>
        </div>
        <Link  href="/FastFoodAuth" id='linerColour4' className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white]    rounded-[5px] mb-[10px]'>
          <img
           src="/food.png"
           className='w-[45px] rounded-full'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with FastFood
          </span>
        </Link>
        <div key={providers?.instagram.name} onClick={() => signIn("instagram",{
          callbackUrl: "https://admin-dashboard-hyatmyat4.vercel.app"
        })} id='linerColour2' className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white]   rounded-[5px] mb-[10px]'>
          <img
           src="/instgram.webp"
           className='w-[37px]'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with Instagram
          </span>
        </div>
   
 
   
    </div>
  )
}

export default SigninComponent
