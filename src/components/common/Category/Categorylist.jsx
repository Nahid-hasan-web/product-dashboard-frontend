import React from 'react'

const Categorylist = ({categoryItems}) => {
  return (
    <>
      <div className='p-3 border border-borderColor w-full rounded-lg'>
        <h2 className='text-xl font-medium font-poppins text-secend'>
          Category List
        </h2>

        {/* Table Head */}
        <div className='hidden sm:flex justify-between mt-5'>
          <h2 className='w-[80px] md:w-[120px] text-base font-medium text-secend'>Image</h2>
          <h2 className='w-[150px] md:w-[250px] text-base font-medium text-secend'>Category Name</h2>
          <h2 className='w-[100px] md:w-[250px] text-base font-medium text-secend'>Products</h2>
          <h2 className='w-[60px] md:w-[100px] text-base font-medium text-secend'>Options</h2>
        </div>

        <hr className='mt-2 text-borderColor' />

        {/* Row */}
        {
          categoryItems.map((item)=>(
          <div key={item._id} className=' flex items-center flex-row justify-between sm:items-center mt-3 gap-3 sm:gap-0'>

            {/* Image */}
            <div className='sm:w-[120px]'>
              <div className='w-[50px] h-[50px] bg-gray-200 rounded-xl'>
                <img src={item.catagoryImage} alt="category image" />
              </div>
            </div>

            {/* Category Name */}
            <h2 className='text-base font-medium text-secend sm:w-[250px]'>
              {item.catagoryName}
            </h2>

            {/* Products */}
            <h2 className='text-base font-medium text-secend sm:w-[250px]'>
              {item.totalProducts}
            </h2>

            {/* Options */}
            <h2 className='text-base font-medium text-secend sm:w-[100px]'>
              Edit
            </h2>
          </div>

          ))
        }
      </div>
    </>
  )
}

export default Categorylist
