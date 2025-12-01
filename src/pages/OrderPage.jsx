import React, { useEffect, useState } from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import OrderHead from "../components/common/OrderHead";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Dropdown, Space, DatePicker, Pagination } from "antd";
import SingelOrderinfo from "../components/common/SingelOrderinfo";
import { orderApi } from "../api/orderApi";
const { RangePicker } = DatePicker;

const OrderPage = () => {
  const items = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Profile",
      extra: "⌘P",
    },
    {
      key: "3",
      label: "Billing",
      extra: "⌘B",
    },
    {
      key: "4",
      label: "Settings",
      // icon: <SettingOutlined/>,
      extra: "⌘S",
    },
  ];

  const [orderList , setOrderList] = useState([])
  useEffect(() => {
    const orderFun = async () => {
      try {
        const apiData = await orderApi.getOrderList();
        setOrderList(apiData.data)
      } catch (err) {
        console.log(err);
      }
    };
    orderFun()
  }, []);


  console.log(orderList)

  return (
    <>
    
      <div className="px-[23px] py-[42px]">
        <CommonHead CommonHead_content={"All Orders"} />
        <BreadCrumb pageName={"All Orders"} pageLink={"/all-orders"} />
        <div className="flex justify-between items-center mt-[26px]">
          <div className="relative">
            <Dropdown
              className="w-[225px] inline-block text-sm font-poppins font-normal  appearance-none outline-brandColor duration-[.4s] text-secend rounded-[8px] border border-[#E8EDF2] bg-white px-[16px] py-[15px]"
              menu={{ items }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  All Category
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>
            <MdOutlineArrowDropDown className=" absolute top-[50%] translate-y-[-50%] text-secend right-5" />
          </div>
          {/* ------------------------------- filter options */}
          <div className="flex flex-wrap gap-[12px] items-center">
            {/* --- select date range */}
            <div className="relative">
              <Space direction="vertical" size={12}>
                <RangePicker />
              </Space>
            </div>
            {/* ------------------ deleviry status*/}
            <div className="relative w-fit">
              <Dropdown
                className="w-[225px] inline-block text-sm font-poppins font-normal  appearance-none outline-brandColor duration-[.4s] text-secend rounded-[8px] border border-[#E8EDF2] bg-white px-[16px] py-[15px]"
                menu={{ items }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    All Category
                    {/* <DownOutlined /> */}
                  </Space>
                </a>
              </Dropdown>
              <MdOutlineArrowDropDown className=" absolute top-[50%] translate-y-[-50%] text-secend right-5" />
            </div>
          </div>
        </div>
        {/* --------------- order list */}
        <div className="w-full p-[25px] mt-[18px] bg-white rounded-[16px]">
          <h2 className="text-base  font-poppins font-semibold text-[#07070C] mb-4">
            Recent Orders
          </h2>
          <OrderHead
            one={"Order No"}
            two={"Customer Name"}
            three={"Pament by"}
            four={"Order Date"}
            five={"Delivery Status"}
            six={"Price"}
          />
          {
          orderList?.data?.map((item ,i) => (
            <SingelOrderinfo  key={item._id}
             orderId={item.orderNo}
            customerName={item.customerName}
            paymentMethod={'Cash on Delivery'}
            date={item.orderDate.split('T')[0]}
            status={item.deliveryStatus}
            total={item.totalAmmount}
             />
          ))}
          <br />
          <Pagination align="end" defaultCurrent={1} total={orderList.totalOrder} />
        </div>
      </div>
    </>
  );
};

export default OrderPage;
