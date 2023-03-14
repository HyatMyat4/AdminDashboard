"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { BsExclamation } from "react-icons/bs";
import Cropper from "react-easy-crop";
import { HiXMark } from "react-icons/hi2";
import { GoCheck } from "react-icons/go";
import toast, { Toaster } from 'react-hot-toast';
import  getCroppedImg  from '../../cropimage'
import { dataURLtoFile } from "../../dataUrltoFile"
import { uploadBytesResumable, ref,  getDownloadURL  } from "firebase/storage";
import { app , storage } from '../../FireBaseConfig';
import { v4 as uuidv4 } from 'uuid';
import { Register_User } from '../../Graphql/Mutations/RegisterUser'
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import DarkModeButton from "../(root)/DarkModeButton";
import { MdGroupWork } from "react-icons/md";
function page() {
  const router = useRouter() 

  const [Name, setName] = useState("");
  const [ValidName, setValidName] = useState(false);
  const [NameFocus, setNameFocus] = useState(false);

  const [Email, setEmail] = useState("");
  const [ValidEmail, setValidEmail] = useState(false);
  const [EmailFocus, setEmailFocus] = useState(false);

  const [Password, setPassword] = useState("");
  const [ValidPassword, setValidPassword] = useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);

  const [PhoneNumber, setPhoneNumber] = useState<any>();
  const [RoleCode, setRoleCode] = useState<any>('');

  const [File, setFile] = useState<string | undefined>();
  const [RealFile, setRealFile] = useState<File | null | any>();

  const [ URL, setURL] = useState<string>();
  const [ Process, setProcess] = useState<any>();

  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [cropArea, setCropArea] = React.useState(null);

  const [ dark , setdark ] = useState(true)

  const FileRef = React.useRef<HTMLInputElement>(null);

  const Name_REGEX = /^(?=.*[a-z]).{3,20}$/;
  const Email_REGEX = /^(?=.*[a-z])(?=.*[@])(?=.*[0-9]).{8,20}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@])(?=.*[0-9]).{8,24}$/;

  const notify = () => toast.success("Add Image Success");
  const notifySuccess = (e : string) => toast.success(e);
  const notifyEarr = (e : string) => toast.error(e);
  

  useEffect(() => {
    const result = Name_REGEX.test(Name);
    setValidName(result);
  }, [Name, setName]);

  useEffect(() => {
    setValidEmail(false);
    if (Email.includes("@gmail.com")) {
      const result = Email_REGEX.test(Email);
      setValidEmail(result);
    }
  }, [Email, setEmail]);

  useEffect(() => {
    const result = PWD_REGEX.test(Password);
    setValidPassword(result);
  }, [Password, setPassword]);

  const handleRef = () => {
    if (File) return;
    FileRef.current?.click();
  };
  const handleSelectImg = (e: any) => {
    if (e.target.files[0] && e.target.files.length > 0) {
      setRealFile(e.target.files);

      const Reader = new FileReader();
      Reader.readAsDataURL(e.target.files[0]);
      Reader.addEventListener("load", () => {
        //@ts-ignore
        setFile(Reader.result);
      });
    }
  };

  const onCropComplete = (
    croppedAreaPercentage: any,
    croppedAreaPixels: any
  ) => {
    setCropArea(croppedAreaPixels);
  };

  const HandleUpload = async () => {  
    if (!Name || !Email || !Password || !URL) return;
    const data = await Register_User({ 
      name: Name,
      email: Email,
      Password: Password , 
      image: URL ,
      PhoneNumber: PhoneNumber ,
      Userstatus: RoleCode === 'Admin8765400744' ? RoleCode : 'New'
    })   
    if(data){
      notifySuccess("Regiter Success")
      router.push('/Login')
    }
  
  };

  const handleClear = () => {
    setFile("");
    setRealFile(null);
  };

  const handleImageUpload = async () => {
    if (!File || !RealFile) {
      notifyEarr("Soorty Something Wroung Please try again")
      return;
    }
    try{
    const canvas = await getCroppedImg(File, cropArea);
    const canvasDataUrl = canvas.toDataURL(RealFile[0].type);
    const convertedUrlToFile = dataURLtoFile(canvasDataUrl,RealFile[0].name);
   
    
    const storageRef = ref(storage, `HyatMyat.`+convertedUrlToFile.type.slice(6));
    // @ts-ignore
    const metadata = { contentType: convertedUrlToFile.type };
    const uploadTask = uploadBytesResumable(storageRef, convertedUrlToFile , metadata);
    // ${uuidv4()}
    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                   
      setProcess(progress) 
    },(err) => {
      console.log(err.message)
    },  () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {       
        if(downloadURL){          
        setURL(downloadURL)
        setFile(undefined)
        setRealFile("")
        setProcess(undefined)
        notify()
        }else{
          notifyEarr("Soort Something Wroung Please try again")
        }
      })});
    } catch (err) {
      console.log(err)
      notifyEarr("Soorty Image Upload Fail. Please try again")
    }  
  };

  return (
    <div className="w-screen h-screen flexRowCenter   justify-center">
      <Toaster/>
      <Link href={"/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"}>
        <FaArrowAltCircleLeft className=" absolute z-50  top-4 left-4 text-[35px] text-cyan-400 hover:scale-110 trasition  cursor-pointer"/>
      </Link>
      <div onClick={() => setdark(!dark)} className=" absolute z-50  top-4 right-4">
       <DarkModeButton/>
      </div>
      <div onClick={() => setdark(!dark)} className=" absolute z-50  top-4   right-[100px] ">
        <div className='Header-icon hover:bg-slate-200 animate-slowfade shadow-lg hover:scale-100'>
          <MdGroupWork className={`text-[24px] ${dark ? "text-orange-500" : "text-cyan-500"} `}/>
        </div>  
      </div>
      <div className="w-[100%] h-[100%] absolute  overflow-hidden   ">
        <div
          id=""
          className={`w-[100px] h-[100px] rounded-full bg-gradient-to-bl  '${dark ? 'from-black' : 'from-white'  }  to-orange-500  animate-pulse absolute top-36 left-32`}></div>
        <div
          id=""
          className={`w-[100px] h-[100px] rounded-full bg-gradient-to-br ${dark ? 'from-black' : 'from-white' } to-red-600  animate-pulse absolute  top-9 left-[500px]`}
        ></div>
        <div
          id=""
          className={`w-[50px] h-[50px] rounded-full bg-gradient-to-bl ${dark ? 'from-black' : 'from-white' } to-sky-500 animate-pulse absolute bottom-28  left-24`}
        ></div>
        <div className={`w-[250px] h-[250px] bg-gradient-to-br ${dark ? 'from-black' : 'from-white' } to-[#1e29bf] rounded-full absolute  bottom-80  left-72 animate-pulse`}></div>
        <div className={`w-[70px] h-[70px] hidden md:inline  bg-gradient-to-br ${dark ? 'from-black' : 'from-white' } to-[#b71ebf] rounded-full animate-bounce absolute  right-28  top-72`}></div>
        <div className={`w-[100px] h-[100px] hidden md:inline  bg-gradient-to-tr ${dark ? 'from-black' : 'from-white' } to-lime-400  rounded-full animate-pulse absolute  right-[500px]  bottom-[400px] `}></div>
        <div className={`w-[200px] h-[200px] bg-gradient-to-tr ${dark ? 'from-black' : 'from-white' } to-cyan-500 rounded-full absolute   top-6 right-[320px] animate-pulse`}></div>
        <div className={`w-[40px] h-[40px] hidden md:inline  bg-gradient-to-tr ${dark ? 'from-black' : 'from-white' } to-emerald-500 rounded-full  animate-pulse absolute    right-80 bottom-28 `}></div>
        <div className={`w-[150px] h-[150px] hidden md:inline  bg-gradient-to-tr ${dark ? 'from-black' : 'from-white' } to-rose-500 rounded-full  animate-pulse absolute   right-[-50px]  bottom-[250px] `}></div>
      </div>
      <div className="w-[470px] h-[auto] relative bg-[#dddddd] overflow-hidden  shadow-lg dark:bg-[#2e3134] rounded-[3px] z-[999]">
          <div className={`w-[${Math.floor(Process)}] h-[3px] ${Process? "" : "hidden" }  bg-teal-500 shadow-xl shadow-teal-500`}></div>
        <div
          id="linerColour"
          className={`w-[250px] h-[250px] bg-gradient-to-br ${dark ? 'from-black' : 'from-white' } to-[#1e29bf] rounded-full absolute  z-0  animate-ping    top-[-130px] left-[-130px] `}
        ></div>

        <div className="font-bold w-full h-[80px] flexRowCenter text-[20px] z-50  justify-center">
          Create and Account{" "}
          <img src="/food.png" className="w-[50px] h-auto rounded ml-2" />
        </div>
        <input
          type="file"
          accept="image/*"
          ref={FileRef}
          onChange={(e) => handleSelectImg(e)}
          className=" absolute  bottom-0 left-0 hidden "
        />
        <div
          className={`w-[90%]  m-auto relative h-[auto]  overflow-hidden  cursor-pointer ${
            File ? "" : "hover:scale-110 trasition"
          } flexColCenter  items-center justify-center mb-[20px]`}
        >
          <img
            onClick={handleRef}
            src={URL  ?  URL   :  "/user.png" }
            className={`w-[130px] h-auto rounded ${File && !URL ?  "hidden" : ""}  `}
          />
          <div className={`w-[130px] h-[130px] rounded ${File && !URL ?  "" : "hidden"}`}></div>
          <div
            onClick={handleClear}
            className={` absolute top-[5px] right-[5px] ${
              File ? "" : "hidden"
            } p-[4px] z-50 hover:scale-110 
          trasition shadow-lg bg-[black] rounded-full`}
          >
            <HiXMark className="text-[20px] text-red-500" />
          </div>
          <div
            onClick={handleImageUpload}
            className={` absolute top-[40px] right-[5px] ${
              File ? "" : "hidden"
            } p-[4px]
           z-50 hover:scale-110 trasition shadow-lg bg-[white] rounded-full `}
          >
            <GoCheck className="text-[20px] text-emerald-500 " />
          </div>
          <div  className={`w-full [130px] ${  File   ? "" : "hidden"} rounded-[3px] z-[0]  bg-[#dddddd] dark:bg-[#2e3134] `}
          >
            <Cropper
              image={File}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <span className={`${File || URL ? "hidden" : ""}`}>Choose Image</span>
        </div>
        <div className="w-[90%] relative m-auto h-[auto] flexColCenter items-start mb-[20px]">
          <span className="font-bold  text-[black] dark:text-[#A9ABAF] text-[14px]">
            USER NAME
          </span>
          <input
            type={"text"}
            value={Name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
            className=" w-full h-[45px] outline-none text-[17px] dark:bg-[#17181a] rounded-[3px] px-[15px] py-[10px]"
          />
          <p
            className={` ${
              NameFocus && !ValidName && Name.length > 1 ? "inline" : "hidden"
            } 
             w-full h-auto z-40 text-[14px] absolute bottom-[-88px] p-[10px] text-center text-[white] rounded-[8px] bg-white dark:bg-[black] mt-[5px]`}
          >
            <BsExclamation className=" text-[red] absolute  text-[20px]  mr-[10px]" />
            Must begin with a letter.
            <br />
            3 to 24 characters.
            <br />
            only Letters allowed.
          </p>
        </div>
        <div className="w-[90%] h-auto relative m-auto flexColCenter items-start mb-[20px]">
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
          <p
            className={` ${
              EmailFocus && !ValidEmail && Email.length > 1
                ? "inline"
                : "hidden"
            } 
             w-full z-50 h-auto text-[14px] absolute bottom-[-110px] p-[10px] text-center text-[white] rounded-[8px] bg-white dark:bg-[black] mt-[5px]`}
          >
            <BsExclamation className=" text-[red] absolute  text-[20px]  mr-[10px]" />
            Must be Contain Number and letter.
            <br />
            Must begin Finish @gmail.com
            <br />
            8 to 20 characters. 
            <br />
            Please Fill ony Lower Case Letter
          </p>
        </div>        
        <div className="w-[90%] relative m-auto h-[auto] flexColCenter items-start mb-[20px]">
          <span className="font-bold text-[black] dark:text-[#A9ABAF] text-[14px]">
            PASSWORD
          </span>
          <input
            type={"text"}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            className=" w-full h-[45px] outline-none text-[17px] dark:bg-[#17181a] rounded-[3px] px-[15px] py-[10px]"
          />
          <p
            className={` ${
              PasswordFocus && !ValidPassword && Password.length > 1
                ? "inline"
                : "hidden"
            } 
             w-full z-50 h-auto text-[14px] absolute bottom-[-110px] p-[10px] text-center text-[white] rounded-[8px] bg-white dark:bg-[black] mt-[5px]`}
          >
            <BsExclamation className=" text-[red] absolute  text-[20px]  mr-[10px]" />
            Must be Contain Number and letter.
            <br />
            Must be Contain @ .
            <br />
            8 to 24 characters.
            <br />
            Must be Contain Number .
          </p>
        </div>
        <div className="w-[90%] m-auto h-[auto] flexRowCenter  items-center justify-between mb-[0px]">
          <div className="w-[50%] m-auto h-[auto] flexColCenter items-start mb-[19.2px] ml-0">
            <span className="font-bold text-[black] dark:text-[#A9ABAF] text-[14px]">
              PHONE NUMBER
            </span>
            <input
              type={"text"}
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Opction "
              className=" w-full h-[45px] outline-none text-[17px] dark:bg-[#17181a] rounded-[3px] px-[15px] py-[10px]"
            />
          </div>          
            <div className="w-[45%] m-auto h-[auto] flexColCenter items-start mb-[19.2px] ml-0">
              <span className="font-bold text-[black] dark:text-[#A9ABAF] text-[14px]">
                Roles Code
              </span>
              <input
                type={"text"}
                value={RoleCode}
                onChange={(e) => setRoleCode(e.target.value)}
                placeholder="Opction "
                className=" w-full h-[45px] outline-none text-[17px] dark:bg-[#17181a] rounded-[3px] px-[15px] py-[10px]"
              />
            </div>
           
        </div>
        <Link href={"/Login"} >
        <div className="w-[90%] hauto text-blue-500  text-[13px] m-auto translate-y-[-10px]  hover:underline cursor-pointer">Already have account <br /> Log In</div>
        </Link>
        <div className="w-[90%] m-auto h-[auto] flexColCenter  items-center justify-center mb-[20px]">
          <Button
            onClick={HandleUpload}
            className="w-[100%] h-[55px]    bg-[#0099ff] font-bold transition-all  duration-200"
            variant="contained"
            size="large"
            disabled={!Name || !Email || !Password || !URL ? true : false}
          >
            REGISTER
          </Button>
        </div>
      </div>
    </div>
   
  );
}

export default page;

/*

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

        <FormControl className=' bg-white dark:bg-[#17181a] outline-none rounded text-[black] dark:text-white m-0' sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={Roles}
                  onChange={(e) => handleChange(e)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  className='  outline-none text-[black] dark:text-white no-underline' 
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={20}>Normal</MenuItem>
                  <MenuItem value={30}>Member</MenuItem>
                  <MenuItem value={30}>Top Fan</MenuItem>
                </Select>       
              </FormControl>





*/
