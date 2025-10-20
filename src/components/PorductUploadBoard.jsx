import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const PorductUploadBoard = () => {
  return (
    <>
      <div className=" flex-1 p-[50px] border border-[#E8EDF2]  bg-white rounded-[16px] mt-[18px]">
        <div className="productRow flex  justify-between">
    {/* ---------------- column 1 */}
      <div>
        {/* --------------- product name */}
        <div className=" ">
          <h2 className="commonHead">Product Name</h2>
          <input
            type="text"
            placeholder="Type name here"
            className="w-full lg:w-[527px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] mt-[10px] inputText focus-within:border-brandColor"
          />
        </div>
        {/* --------------- product name */}
        <div className="mt-[48px] ">
          <h2 className="commonHead">Product Name</h2>
          <input
            type="text"
            placeholder="Type name here"
            className="w-full lg:w-[527px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] mt-[10px] inputText focus-within:border-brandColor"
          />
        </div>
        {/* --------------- product Catagory */}
        <div className=" w-fit mt-[48px] relative">
          <h2 className="commonHead">Category</h2>
          <IoMdArrowDropdown className=" absolute top-[60%] right-4 text-xl text-secend z-10" />
          <select
            className="w-full relative lg:w-[527px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] mt-[10px] inputText focus-within:border-brandColor appearance-none"
          name="" id="">
            <option value="">Select Catagory</option>
            <option value="">T-shirt</option>
            <option value="">Panjabi</option>
          </select>
        </div>
        {/* --------------- product more info  */}
        <div className="w-fit flex flex-wrap gap-[23px] mt-[48px]">
          <div >
            <h2 className="commonHead">Regular Price</h2>
            <input placeholder="$500" className="w-[252px] h-[48px]  border border-[#E8EDF2] rounded-[8px] inputText" type="text" />
          </div>
          <div >
            <h2 className="commonHead">Discount percentage ( If any)</h2>
            <input placeholder="8%" className="w-[252px] h-[48px]  border border-[#E8EDF2] rounded-[8px] inputText" type="text" />
          </div>
          
        </div>
        <div className="w-fit flex flex-wrap gap-[23px] mt-[48px]">
          <div >
            <h2 className="commonHead">Stock quantity</h2>
            <input placeholder="200" className="w-[252px] h-[48px]  border border-[#E8EDF2] rounded-[8px] inputText" type="text" />
          </div>
              <div className=" w-fit  relative">
                   <IoMdArrowDropdown className=" absolute top-[60%] right-4 text-xl text-secend z-10" />
            <h2 className="commonHead">Tags ( If any)</h2>
          <select
            className=" relative w-[252px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] inputText focus-within:border-brandColor appearance-none"
          name="" id="">
            <option value="">Select Tags</option>
            <option value="">New</option>
            <option value="">Offter</option>
            <option value="">Sale</option>
          </select>
          </div>
          
        </div>
      </div>
      {/* -------------- column 2 */}
      <div>
        <div className="w-full lg:w-[503px] h-[463px]  border border-borderColor  rounded-[8px]">
          <input type="file" />
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default PorductUploadBoard;
