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

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main analytics column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Sales Analytics</h2>
              <div className="text-sm text-gray-500">
                Monthly / Weekly trends
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Monthly Sales</div>
                  <div className="text-sm font-semibold">$43,200</div>
                </div>
                <LineMiniChart />
              </div>

              <div className="p-4 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm text-gray-600">Weekly Sales</div>
                  <div className="text-sm font-semibold">$8,320</div>
                </div>
                <LineMiniChart points={"0,30 20,10 40,20 60,40 80,25 100,35"} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <div className="text-sm text-gray-500">Latest 10 orders</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="py-2 px-3">Order ID</th>
                    <th className="py-2 px-3">Customer</th>
                    <th className="py-2 px-3">Total</th>
                    <th className="py-2 px-3">Date</th>
                    <th className="py-2 px-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["#1001", "Jane Doe", "$120.00", "2025-10-30", "Delivered"],
                    ["#1002", "Mike Ross", "$64.50", "2025-10-30", "Pending"],
                    ["#1003", "Anna Smith", "$230.00", "2025-10-29", "Shipped"],
                    ["#1004", "John Lee", "$15.99", "2025-10-29", "Cancelled"],
                  ].map((r) => (
                    <tr
                      key={r[0]}
                      className="border-b last:border-b-0 table-row-hover transition-colors"
                    >
                      <td className="py-2 px-3 font-medium">{r[0]}</td>
                      <td className="py-2 px-3">{r[1]}</td>
                      <td className="py-2 px-3">{r[2]}</td>
                      <td className="py-2 px-3 text-gray-500">{r[3]}</td>
                      <td className="py-2 px-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            r[4] === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : r[4] === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : r[4] === "Cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {r[4]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right column */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-2">Category-wise Sales</h3>
            <PieChart />
            <ul className="mt-3 text-sm text-gray-600 space-y-1">
              <li>
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-sm"
                  style={{ background: "var(--color-brandColor)" }}
                ></span>{" "}
                Electronics
              </li>
              <li>
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-sm"
                  style={{ background: "var(--color-secend)" }}
                ></span>{" "}
                Apparel
              </li>
              <li>
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-sm"
                  style={{ background: "#F59E0B" }}
                ></span>{" "}
                Accessories
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-3">Top Selling Products</h3>
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-sm font-semibold text-gray-700">
                    P{i}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Product {i}</div>
                    <div className="text-xs text-gray-500">{50 * i} sold</div>
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    ${(20 * i).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="font-semibold mb-3">Activity Feed</h3>
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                  A
                </div>
                <div>
                  <div className="text-sm">
                    <span className="font-medium">Jane</span> placed an order{" "}
                    <span className="text-gray-500">#1001</span>
                  </div>
                  <div className="text-xs text-gray-400">2 hours ago</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs">
                  B
                </div>
                <div>
                  <div className="text-sm">
                    <span className="font-medium">Product</span> Stock updated
                  </div>
                  <div className="text-xs text-gray-400">5 hours ago</div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;
