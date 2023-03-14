import React from 'react'
import { NewtonsCradle } from '@uiball/loaders'
import { LeapFrog } from '@uiball/loaders'
import { AiOutlineLoading } from 'react-icons/ai'
import { DotPulse } from '@uiball/loaders'



export default function loading() {
  return (
    <div className='w-full h-full relative flex flex-row items-center justify-center   '>
      <div className='w-[100px] h-[100px] '>
      <DotPulse size={50} speed={1.3} color="#F97316" /> 
      </div>
  
      </div>
  )
}
