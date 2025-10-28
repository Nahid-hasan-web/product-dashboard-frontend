import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";

const SingelOrderinfo = ({
  orderId = "#25413",
  customerName = "Jerome Bell",
  customerAvatar = "",
  paymentMethod = "American Express",
  date = "17 Oct, 2022",
  status = "Delivered",
  total = "$106.58",
  onActionClick = () => {},
}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 text-[#9A9AAF] text-base font-normal font-poppins py-3">
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
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#F2F4F7] flex items-center justify-center">
              {customerAvatar ? (
                <img
                  src={customerAvatar}
                  alt={customerName}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[12px] text-[#9A9AAF]">
                  {customerName.charAt(0)}
                </span>
              )}
            </div>
            <span>{customerName}</span>
          </span>

          <span className="min-w-[180px]">{paymentMethod}</span>

          <span className="min-w-[150px]">{date}</span>

          <span className="min-w-[150px] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            <span>{status}</span>
          </span>

          <span className="min-w-[100px]">{total}</span>
        </div>

        <div className="min-w-[150px] flex items-center justify-end">
          <button onClick={onActionClick} className="text-[#9A9AAF]">
            <RxDotsHorizontal className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingelOrderinfo;
