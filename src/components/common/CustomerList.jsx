import React from 'react'

const CustomerList = ({ one, two, three, five, six }) => {
  return (
    <>
     <div className="w-full  rounded-[5px] py-[13px] border-b border-b-gray-300  px-2">
      <div className="flex items-center gap-4 text-[#9A9AAF] text-base font-normal font-poppins">
        {/* Checkbox - 18x18 and colored */}
        <div className="flex items-center">
          <input
            type="checkbox"
            aria-label="select all orders"
            className="w-[18px] h-[18px] accent-brandColor border-[#9A9AAF]"
          />
        </div>

        {/* Header titles - match design order and spacing */}
        <div className="flex flex-1 items-center gap-8  justify-between">
          <span className="min-w-[120px]">{one}</span>
          <span className="min-w-[300px]">{two}</span>
          <span className="min-w-[180px]">{three}</span>
          <span className="min-w-[150px]">{five}</span>
          <span className="min-w-[100px]">{six} Tk</span>
        </div>
      </div>
    </div>

    </>
  )
}

export default CustomerList