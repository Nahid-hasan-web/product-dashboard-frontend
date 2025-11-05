
const StatCard = ({  icon,
  title,
  value,
  gradient = "linear-gradient(135deg,#7364DB,#8B7AF7)",}) => {
  return (
    <>
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1">
    <div
      className="p-3 rounded-lg text-white flex items-center justify-center"
      style={{ background: gradient }}
    >
      {icon}
    </div>
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-lg font-semibold text-gray-800">{value}</div>
    </div>
  </div>
    </>
  )
}

export default StatCard
