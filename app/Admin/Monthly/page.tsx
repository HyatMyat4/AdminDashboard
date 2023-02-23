import React from 'react'
import MonthlyChart from './MonthlyChart'

function page() {
  return (
    <div className='w-full h-[93vh] '>
    <div className='w-full h-[7vh] flexRowCenter justify-between  overflow-hidden   pl-[13px]'>
      <div className='w-full h-full flexColCenter items-start'>
        <span className=' font-bold text-[20px]'>MONTHLY SALES</span>
        <span className=' font-bold text-[15px] text-gray-500 '>Chart of monthly sales</span>
      </div>

    </div>
    <div className='w-full h-[86vh]'>
      <div className='w-full h-[95%]'>
         <MonthlyChart />
      </div>         
    </div>
</div>
  )
}

export default page