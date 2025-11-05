import React from "react";
import { FiMoreVertical } from "react-icons/fi";

/**
 * Compact StatCard
 * Props:
 * - icon: React node (icon)
 * - title: string
 * - value: string
 * - change: string (e.g. "34.7%")
 * - positive: boolean (true => green, false => red)
 * - caption: small footer text
 */
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
    <div className="bg-white rounded-xl border border-[var(--color-borderColor)] shadow-sm p-4 w-full max-w-sm">
      <div className="flex items-start justify-between mb-3">
        <div className="text-sm text-gray-500">{title}</div>
        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full">
          <FiMoreVertical />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(115,100,219,0.08)" }}
          >
            <div className="text-[20px] text-[var(--color-brandColor)]">
              {icon}
            </div>
          </div>

          <div>
            <div className="text-2xl font-bold text-gray-900 leading-tight">
              {value}
            </div>
            <div className="text-xs text-gray-400">Compared to last period</div>
          </div>
        </div>

        {change && (
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-full ${changeColor}`}
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
              className={`text-sm font-semibold ${
                positive ? "text-green-600" : "text-red-600"
              }`}
            >
              {change}
            </div>
          </div>
        )}
      </div>

      {caption && <div className="mt-3 text-xs text-gray-400">{caption}</div>}
    </div>
  );
};

export default StatCard;
