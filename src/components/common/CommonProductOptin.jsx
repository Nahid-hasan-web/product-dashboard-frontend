import React from 'react'
import { CiViewList } from 'react-icons/ci'
import { Link } from 'react-router'

const CommonProductOptin = ({cardcontent , cardLink , cardIcon}) => {
  return (
    <>
        <Link
          to={cardLink}
          className="w-[400px] h-[200px] bg-white rounded-2xl shadow-md flex flex-col items-center justify-center relative overflow-hidden border border-transparent hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-400 group"
        >
          {/* Icon */}
          {cardIcon}

          {/* Title */}
          <h2 className="mt-4 text-xl font-semibold text-gray-700 transition-colors duration-500 group-hover:text-gray-900">
           {cardcontent}
          </h2>

          {/* Subtle hover effect */}
          <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
        </Link>
    </>
  )
}

export default CommonProductOptin