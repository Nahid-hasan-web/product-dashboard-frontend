import {  Tabs } from "antd";
import React from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import SingelProductCart from "../components/common/SingelProductCart";
import ProductListHead from "../components/common/ProductListHead";

const ManageProduct = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "All Product",
      children: <>
        <ProductListHead/>
          {[1,2,3,4].map((item)=>(
        <SingelProductCart/>
      )) }
      </>,
    },
    {
      key: "2",
      label: "Pending product",
         children: <>
        <ProductListHead/>
          {[1,2,3,4].map((item)=>(
        <SingelProductCart/>
      )) }
      </>,
    },
    {
      key: "3",
      label: "Acive product",
         children: <>
        <ProductListHead/>
          {[1,2,3,4].map((item)=>(
        <SingelProductCart/>
      )) }
      </>,
    },
    {
      key: "4",
      label: "Reject Product",
         children: <>
        <ProductListHead/>
          {[1,2,3,4].map((item)=>(
        <SingelProductCart/>
      )) }
      </>,
    },
  ];
  return (
    <>
        <div className="px-[23px] py-[42px]">
        <CommonHead CommonHead_content={'All Products'}/>
        <BreadCrumb pageName={'Products'} pageLink={'/products'} subpageLink={'/manage-prouduct'}  subpage={'Manage product'}/>
        <div className="w-full p-[25px] mt-[18px] bg-white rounded-[16px]">
            <Tabs defaultActiveKey="1" itemActiveColor={'#7364DB'} items={items} onChange={onChange} />
        </div>
        </div>
    </>
  );
};

export default ManageProduct;
