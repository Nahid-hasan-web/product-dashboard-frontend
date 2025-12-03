import React from "react";
import { FiMoreVertical } from "react-icons/fi";


const StatCard = ({
  icon,
  title,
  value,
  change = null,
  positive = true,
  caption = "",
}) => {
  const changeColor = positive
    ? "text-green-600 bg-green-50"
    : "text-red-600 bg-red-50";

  return (
    <div className="bg-white rounded-xl border border-[var(--color-borderColor)] shadow-sm p-3 sm:p-4 w-full">
      <div className="flex items-start justify-between mb-3">
        <div className="text-xs sm:text-sm text-gray-500">{title}</div>

      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "rgba(115,100,219,0.08)" }}
          >
            <div className="text-[18px] sm:text-[20px] text-[var(--color-brandColor)]">
              {icon}
            </div>
          </div>

          <div>
            <div className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              {value}
            </div>
          </div>
        </div>

        {change && (
          <div
            className={`flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full ${changeColor} self-start sm:self-center`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              className={`flex-none ${positive ? "" : "rotate-180"}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12l5-5 5 5"
                stroke={positive ? "#16A34A" : "#DC2626"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div
              className={`text-xs sm:text-sm font-semibold ${
                positive ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </div>
          </div>
        )}
      </div>

      {caption && (
        <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs text-gray-400">
          {caption}
        </div>
      )}
    </div>
  );
};

export default StatCard;
