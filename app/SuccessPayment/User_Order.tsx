"use client"
import React from 'react'
import { Get_Single_Order } from "../../Graphql/Queries/User_Order"
import { useEffect , useState  } from "react"
import Success_Order from './Success_Order'
import { useDispatch } from 'react-redux'
import { TotalCostEngin } from '../../Redux/ActionSlice'
function User_Order() {
    const dispatch = useDispatch()
    const [ Order_Product , setOrder_Product ] = useState<any>()
    const Order_id = localStorage.getItem("UserLastOrder_id")   

    console.log(Order_id,'🍡🍡')
    const Call_order = async  () => {
        const { data } = await Get_Single_Order(Order_id)
        setOrder_Product(data.User_Order)
        dispatch(TotalCostEngin(data.User_Order.amount))
    }   
    

    useEffect(() => {
        Call_order()
    }, [])
    

    console.log(Order_Product,'🌹🌹🌹')
  return (
    <div id="scrollnone" className='w-full h-full overflow-y-scroll pb-[20px] relative ' >        
          { Order_Product ? Order_Product.Order_data?.map((product : any) => (
             <Success_Order key={product.images.slice(77)} product={product}/>
          ))


: ""
}
    </div>
  )
}

export default User_Order