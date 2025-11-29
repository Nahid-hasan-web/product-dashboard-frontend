import React from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const MounthlySalesReport = () => {

  const revenuData = [
    { name: "jan", target: 120 ,achieve:125 },
    { name: "feb", target: 150 ,achieve:125 },
    { name: "march", target: 130 ,achieve:122 },
    { name: "april", target: 110 ,achieve:110 },
  ];
  return (
    <>
      <div className="col-span-3 row-span-3 col-start-1 row-start-3  bg-white  p-4  rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
        <h2 className="text-lg font-medium font-poppins text-secend">
          Mounthly sales report
        </h2>
        <BarChart
          style={{
            width: "100%",
            maxWidth: "900px",
            maxHeight: "38vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={revenuData}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Bar dataKey="target" fill="#D1E9F6" activeBar={<Rectangle />} />
          <Bar dataKey="achieve" fill="#4CAF50" activeBar={<Rectangle />} />
        </BarChart>
      </div>
    </>
  );
};

export default MounthlySalesReport;
