import React, { useEffect, useState } from "react";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
  FiDollarSign,
  FiUsers,
  FiBox,
  FiMoreVertical,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import StatCard from "../components/common/StatCard";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import OrderHead from "../components/common/OrderHead";
import SingelOrderinfo from "../components/common/SingelOrderinfo";
import { useNavigate } from "react-router";
import DailySalesReport from "../components/dashboard/charts/DailySalesReport";
import MounthlySalesReport from "../components/dashboard/charts/MounthlySalesReport";
import CancelOrderRatio from "../components/dashboard/charts/CancelOrderRatio";
const Dashboard = () => {
  const navigate = useNavigate();


  return (
    <div
      className="min-h-screen p-4 sm:p-6 lg:p-8 antialiased"
      style={{ backgroundColor: "var(--color-bgColor)" }}
    >
      <CommonHead CommonHead_content={"Dashboard"} />
      <BreadCrumb pageName={"Dashboard"} />

      {/* Overview cards */}
      <section className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 mt-5">
        <StatCard
          icon={<FiShoppingCart size={18} />}
          title="Total Orders"
          value="1,245"
          change="12.5%"
          positive={true}
          caption="Compared to last month"
        />
        <StatCard
          icon={<FiDollarSign size={18} />}
          title="Total Sales"
          value="$98,540"
          change="34.7%"
          positive={true}
          caption="Compared to last month"
        />
        <StatCard
          icon={<FiUsers size={18} />}
          title="Customers"
          value="5,420"
          change="8.4%"
          positive={true}
          caption="Compared to last month"
        />
        <StatCard
          icon={<FiBox size={18} />}
          title="Products"
          value="832"
          change="-2.3%"
          positive={false}
          caption="Compared to last month"
        />
      </section>
      {/* --------------- dashboard charts */}
      <div className="grid grid-cols-5 grid-rows-5 gap-5   h-[700px]">
        <DailySalesReport/>
        <MounthlySalesReport/>
        <CancelOrderRatio/>
       
        <div className="row-span-3 col-start-5 row-start-3  bg-white flex p-4  rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
          <h2 className="text-lg font-medium font-poppins text-secend">
            Top selling product
          </h2>
        </div>
        <div className="col-start-4 row-start-5  bg-white flex p-4  rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
          <h2 className="text-lg font-medium font-poppins text-secend">
            Monthly revinew
          </h2>
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
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <SingelOrderinfo />
        ))}
        <br />
      </div>
    </div>
  );
};

export default Dashboard;
