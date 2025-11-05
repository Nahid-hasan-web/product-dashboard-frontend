import React from "react";
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
import { Pagination } from "antd";



const LineMiniChart = ({ points = "0,40 20,20 40,30 60,10 80,25 100,5" }) => (
  <svg viewBox="0 0 100 50" className="w-full h-20">
    <polyline
      points={points}
      fill="none"
      stroke="#7364DB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.9"
    />
  </svg>
);

const PieChart = ({ slices = [60, 25, 15] }) => {
  const total = slices.reduce((a, b) => a + b, 0);
  let angle = 0;
  const arcs = slices.map((s, idx) => {
    const value = (s / total) * 360;
    const large = value > 180 ? 1 : 0;
    const start = polarToCartesian(50, 50, 40, angle);
    angle += value;
    const end = polarToCartesian(50, 50, 40, angle);
    const d = `M50 50 L ${start.x} ${start.y} A 40 40 0 ${large} 1 ${end.x} ${end.y} Z`;
    return { d, idx };
  });
  const colors = ["#7364DB", "#7E7E8F", "#F59E0B"];
  return (
    <svg viewBox="0 0 100 100" className="w-40 h-40">
      {arcs.map((a) => (
        <path
          key={a.idx}
          d={a.d}
          fill={colors[a.idx % colors.length]}
          stroke="#fff"
          strokeWidth="0.5"
        />
      ))}
    </svg>
  );
  function polarToCartesian(cx, cy, r, deg) {
    const rad = ((deg - 90) * Math.PI) / 180.0;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }
};

const Home = () => {
  return (
    <div
      className="min-h-screen p-4 sm:p-6 lg:p-8 antialiased"
      style={{ backgroundColor: "var(--color-bgColor)" }}
    >
      <CommonHead  CommonHead_content={'Dashboard'}/>
      <BreadCrumb pageName={'Dashboard'}/>

      {/* Overview cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-5">
        <StatCard
          icon={<FiShoppingCart size={18} />}
          title="Total Orders"
          value="1,245"
          gradient={"linear-gradient(135deg,var(--color-brandColor),#8B7AF7)"}
        />
        <StatCard
          icon={<FiDollarSign size={18} />}
          title="Total Sales"
          value="$98,540"
          gradient={"linear-gradient(135deg,#10B981,#34D399)"}
        />
        <StatCard
          icon={<FiUsers size={18} />}
          title="Customers"
          value="5,420"
          gradient={"linear-gradient(135deg,#3B82F6,#60A5FA)"}
        />
        <StatCard
          icon={<FiBox size={18} />}
          title="Products"
          value="832"
          gradient={"linear-gradient(135deg,#F59E0B,#FBBF24)"}
        />
      </section>
{/* --------------- dashboard charts */}
<div class="grid grid-cols-5 grid-rows-5 gap-5   h-[700px]">
  <div class="col-span-3 row-span-2  bg-white flex p-4   rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
    <h2 className="text-lg font-medium font-poppins text-secend">Daily sales Report</h2>
  </div>
  <div class="col-span-2 row-span-2 col-start-4  bg-white flex p-4  rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
    <h2 className="text-lg font-medium font-poppins text-secend">Mounthly sell Unite Report</h2>

  </div>
  <div class="row-span-2 col-start-4 row-start-3  bg-white flex p-4  rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
    <h2 className="text-lg font-medium font-poppins text-secend">Cancel orders ratio</h2>

  </div>
  <div class="col-span-3 row-span-3 col-start-1 row-start-3  bg-white flex p-4  rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
    <h2 className="text-lg font-medium font-poppins text-secend">Mounthly sales report</h2>

  </div>
  <div class="row-span-3 col-start-5 row-start-3  bg-white flex p-4  rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
    <h2 className="text-lg font-medium font-poppins text-secend">Top selling product</h2>

  </div>
  <div class="col-start-4 row-start-5  bg-white flex p-4  rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
    <h2 className="text-lg font-medium font-poppins text-secend">Monthly revinew</h2>

  </div>
</div>

                  {/* --------------- order list */}
        <div className="w-full p-[25px] mt-[18px] bg-white rounded-[16px]">
          <h2 className="text-base  font-poppins font-semibold text-[#07070C] mb-4">Recent Orders</h2>
          <OrderHead one={"Order No"} two={'Customer Name'}  three={'Pament by'} four={'Order Date'} five={'Delivery Status'} six={'Price'}/>
          {
            [1,2,3,4,5,6,7].map((item)=>(<SingelOrderinfo/>))
          }
          <br />
        </div>
    </div>
  );
};

export default Home;
