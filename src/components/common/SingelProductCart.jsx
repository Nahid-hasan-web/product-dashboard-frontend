import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { IoIosStar } from 'react-icons/io'

const SingelProductCart = () => {
  return (
    <>
    
     {/* --------------- product display board */}


        {/* ----------------------- singel product imfo  */}
        <div className="flex items-center  justify-between mb-5">
            <div className=" w-[82px] h-[82px] rounded-[8px] border border-[#E8EDF2]  text-[12px] font-poppins font-semibold text-secend "><img className="w-full" src="" alt="" /></div>
            <div className=" w-[250px] ">
              <h2 className=" text-[16px] font-poppins font-semibold text-[#262631] ">Cubitt Smart Watch</h2>
              <p className=" text-[12px] font-poppins font-semibold text-secend ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <h2 className=" w-[91px]  text-[12px] font-poppins font-semibold text-[#07070C] ">1450</h2>
            <h2 className=" w-[82px]  text-[12px] font-poppins font-semibold text-[#07070C] flex items-center gap-1 "><GoDotFill className="text-green-500" />Active</h2>
            <h2 className=" w-[24px]  text-[12px] font-poppins font-semibold text-secend ">45</h2>
            <div className=" w-[72px]   font-poppins font-semibold text-[#FEA73E] flex items-center gap-1 ">
              <IoIosStar className="text-[16px]"/>
              <IoIosStar className="text-[16px]"/>  
              <IoIosStar className="text-[16px]"/>
              <IoIosStar className="text-[16px]"/>
              <IoIosStar className="text-[16px]"/>
            </div>
            <h2 className=" w-[80px]  text-[12px] font-poppins font-semibold text-[#07070C] ">20/45</h2>
        </div>

    </>
  )
}

export default SingelProductCart