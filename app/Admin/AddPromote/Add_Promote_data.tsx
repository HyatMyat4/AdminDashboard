"use client"
import React from 'react'
import { BsFillImageFill } from 'react-icons/bs'
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { HiOutlineXMark } from 'react-icons/hi2';
import { PromoteOpenCloseEngin , PromoteOpenCloseC } from "../../../Redux/ActionSlice"
import { uploadBytesResumable, ref,  getDownloadURL  } from "firebase/storage";
import { useDispatch , useSelector } from 'react-redux';
import { useState , useRef , useEffect  } from 'react';
import { app , storage } from '../../../FireBaseConfig';
import { Add_Promote_FoodProducts } from '../../../Graphql/Mutations/AddPromoteProduct'
import toast, { Toaster } from 'react-hot-toast';
import { AddPromotedataEngin , Promote_ProductC } from "../../../Redux/ActionSlice"
import LinearProgress from '@mui/material/LinearProgress';
import Image from 'next/image';
function Add_Promote_data() {
    const dispatch = useDispatch()
    const openClose = useSelector(PromoteOpenCloseC)
    const Get_data = useSelector(Promote_ProductC)
    const imageRef = React.useRef<HTMLInputElement>(null)
    const [imageFile , setimageFile] = useState()
    const [URL , setURL ] = useState('')
    const [process , setprocess] = useState('')
    const [FoodName , setFoodName] = useState('')
    const [FoodInformation , setFoodInformation] = useState('')
    const [FoodPrice , setFoodPrice] = useState('')
    const [OutOfStock , setOutOfStock] = useState('')
      // @ts-ignore
    const [PromoteProduct , setPromoteProduct] =  React.useState<PropsCross_Promote>({})
  
    const notify = () => toast.success('Add Promote Product Success')
    const notify2 = () => toast.success('Add Image Success')
    const notifyEarr = (e : any) => toast.error(e.toString())

    const handleRefClick = () => {
      imageRef.current?.click()
    }
    const handleSetFile = (e : any ) => {
      setimageFile(e.target.files[0])
    }
 

    const uploadimage = () => {   
      if(!imageFile) {return}
        // @ts-ignore
      const storageRef = ref(storage, `${uuidv4()}.`+imageFile.type.slice(6));
      // @ts-ignore
      const metadata = { contentType: imageFile.type };
      const uploadTask = uploadBytesResumable(storageRef, imageFile , metadata);
      
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           
        notify2()
        // @ts-ignore   
        setprocess(progress) 
      },(err) => {
        console.warn(err.message)
      },  () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setURL(downloadURL)
        })});
    }
   
    const handleUpload = async () => {
      if( !FoodName || !FoodInformation || !FoodPrice ||  !OutOfStock ||  !URL ) return;
      try{
       
      const {data} = await Add_Promote_FoodProducts(PromoteProduct)
      if(data) {
        notify()
        dispatch(AddPromotedataEngin([data.addPromoteProduct]))    
        dispatch(PromoteOpenCloseEngin(false))      
        setURL('')
        setFoodName('')
        setFoodInformation('')
        setFoodPrice('')
        setOutOfStock('')
        setprocess('')
        
      }
      } catch (err){
        console.warn(err);
      }
    }  

  useEffect(() => {
    uploadimage()   
  }, [setimageFile , imageFile])

  useEffect(() => {     
    setPromoteProduct(
      { name: FoodName ,
        CanOrder: true ,
         Price:FoodPrice ,
          Outofstock: OutOfStock ,
           Foodinfo:FoodInformation ,
           FoodImage : URL  
          })
  }, [FoodName , FoodInformation , FoodPrice , OutOfStock , URL ])

  return (
    <div className={` absolute top-0 left-0 w-full h-full z-[999999] ${openClose ? "" : "hidden"} bg-[#0000003c] flexRowCenter`}>
        <Toaster/>
         <div onClick={() => dispatch(PromoteOpenCloseEngin(false))}   className=' absolute right-[10px] top-[10px] p-[5px] bg-[#ffd677] text-black rounded-full shadow-lg hover:scale-110 trasition '>
            <HiOutlineXMark className='text-[30px] cursor-pointer'/>
        </div>
        <input 
                type='file'
                accept="image/*" 
                ref={imageRef}   
                onChange={(e) => handleSetFile(e) }           
                className=' absolute hidden bottom-0 right-0 '
                /> 
        <div className='w-[98%] 670:w-[85%] lg:w-[60%] 6xl:w-[40%] h-[600px] overflow-hidden m-auto flexRowCenter dark:shadow-white bg-[#e9e9e9] dark:bg-[black] shadow-lg  rounded-[5px] z-30 '>
            <div className='w-[50%] h-auto  rounded-[5px] m-auto hidden 2lg:inline '>
                    {process && !URL ?  
                      <div className="w-[90%] m-auto mb-[15px]">
                        {Math.floor(Number(process))}%
                      <LinearProgress variant="determinate" value={Number(process)} />
                      </div>
                  : ""  }
                  <div className='w-[90%] h-auto overflow-hidden  m-auto '>
                      <Image
                        alt=''
                        src={ URL ? URL  : 'https://firebasestorage.googleapis.com/v0/b/fir-backend1-ea141.appspot.com/o/home-img-3.png?alt=media&token=1342fdc3-d505-4fc0-a87b-d54a84d9d439' }
                        width={1920}
                        height={1080}
                        className='w-full h-auto overflow-hidden   rounded-[5px]'
                        /> 
                  </div>                
                 <div onClick={handleRefClick} className='w-[200px]  px-[10px] mt-[10px] animate-slowfade py-[5px]  trasition hover:scale-110 cursor-pointer m-auto text-white   bg-sky-600 rounded-[5px] flexRowCenter'>
                 <BsFillImageFill   className=' text-orange-400 text-[30px]  cursor-pointer'/>
                  <span className='ml-[10px] font-bold'>Choose Image</span>
                 </div>
            </div>
            <div className='w-[100%] 2lg:w-[50%] h-auto m-auto   animate-slideright2   rounded-[5px] '>
                 <div onClick={handleRefClick} className='w-[90%] px-[10px] flex 2lg:hidden mt-[10px] animate-slowfade py-[5px]  trasition hover:scale-110 cursor-pointer m-auto text-white   bg-sky-600 rounded-[5px] flexRowCenter justify-center'>
                 <BsFillImageFill   className=' text-orange-400 text-[30px]  cursor-pointer'/>
                  <span className='ml-[10px] font-bold'>Choose Image</span>
                 </div>
                 <div className='w-[90%] h-auto flexColCenter m-auto items-start pt-[10px]'>
                    <span className='text-[14px]'>Food Name</span>
                    <input
                     value={FoodName}
                     type="text"
                     onChange={(e) => setFoodName(e.target.value)}
                     className='w-full h-[40px] rounded-[5px]  outline-none px-[10px] py-[4px] '
                    />
                 </div>
                 <div className='w-[90%] h-[200px] flexColCenter m-auto items-start pt-[10px]'>
                    <span className='text-[14px]'>Food Information</span>
                    <textarea    
                      id='scrollnone'    
                      value={FoodInformation}    
                      onChange={(e) => setFoodInformation(e.target.value)}                                 
                      className='w-full h-full resize-none  rounded-[5px]   px-[15px] py-[10px] outline-none '
                 ></textarea>
                 </div>
                 <div className='w-[90%] h-auto flexColCenter m-auto items-start pt-[10px]'>
                    <span className='text-[14px]'>Food Price</span>
                    <input
                     value={FoodPrice}
                     type="text"
                     onChange={(e) => setFoodPrice(e.target.value)} 
                     className='w-full h-[40px] rounded-[5px]  outline-none px-[10px] py-[4px] '
                    />
                 </div>
                 <div className='w-[90%] h-auto flexColCenter m-auto items-start pt-[10px]'>
                    <span className='text-[14px]'>Out Of Stock</span>
                    <input
                     type="text"
                     value={OutOfStock}
                     onChange={(e) => setOutOfStock(e.target.value)}
                     className='w-full h-[40px] rounded-[5px]  outline-none px-[10px] py-[4px] '
                    />
                 </div>
                 <div onClick={handleUpload} className='w-[90%] h-[50px] m-auto mt-[15px]'>
                <Button 
                id='cursive'
                className='w-[100%] h-[100%] bg-sky-600 font-bold ' 
                variant="contained" 
                size="large"              
                >
                    Upload
                </Button>
                </div>
               
            </div>
        </div>
        <div className='w-[98%] 670:w-[85%] lg:w-[60%] 6xl:w-[40%] h-[600px] animate-slowfade2 z-0 absolute inset-0 bg-[#9AE1F0] shadow-2xl origin-bottom-left -rotate-2 m-auto flexRowCenter rounded-[5px] '>
             
        </div>
    </div>
  )
}

export default Add_Promote_data