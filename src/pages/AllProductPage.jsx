import React from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import { GoDotFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { Pagination } from "antd";
import SingelProductCart from "../components/common/SingelProductCart";
import ProductListHead from "../components/common/ProductListHead";
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

        {/* ------------------ pagination */}
        <div className="w-full p-[25px] rounded-[16px] bg-white mt-[18px] ">
          <ProductListHead/>
          <SingelProductCart />
          <div className="mt-5">
          <Pagination align="end" defaultCurrent={6} total={500} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
