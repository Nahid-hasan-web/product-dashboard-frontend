import React from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";

const AllProductPage = () => {
  return (
    <>
      <div className="flex-1 px-[23px] py-[42px]">
        <CommonHead CommonHead_content={"All Products"} />
        <BreadCrumb firstPage={'Products'} firstPageLink={'/products'}  subpage={'All Product'} subpageLink={'/allProduct'} />
      </div>
    </>
  );
};

export default AllProductPage;
