"use client"
import React from 'react'
import UserOrder_data from './UserOrder_data'
type Props = {
  User_Orders : any
}
function User_Order({User_Orders} : Props) {
 
  return (
    <div id="customscroll" className='w-full h-full overflow-y-scroll' >
       { User_Orders ? User_Orders.map((data : User_Orders  ) => (      
          <UserOrder_data data={data} />       
       ))        
        : "Loding"
       }
    </div>
  )
}

export default User_Order