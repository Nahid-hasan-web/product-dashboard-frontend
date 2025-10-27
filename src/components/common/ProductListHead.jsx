import React from "react";

const ProductListHead = () => {
  return (
    <>
      {" "}
      {/* ------------------ all product list */}
      <div className="flex justify-between ">
        <h2 className=" w-[82px]  text-[12px] font-poppins font-semibold text-secend ">
          Image
        </h2>
        <h2 className=" w-[250px]  text-[12px] font-poppins font-semibold text-secend ">
          Name
        </h2>
        <h2 className=" w-[91px]  text-[12px] font-poppins font-semibold text-secend ">
          Price
        </h2>
        <h2 className=" w-[82px]  text-[12px] font-poppins font-semibold text-secend ">
          Status
        </h2>
        <h2 className=" w-[24px]  text-[12px] font-poppins font-semibold text-secend ">
          QTY
        </h2>
        <h2 className=" w-[72px]  text-[12px] font-poppins font-semibold text-secend ">
          Rating
        </h2>
        <h2 className=" w-[80px]  text-[12px] font-poppins font-semibold text-secend ">
          Sale
        </h2>
      </div>
      <hr className="text-[#E8EDF2] mt-[18px] mb-[14px]" />
    </>
  );
};

export default ProductListHead;
