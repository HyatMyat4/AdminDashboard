"use client"
import React from 'react'
import { BsExclamation } from 'react-icons/bs'
import Button from "@mui/material/Button";
import { useState , useEffect } from 'react';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import DarkModeButton from '../(root)/DarkModeButton';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import jwt_decode from "jwt-decode"
import { useSelector , useDispatch } from "react-redux";
import { LoginUserdataEngin } from '../../Redux/ActionSlice'

function page() {
   const router = useRouter()
   const dispatch = useDispatch()

   const [ Email , setEmail ] = useState("")
   const [ValidEmail , setValidEmail] = useState(false)
   const [ EmailFocus , setEmailFocus ] = useState(false)
   
   const [ Password , setPassword ] = useState("")
   const [ ValisPassword , setValisPassword ] = useState(false)
   const [ PasswordFocus , setPasswordFocus ] = useState(false)

   const Email_REGEX = /^(?=.*[a-z])(?=.*[@])(?=.*[0-9]).{8,20}$/;
   const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@])(?=.*[0-9]).{8,24}$/;


   const notifySuccess = (e : string) => toast.success(e);
   const notifyEarr = (e : string) => toast.error(e);

   useEffect(() => {
    setValidEmail(false);
    if (Email.includes("@gmail.com")) {
      const result = Email_REGEX.test(Email);
      setValidEmail(result);
    }
  }, [Email, setEmail]);

   useEffect(() => { 
      const result = PWD_REGEX.test(Password);
      setValisPassword(result);
   
  }, [Password, setPassword]);
 
  const handleLogin = async () => {
    if(!Email || !Password ) return;   
    try{
     const  login = await fetch("https://fastfoodbackend.onrender.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"email": Email ,"Password": Password }),
    })
    const Token = await login.json();
     if(Token){      
      localStorage.setItem("Token",Token.accessToken)
    
      const  data  = jwt_decode(Token.accessToken) 
     
      dispatch(LoginUserdataEngin({data}))
        
      notifySuccess("Success Login")
      router.push('/')
     }
    } catch(err) {
      console.warn(err)
      notifyEarr("Soorty Something Wroung ")
    }
  }

  return (
    <div className='w-screen h-screen flexRowCenter justify-center pb-[20px]'>
      <Toaster/>
      <Link href={"/FastFoodAuth"}>
        <FaArrowAltCircleLeft className=" absolute z-50  top-4 left-4 text-[35px] text-cyan-400 hover:scale-110 trasition  cursor-pointer"/>
      </Link>
      <div  className=" absolute z-50  top-4 right-4">
       <DarkModeButton/>
      </div>
        <div className='w-[470px] h-[auto] bg-[#dddddd] overflow-hidden   shadow-lg dark:bg-[#2e3134] rounded-[3px] z-[999]'>
             <div className='w-full h-[60px] flexRowCenter justify-center  '>
                  <span className=' font-bold  text-[20px]'>Log In</span>
             </div> 
        <div className="w-[90%] h-auto relative m-auto  flexColCenter items-start mb-[20px]">
            <span className="font-bold text-[black] dark:text-[#A9ABAF] text-[14px]">
                EMAIL
            </span>
            <input
                value={Email}
                onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}            
                type={"text"}
                className=" w-full h-[45px] outline-none text-[17px] dark:bg-[#17181a] rounded-[3px] px-[15px] py-[10px]"
            />
        </div>
        <div className="w-[90%] h-auto relative m-auto  flexColCenter items-start mb-[20px] ">
            <span className="font-bold text-[black] dark:text-[#A9ABAF] text-[14px]">
                PASSWORD
            </span>
            <input             
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}    
                type={"text"}
                className=" w-full h-[45px] outline-none text-[17px] dark:bg-[#17181a] rounded-[3px] px-[15px] py-[10px]"
            />
        </div>
        <div className="w-[90%] m-auto h-[auto] flexColCenter  items-center justify-center mb-[20px]">
          <Button
            onClick={handleLogin}
            className="w-[100%] h-[55px] bg-[#0099ff] hover:bg-[#0099ff] font-bold transition-all  duration-200"
            variant="contained"
            size="large"
            disabled={!ValidEmail || !ValisPassword ? true  : false }
          >
            Log In
          </Button>
        </div>
        </div>
    </div>
  )
}

export default page