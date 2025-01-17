import React from 'react'
import { MdFactory } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa6";
import { SiBasicattentiontoken } from "react-icons/si";

const DashCreate = () => {
  return (
    <div className=' flex gap-5 w-full mt-5  justify-center '>
        <BoxWrapper>
      
       <MdFactory  className=' text-orange-600 ml-5' fontSize={30} />
        <div className='  text-sm  ml-10'>
        <p className=' font-semibold'>2500</p>
            <span className=' font-normal text-gray-500'>Company</span>
           
           
        </div>
      
       </BoxWrapper>
        <BoxWrapper>
        <FaCodeBranch  className=' text-blue-500  mr-2'  fontSize={30} />
        <div className=' text-sm ml-10'>
            <p className=' font-semibold '>1000</p>
            <span className=' font-normal text-gray-500 '>Branches</span>
        </div>
        </BoxWrapper>
        <BoxWrapper >
        <SiBasicattentiontoken  className=' mr-2 text-red-800' fontSize={30} />
        <div className=' text-sm ml-10'>
            <p className=' font-semibold '>3500</p>
            <span className=' font-normal text-gray-500'>Attendece</span>
        </div>
        </BoxWrapper>
       
    </div>
  )
}
export default DashCreate
function BoxWrapper ({children}){
    return <div className=' rounded-md p-5 border border-gray-300 bg-slate-100 text-black gap-5 text-xl flex justify-center  items-center w-[350px]'>{children}</div>
    
}