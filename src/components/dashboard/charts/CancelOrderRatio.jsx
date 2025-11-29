import React from "react";
import { PieChart, Pie } from "recharts";

const CancelOrderRatio = ({ isAnimationActive = true }) => {
  const data = [
    { name: "cancelled", value: 100, color: "#FF4D4D" },   // red
    { name: "totalOrder", value: 2000, color: "#4CAF50" }, // green
  ];

  return (
    <div className="row-span-2 col-start-4 row-start-3 bg-white p-4 flex flex-col items-center gap-5 rounded-[16px] shadow-[0px_3px_16px_0px_#00000024]">
      <h2 className="text-lg font-medium font-poppins text-secend">
        Cancel orders ratio
      </h2>

      <PieChart width={200} height={200}>
        <Pie  
          data={data}
          dataKey="value"
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius={20}
          paddingAngle={3}
          isAnimationActive={isAnimationActive}
        />
      </PieChart>
    </div>
  );
};

export default CancelOrderRatio;
