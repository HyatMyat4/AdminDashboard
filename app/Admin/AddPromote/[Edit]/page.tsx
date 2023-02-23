import React from 'react'
import { Single_Promote_FoodProducts } from '../../../../Graphql/Mutations/Single_PromoteFood'
import Food_Promote_Component from './Food_Promote_Component'
type Props = {
    params : {
      Edit : string
    }
  }
async function page({params : {Edit}} : Props) {
  const id = Edit 
  const  {data} = await Single_Promote_FoodProducts({id})

  return (
    <div className='w-full h-[93vh] flexRowCenter justify-center'>
        <Food_Promote_Component data={data.SinglePromoteProduct} id={id} />
    </div>
  )
}

export default page