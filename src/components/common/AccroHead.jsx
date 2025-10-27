import React from 'react'

const AccroHead = ({accroHeadContent , accroHeadNo , accroNoBg}) => {
  return (
    <>
        <div className='flex gap-1 items-center'>
            <h2 className='text-base font-normal font-poppins text-secend'>{accroHeadContent}</h2>
            <div className={`w-fit h-fit p-1 rounded-[2px] flex justify-center text-secend ${accroNoBg} `}>{accroHeadNo}</div>
        </div>
    </>
  )
}

export default AccroHead