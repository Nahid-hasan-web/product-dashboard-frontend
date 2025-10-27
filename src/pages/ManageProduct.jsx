import {  Tabs } from "antd";
import React from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import SingelProductCart from "../components/common/SingelProductCart";
import ProductListHead from "../components/common/ProductListHead";
import AccroHead from "../components/common/AccroHead";

const ManageProduct = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: <AccroHead accroHeadContent={"All Product"} accroHeadNo={"2"} accroNoBg={'bg-[#ECE663]'}/>,
      children: <>
        <ProductListHead/>
          {[1,2,3,4].map((item)=>(
        <SingelProductCart/>
      )) }
      </>,
    },
    {
      key: "2",
      label: <AccroHead accroHeadContent={"Active Product"} accroHeadNo={"80"} accroNoBg={'bg-[#50D1B2]'}/>,
         children: <>
        <ProductListHead/>
          {[1,2,3,4].map((item)=>(
        <SingelProductCart/>
      )) }
      </>,
    },
    {
      key: "3",
      label: <AccroHead accroHeadContent={"Pending Product"} accroHeadNo={"20"} accroNoBg={'bg-[#FB7BB8]'}/>,
         children: <>
        <ProductListHead/>
          {[1,2,3,4].map((item)=>(
        <SingelProductCart/>
      )) }
      </>,
    },
    {
      key: "4",
      label: <AccroHead accroHeadContent={"All Product"} accroHeadNo={"2"} accroNoBg={'bg-red-300'}/>,
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
