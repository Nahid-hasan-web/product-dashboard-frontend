import React from "react";

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const DailySalesReport = () => {
  const data = [
    { name: "Mon", tk: 120 },
    { name: "Tue", tk: 210 },
    { name: "Wed", tk: 150 },
    { name: "Thu", tk: 300 },
    { name: "Fri", tk: 250 },
    { name: "Sat", tk: 200 },
    { name: "Sun", tk: 270 },
  ];
  return (
    <>
      <div className="col-span-3 row-span-2  bg-white  p-4   rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
        <h2 className="text-lg font-medium font-poppins text-secend">
          Daily sales Report
        </h2>
        <LineChart
          style={{
            width: "100%",
            maxWidth: "900px",
            maxHeight: "23vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          syncId="anyId"
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="tk" stroke="#7364DB" fill="#000" />
        </LineChart>
      </div>
    </>
  );
};

export default DailySalesReport;
