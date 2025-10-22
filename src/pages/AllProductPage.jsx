import React from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import { GoDotFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";

const AllProductPage = () => {
  return (
    <>
      <div className="flex-1 px-[23px] py-[42px]">
        <CommonHead CommonHead_content={"All Products"} />
        <BreadCrumb
          firstPage={"Products"}
          firstPageLink={"/products"}
          subpage={"All Product"}
          subpageLink={"/allProduct"}
        />
         <div className="w-full p-[25px] rounded-[16px] bg-white mt-[18px]">
          {/* ------------------ all product list */}
          <div className="flex justify-between">
            <h2 className=" w-[82px]  text-[12px] font-poppins font-semibold text-secend ">Image</h2>
            <h2 className=" w-[250px]  text-[12px] font-poppins font-semibold text-secend ">Name</h2>
            <h2 className=" w-[91px]  text-[12px] font-poppins font-semibold text-secend ">Price</h2>
            <h2 className=" w-[82px]  text-[12px] font-poppins font-semibold text-secend ">Status</h2>
            <h2 className=" w-[24px]  text-[12px] font-poppins font-semibold text-secend ">QTY</h2>
            <h2 className=" w-[72px]  text-[12px] font-poppins font-semibold text-secend ">Rating</h2>
            <h2 className=" w-[80px]  text-[12px] font-poppins font-semibold text-secend ">Sale</h2>
          </div>
        <hr className="text-[#E8EDF2] mt-[18px] mb-[14px]" />
        {/* ----------------------- singel product imfo */}
        <div className="flex items-center  justify-between">
            <div className=" w-[82px] h-[82px] rounded-[8px] border border-[#E8EDF2]  text-[12px] font-poppins font-semibold text-secend "><img className="w-full" src="" alt="" /></div>
            <div className=" w-[250px] ">
              <h2 className=" text-[16px] font-poppins font-semibold text-[#262631] ">Cubitt Smart Watch</h2>
              <p className=" text-[12px] font-poppins font-semibold text-secend ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <h2 className=" w-[91px]  text-[12px] font-poppins font-semibold text-[#07070C] ">1450</h2>
            <h2 className=" w-[82px]  text-[12px] font-poppins font-semibold text-[#07070C] flex items-center gap-1 "><GoDotFill className="text-green-500" />Active</h2>
            <h2 className=" w-[24px]  text-[12px] font-poppins font-semibold text-secend ">45</h2>
            <div className=" w-[72px]  text-[12px] font-poppins font-semibold text-[#FEA73E] flex items-center gap-1 ">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <h2 className=" w-[80px]  text-[12px] font-poppins font-semibold text-[#07070C] ">20/45</h2>
        </div>

      </div>
      </div>
    </>
  );
};

export default AllProductPage;
