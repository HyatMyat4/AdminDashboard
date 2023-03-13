"use client"
import React from 'react'
import AdminBox from './AdminBox'
  import OverviewChart from './OverviewChart'; 
type Props= {
  data : All_Users[]
}
function DashboardFirstRow({data} : Props) {


  return (
    <div className='w-full h-[100%] flexColCenter 6xl:flexRowCenter items-end   justify-center '>
         <AdminBox data={data} />
        <div className='w-[98%] 6xl:w-[64%] h-[40%] 775:h-[50%] lg:h-[62%]  6xl:h-[95%] rounded-[5px]   dark:bg-[#191f48] m-auto mr-auto 6xl:mr-[12px] '>   
          <OverviewChart view="sales" isDashboard={true}  />        
        </div>
    </div>
  )
}

export default DashboardFirstRow