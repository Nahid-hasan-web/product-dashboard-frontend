import {  Tabs } from "antd";
import React, { useEffect, useState } from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import SingelProductCart from "../components/common/SingelProductCart";
import ProductListHead from "../components/common/ProductListHead";
import AccroHead from "../components/common/AccroHead";
import { productApi } from "../api/productApi";

const ManageProduct = () => {

  const [status ,setStatus] =  useState('all')
  const [productData , setProductData] = useState(null)




  useEffect(()=>{
    try{
  const apiFun = async ()=>{
    const apiData =   await productApi.filterByStatus({status})
    setProductData(apiData)
  }
    apiFun()
    }
    catch(err){
      console.log(err)
    }
  },[status])

  
  console.log(productData)

  const items = [
    {
      key: "all",
      label: <AccroHead accroHeadContent={"All Product"} accroHeadNo={productData?.data?.allstatusCount} accroNoBg={'bg-[#ECE663]'}/>,
      children: <>
        <ProductListHead/>
          {productData?.data?.products.map((item , i)=>(
        <SingelProductCart key={item._id} image={item.thumbnail} title={item.title} slug={item.slug} discountPrice={item.discontPrice} status={item.status} />
      )) }
      </>,
    },
    {
      key: "active",
      label: <AccroHead accroHeadContent={"Active Product"} accroHeadNo={productData?.data?.activestatusCount} accroNoBg={'bg-[#50D1B2]'}/>,
         children: <>
        <ProductListHead/>
          {productData?.data?.products.map((item)=>(
         <SingelProductCart key={item._id} image={item.thumbnail} title={item.title} slug={item.slug} discountPrice={item.discontPrice} status={item.status} />
      )) }
      </>,
    },
    {
      key: "pending",
      label: <AccroHead accroHeadContent={"Pending Product"} accroHeadNo={productData?.data?.pedingstatusCount} accroNoBg={'bg-[#FB7BB8]'}/>,
         children: <>
        <ProductListHead/>
          {productData?.data?.products.map((item)=>(
         <SingelProductCart key={item._id} image={item.thumbnail} title={item.title} slug={item.slug} discountPrice={item.discontPrice} status={item.status} />
      )) }
      </>,
    },
    {
      key: "reject",
      label: <AccroHead accroHeadContent={"All Product"} accroHeadNo={productData?.data?.rejectProducts} accroNoBg={'bg-red-300'}/>,
         children: <>
        <ProductListHead/>
          {productData?.data?.products.map((item)=>(
         <SingelProductCart key={item._id} image={item.thumbnail} title={item.title} slug={item.slug} discountPrice={item.discontPrice} status={item.status} />
      )) }
      </>,
    },
  ];
  return (
    <>
        <div className="px-[23px] py-[42px]">
        <CommonHead CommonHead_content={'Manage Products'}/>
        <BreadCrumb pageName={'Products'} pageLink={'/products'} subpageLink={'/manage-prouduct'}  subpage={'Manage product'}/>
        <div className="w-full p-[25px] mt-[18px] bg-white rounded-[16px]">
            <Tabs defaultActiveKey="1" items={items} onChange={setStatus} />
        </div>
        </div>
    </>
  );
};

export default ManageProduct;
