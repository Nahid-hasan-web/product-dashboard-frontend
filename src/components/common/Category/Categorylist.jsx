import React from 'react'

const Categorylist = () => {
  return (
    <>
        <div className='p-3 border border-borderColor'>
            <h2 className='text-xl font-medium font-poppins text-secend'>
                Category List
            </h2>
            <div className='flex justify-between mt-5'>
                <h2 className='w-[120px] text-base font-medium text-secend'>Image</h2>
                <h2 className='w-[250px] text-base font-medium text-secend'>Category Name</h2>
                <h2 className='w-[250px] text-base font-medium text-secend'>Products</h2>
                <h2 className='w-[100px] text-base font-medium text-secend'>Options</h2>
            </div>
            <hr className='mt-2  text-borderColor' />
            <div className='flex justify-between items-center mt-3'>
                <div className='w-[120px] '>
                    <div className='w-[50px] h-[50px] bg-gray-200 text-base font-medium text-secend rounded-xl'></div>
                </div>
                <h2 className='w-[250px] text-base font-medium text-secend'>t-shirt</h2>
                <h2 className='w-[250px] text-base font-medium text-secend'>80</h2>
                <h2 className='w-[100px] text-base font-medium text-secend'>Edit</h2>
            </div>
        </div>
    </>
  )
}

export default Categorylist