import React from "react";

const PorductUploadBoard = () => {
  return (
    <>
      <div className="w-screen p-[50px] border border-[#E8EDF2]  bg-white rounded-[16px] mt-[18px]">
        {/* --------------- product name */}
        <div className=" ">
          <h2 className="commonHead">Product Name</h2>
          <input
            type="text"
            placeholder="Type name here"
            className="w-full lg:w-[527px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] mt-[10px] inputText focus-within:border-brandColor"
          />
        </div>
      </div>
    </>
  );
};

export default PorductUploadBoard;
