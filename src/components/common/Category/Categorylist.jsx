import React from "react";
import { useSelector } from "react-redux";
import { catgoryApi } from "../../../api/categoryApi";

const Categorylist = ({ categoryItems ,categoryReRender}) => {
  // ---------- getting data from redux
  const currentUserInfo = useSelector((state) => state.reduxData.userInfo);
  

  // ---------- delete category handeller 
  const deleteCategory = async (categoryId)=>{
    
    try{
     const apiData = await catgoryApi.deleteCategory(categoryId)
     console.log(apiData)
    categoryReRender()
    }
    catch(err){

      console.log(err)
    }
  }
  return (
    <>
      <div className="p-3 border border-borderColor w-full rounded-lg">
        <h2 className="text-xl font-medium font-poppins text-secend">
          Category List
        </h2>

        {/* Table Head */}
        <div className="hidden sm:flex justify-between mt-5">
          <h2 className="w-[80px]  text-base font-medium text-secend">Image</h2>
          <h2 className="w-[150px] md:w-[250px] text-base font-medium text-secend">
            Category Name
          </h2>
          <h2 className="w-[100px] md:w-[250px] text-base font-medium text-secend">
            Products
          </h2>

          {currentUserInfo.userRole == "admin" && (
            <h2 className="w-[60px] md:w-[100px] text-base font-medium text-secend">
              Options
            </h2>
          )}
        </div>

        <hr className="mt-2 text-borderColor" />

        {/* Row */}
        {categoryItems.map((item) => (
          <div
            key={item._id}
            className=" flex items-center flex-row justify-between sm:items-center mt-3 gap-3 sm:gap-0"
          >
            {/* Image */}
            <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden">
              <img src={item.catagoryImage} alt="category image" />
            </div>
            {/* Category Name */}
            <h2 className="text-base font-medium text-secend sm:w-[250px]">
              {item.catagoryName}
            </h2>

            {/* Products */}
            <h2 className="text-base font-medium text-secend sm:w-[250px]">
              {item.totalProducts}
            </h2>

            {/* Options */}
            {currentUserInfo.userRole == "admin" && (
              <button onClick={()=>deleteCategory(item._id)} className="text-base font-medium text-secend sm:w-[100px] text-left ">
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Categorylist;
