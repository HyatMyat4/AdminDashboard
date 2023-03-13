import { FaShoppingCart , FaStar , FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { OrderproductEngin } from "../../Redux/ActionSlice"
import toast, { Toaster } from 'react-hot-toast';
import Image from "next/image";
type Props = {
  data : FoodProduct ;
}
const SwiperSlideComponent = ({data} : Props) => {
  const dispatch = useDispatch()
  const notify = (e : string) => toast.success(`Success Order ${e}`);
  const handleAdd = (e : string) => {
    dispatch(OrderproductEngin(data))
    notify(e)
  }
  return (
    <>
    <Toaster/>
    <div key={data.FoodImage} className="w-full h-full flexColCenter 0lg:flexRowCenter justify-around dark:bg-[black] pt-[0px] 0lg:pt-[100px]  ">
            <div className="w-[350px] animate-slideright2 mt-[100px] inline 0lg:hidden">
            <Image
                alt=''
                src={data.FoodImage}
                width={1920}
                height={1080}
                className='w-full h-auto'
                       
            /> 
      </div>
      <div className="flex flex-col items-center 0lg:items-start justify-start p-[15px] 3lg:p-0 3lg:w-[70%] 0lg:w-[40%] mt-0 0lg:mt-[50px] ml-[10px]">
         <span className="text-[25px] font-bold text-orange-500 animate-slideleft mb-[10px] ">Today Our Spical Dish</span>     
         <span id='cursive' className="text-[40px] font-bold text-slate-800 animate-slideleft2 mb-[15px]">{data.name}</span>   

         <span id='cursive' className=" text-left text-gray-500 animate-slideleft3 ">
          {data.Foodinfo}
         </span> 
         <span  className=" text-[20px] mt-[10px]  font-bold text-[gold] animate-slideleft3 flexRowCenter">       
          <FaStar/>
          <FaStar/>
          <FaStar/> 
          <FaStarHalfAlt/>
         </span> 
         <span className="text-[30px] mt-[10px] text-emerald-400 animate-slideleft3    ">$ <span>{data.Price}</span></span>
         <div onClick={() => handleAdd(data.name)}
         className="flexRowCenter px-[14px] animate-slideleft4   py-[8px] bg-orange-500 rounded  text-slate-100 hover:scale-110 
         transition-all duration-75 ease-in cursor-pointer my-[15px] ">
            Order Now <FaShoppingCart className='text-[23px]  ' /> 
         </div>
      </div>
      <div className="w-[350px] h-auto animate-slideright2  hidden 0lg:inline">
             <Image
                alt=''
                src={data.FoodImage}
                width={1920}
                height={1080}
                className='w-full h-auto'
                       
            /> 
      </div>
    </div>
    </>
  )
}

export default SwiperSlideComponent