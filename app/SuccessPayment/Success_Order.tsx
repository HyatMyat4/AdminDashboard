import React from 'react'
import Image from 'next/image'
function Success_Order({product} : any) {
  return (
    <div key={product.images.slice(77)}
     className="w-[98%] h-auto 4se:h-[200px] m-auto rounded flexColCenter 4se:flexRowCenter animate-slowfade relative justify-between bg-[#ececec] dark:bg-[#0f0f0f] mt-[10px] "
    >
      <div className='w-[95%] md:w-[50%] 4se:w-[300px] xl:w-[30%] h-full overflow-hidden rounded pt-[8px] md:pt-[0] '>
         <Image
            alt=''
            src={product.images}
            width={1920}
            height={1080}
            className='w-full h-full xl:h-auto  rounded'
         />
      </div>
      <div className='w-[95%] md:w-[70%] h-full flexColCenter justify-center p-[10px]'>
          <span className='font-bold text-[20px] animate-slideright3 ' >{product.name}</span>
          <p className=' text-[12px] 1xs:text-[14px] text-gray-400 text-center animate-slideright2 ' >{product.description}</p>
          <span className='font-bold  text-teal-500 animate-slideright ' >$ {product.Price}</span>  
          <div className=' absolute top-[6px] right-[6px] px-[5px] py-[2px]  4se:py-[3px] text-[13px] bg-orange-500 text-white rounded-full animate-slideright' >x{product.quantity}</div>
      </div>
    </div>
  )
}

export default Success_Order