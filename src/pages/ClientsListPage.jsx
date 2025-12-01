import React, { useEffect, useState } from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import ProductListHead from "../components/common/ProductListHead";
import OrderHead from "../components/common/OrderHead";
import { Dropdown, Space, DatePicker, Pagination } from "antd";
import { orderApi } from "../api/orderApi";
import CustomerList from "../components/common/CustomerList";

const ClientsListPage = () => {
    const [customerList , setCustomerList] = useState(null)

  useEffect(()=>{
  try{
      const apiFun = async ()=>{
       const apiData =  await orderApi.getcustomerList()
      setCustomerList(apiData.data.data)
      }

    apiFun()
  }catch(err){
    console.log(err)
  }
  },[])

  console.log(customerList)

  return (
    <>
      <div className="px-[23px] py-[42px]">
        <CommonHead CommonHead_content={"Customer List"} />
        <BreadCrumb pageName={"All Customer list"} pageLink={"/client-list"} />
        <div className="flex justify-between items-center mt-[26px]">
        </div>
        {/* --------------- order list */}
        <div className="w-full p-[25px] mt-[18px] bg-white rounded-[16px]">
          <h2 className="text-base  font-poppins font-semibold text-[#07070C] mb-4">
            Recent Orders
          </h2>
          <OrderHead one={'#Customer'} two={'Name'} three={'Email'} four={'Join data'} five={'Total Order'} six={'Total amound'} />
          {customerList?.map((item , i) => (
            <CustomerList key={i} one={i +1} two={item.customerName} three={item.email} five={item.totalOrders} six={item.totalPurchase} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientsListPage;
