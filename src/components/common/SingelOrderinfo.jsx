import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";

const SingelOrderinfo = ({
  orderId ,
  customerName ,
  paymentMethod ,
  date ,
  status,
  total ,
  onActionClick = () => {},
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 text-[#9A9AAF] text-base font-normal font-poppins py-[15px] border-b border-[#E8EDF2] px-2">
        {/* Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            aria-label={`select order ${orderId}`}
            className="w-[18px] h-[18px] accent-[#9A9AAF] border-[#9A9AAF] rounded-sm focus:ring-0"
          />
        </div>

        {/* Columns */}
        <div className="flex flex-1 items-center gap-8 justify-between">
          <span className="min-w-[120px]">{orderId}</span>

          <span className="min-w-[300px] flex items-center gap-3">
            <span>{customerName}</span>
          </span>

          <span className="min-w-[180px]">{paymentMethod}</span>


          <span className="min-w-[150px]">{date}</span>

          <span className="min-w-[150px] flex items-center gap-2">
            <span>{status}</span>
          </span>

          <span className="min-w-[100px]">{total}Tk</span>
        </div>

        <div className="min-w-[150px]">
          <button onClick={onActionClick} className="text-[#9A9AAF]">
            <RxDotsHorizontal className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingelOrderinfo;
