"use client"
import { getProviders , signIn } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'
type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}
function SigninComponent({providers}: Props) {

  const SinglePRovider = Object.values(providers!).map((provider) => { return provider  })
  return (
    <div className='w-full h-screen flexColCenter items-center justify-center '>
      
        <div  key={SinglePRovider[0].name} onClick={() => signIn(SinglePRovider[0].id,{
          callbackUrl: "http://localhost:3000"
        })} className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition justify-around py-[13px] cursor-pointer   font-bold  text-[black]  bg-white rounded-[5px] mb-[10px]'>
          <img
           src="/Google.png"
           className='w-[35px]'
          />
          <span className='w-[85%] ml-[15px] text-start' >
            Sign in with {SinglePRovider[0].name}
          </span>
        </div>
        <div key={SinglePRovider[3].name} onClick={() => signIn(SinglePRovider[3].id,{
          callbackUrl: "http://localhost:3000"
        })} className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white] bg-[#101010]   rounded-[5px] mb-[10px]'>
          <img
           src="/github.png"
           className='w-[37px] rounded-full'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with {SinglePRovider[3].name}
          </span>
        </div>
        <div key={SinglePRovider[1].name} onClick={() => signIn(SinglePRovider[1].id,{
          callbackUrl: "http://localhost:3000"
        })} id='linerColour3' className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white]   rounded-[5px] mb-[10px]'>
          <img
           src="/Facebook1.png"
           className='w-[37px]'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with {SinglePRovider[1].name}
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
        <div key={SinglePRovider[2].name} onClick={() => signIn(SinglePRovider[2].id,{
          callbackUrl: "http://localhost:3000"
        })} id='linerColour2' className='w-[270px] px-[15px] flexRowCenter hover:scale-110 trasition cursor-pointer justify-around py-[13px] 
          font-bold  text-[white]   rounded-[5px] mb-[10px]'>
          <img
           src="/instgram.webp"
           className='w-[37px]'
          />
          <span className='w-[85%] ml-[15px]  text-start' >
            Sign in with {SinglePRovider[2].name}
          </span>
        </div>
   
 
   
    </div>
  )
}

export default SigninComponent