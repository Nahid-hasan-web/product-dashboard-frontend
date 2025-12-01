import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";

const SingelProductCart = ({
  image,
  title,
  discountPrice,
  status,
  qty,
  sale,
}) => {
  const [showOption, setShowOption] = useState(false);
  return (
    <>
      {/* ----------------------- singel product imfo  */}
      <div className="flex items-center  justify-between mb-5 relative">
        <div className=" w-[82px] h-[82px] rounded-[8px] border border-[#E8EDF2]  text-[12px] font-poppins font-semibold text-secend ">
          <img className="w-full" src={image} alt={title} />
        </div>
        <div className=" w-[250px] ">
          <h2 className=" text-[16px] font-poppins font-semibold text-[#262631] ">
            {title}
          </h2>
        </div>
        <h2 className=" w-[91px]  text-[12px] font-poppins font-semibold text-[#07070C] ">
          {discountPrice}
        </h2>
        <h2 className=" w-[82px]  text-[12px] font-poppins font-semibold text-[#07070C] flex items-center gap-1 ">
          {status === "pending" ? (
            <GoDotFill className="text-yellow-500" />
          ) : status === "active" ? (
            <GoDotFill className="text-green-500" />
          ) : status === "cancel" ? (
            <GoDotFill className="text-red-500" />
          ) : null}
          {status}
        </h2>
        <h2 className=" w-[24px]  text-[12px] font-poppins font-semibold text-secend ">
          {qty}
        </h2>

        <h2 className=" w-[80px]  text-[12px] font-poppins font-semibold text-[#07070C] ">
          20/45
        </h2>
        <button
          onClick={() => setShowOption(!showOption)}
          className=" absolute top-[50%] translate-y-[-50%] right-0 "
        >
          <RxDotsHorizontal className="text-lg" />
          {showOption && (
            <div className="w-[60px] p-2  absolute  top-[100%] right-0 roudned-[15px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] ">
              <button className="text-sm font-poppins font-medium text-secend mb-5">
                Active
              </button>
              <button className="text-sm font-poppins font-medium text-secend">
                Reject
              </button>
            </div>
          )}
        </button>
      </div>
    </>
  );
};

export default SingelProductCart;
