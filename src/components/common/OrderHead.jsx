import React from "react";

const OrderHead = () => {
  return (
    <div className="w-full">
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
          <span className="min-w-[120px]">Order ID</span>
          <span className="min-w-[300px]">Customer name</span>
          <span className="min-w-[180px]">Payment Method</span>
          <span className="min-w-[150px]">Date</span>
          <span className="min-w-[150px]">Status</span>
          <span className="min-w-[100px]">Total</span>
        </div>

        <div className="min-w-[150px]">Actions</div>
      </div>
    </div>
  );
};

export default OrderHead;
