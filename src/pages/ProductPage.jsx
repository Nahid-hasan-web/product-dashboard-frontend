import React from 'react'
import { CiViewList } from 'react-icons/ci'
import { Link } from 'react-router'

const ProductPage = () => {
  return (
    <>
    <div className='mt-10 flex gap-5 flex-wrap px-[30px]'>

        <Link to={'#'} className='  w-[400px] p-2 rounded-[5px] bg-white h-[200px] relative group flex justify-center overflow-hidden duration-[.4s] hover:bg-[#f6ed40] border-2 border-white hover:border-[#828282]'>
            <CiViewList  className='text-7xl text-secend absolute top-[50%] left-[50%] translate-[-50%] duration-[.4s] group-hover:opacity-50 group-hover:text-white group-hover:text-[200px] group-hover:top-[-60px] group-hover:left-[-60px] group-hover:translate-0' />
            <h2 className='text-2xl font-semibold font-poppins text-secend duration-[.4s] mt-[130px] group-hover:mt-[80px] '>Add Product Catagory</h2>
        </Link>
    </div>
    </>
  )
}

export default ProductPage