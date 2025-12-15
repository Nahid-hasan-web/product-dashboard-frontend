import React, { useEffect, useState } from "react";
import { BsPeople } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import {  CiShop, CiViewList } from "react-icons/ci";
import { LuLayoutList,  } from "react-icons/lu";
import {  HiOutlineX } from "react-icons/hi";
import { Link, NavLink } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import { catgoryApi } from "../api/categoryApi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const navItems = [
    {
      navbarIcon: <LuLayoutList className="text-xl" />,
      navbarContent: "Dashboard",
      navbarLink: "/",
    },
    {
      navbarIcon: <CiShop className="text-xl" />,
      navbarContent: "Products",
      navbarLink: "/products",
    },
    {
      navbarIcon: <CiViewList className="text-xl" />,
      navbarContent: "Orders",
      navbarLink: "/all-orders",
    },
    {
      navbarIcon: <BsPeople className="text-xl" />,
      navbarContent: "Customer List",
      navbarLink: "/client-list",
    },
  ];


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

    const [categorys , setCategorys] =  useState([])
  
  
    // ---- getting product category 
    useEffect(  ()=>{
      const fetchCategory = async ()=>{
        try{
          const categoryData = await catgoryApi.getCagory()
          setCategorys(categoryData.data.categorys)
        }catch(err){
          console.log(err)
        }
      }
      fetchCategory()
    },[])
  
  return (
    <>
      {/* Main Navbar */}
      <nav className=" relative">
        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-4 right-[-13%] z-50">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-brandColor text-white shadow-lg"
          >
            {isMobileMenuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <IoIosArrowForward className="text-2xl" />
            )}
          </button>
        </div>
        <div
          className={`
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          fixed lg:sticky top-0 left-0 z-40
          w-[280px] md:w-[258px] 
          border-r border-[#E8EDF2] 
          h-screen bg-white
          pt-[60px] lg:pt-[113px] px-[25px]
          transform transition-transform duration-300 ease-in-out
          overflow-y-auto
        `}
        >
          {/* Navigation Items */}
          <div className="space-y-1">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.navbarLink}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  isActive
                    ? "py-[17px] pl-[21px] text-sm font-semibold font-poppins text-[#fff] bg-brandColor flex  rounded-[17px] gap-[10px] items-center transition-all duration-200"
                    : "py-[17px] pl-[21px] text-sm font-semibold font-poppins text-secend flex rounded-[17px] gap-[10px] items-center hover:bg-gray-50 transition-all duration-200"
                }
              >
                <div className="flex gap-[10px]">
                  {item.navbarIcon}
                  <span className="truncate">{item.navbarContent}</span>
                </div>
              </NavLink>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#E8EDF2] mt-[20px] mb-[20px]"></div>

          {/* Categories Section */}
          <div>
            <h2 className="text-[12px] font-semibold font-poppins text-[#07070C] mb-3 pl-6">
              Categories
            </h2>
            <div className="space-y-1">
              {
                categorys.map((item)=>(
                <div
                key={item._id}
                  className='py-[17px] pl-[21px] pr-[15px] text-sm font-semibold font-poppins text-secend flex rounded-[17px] justify-between items-center hover:bg-gray-50 transition-all duration-200'
                >
                  <span className="truncate flex-1">{item.catagoryName}</span>
                    <div
                      className={`w-[18px] h-[18px] rounded-[4px] flex justify-center items-center text-[11px] font-medium font-poppins text-[#07070C] flex-shrink-0 ml-2 bg-yellow-500`}
                    >
                      {
                        item.totalProducts
                      }
                    </div>
             
                </div>

                ))
              }
            </div>

            {/* Add Category Button */}
            <Link
              to={"/category"}
              onClick={closeMobileMenu}
              className="flex gap-3 items-center text-[12px] font-semibold font-poppins text-[#07070C] py-[17px] pl-[21px] hover:bg-brandColor rounded-[10px] hover:text-[#fff] group duration-[.4s] mt-2"
            >
              <CgAddR className="text-xl text-[#7E7E8F] group-hover:text-[#fff] duration-[.4s]" />
              <span className="truncate">Add Category</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
