import React from "react";
import { BsPeople } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { CiCreditCard2, CiShop, CiViewList } from "react-icons/ci";
import { LuLayoutList, LuRefreshCw } from "react-icons/lu";
import { Link, NavLink } from "react-router";

const Navbar = () => {
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
      navbarLink: "/orders",
    },
    {
      navbarIcon: <CiCreditCard2 className="text-xl" />,
      navbarContent: "Payments",
      navbarLink: "/payments",
    },
    {
      navbarIcon: <LuRefreshCw className="text-xl" />,
      navbarContent: "Transactions",
      navbarLink: "/transactions",
    },
    {
      navbarIcon: <BsPeople className="text-xl" />,
      navbarContent: "Clients",
      navbarLink: "/clients",
    },
  ];

  const catagoryItem = [
    {
      catagoryName: "Laptops",
      catagoryLink: "Laptops",
      catagoryQty: "8",
      catagoryColor: "bg-[#ECE663]",
    },
    {
      catagoryName: "Mobile phones",
      catagoryLink: "Mobile phones",
      catagoryQty: "6",
      catagoryColor: "bg-[#EC8C56]",
    },
    {
      catagoryName: "Desktops",
      catagoryLink: "Desktops",
      catagoryQty: "5",
      catagoryColor: "bg-[#FB7BB8]",
    },
    {
      catagoryName: "Accessories",
      catagoryLink: "Accessories",
      catagoryQty: "",
      catagoryColor: "",
    },
    {
      catagoryName: "Accessories",
      catagoryLink: "Accessories",
      catagoryQty: "7",
      catagoryColor: "bg-[#50D1B2]",
    },
  ];

  return (
    <>
      {/* --------------------- navbar items */}
      <nav
        className={`w-[258px] border-r border-[#E8EDF2] h-screen  sticky pt-[113px] px-[25px]`}
      >
        {navItems.map((item) => (
          <NavLink
            to={item.navbarLink}
            className={({ isActive }) =>
              isActive
                ? "py-[17px] pl-[21px] text-sm font-semibold font-poppins text-[#fff] bg-brandColor flex rounded-[17px]  gap-[10px] items-center "
                : "py-[17px] pl-[21px] text-sm font-semibold font-poppins text-secend  flex rounded-[17px]  gap-[10px] items-center "
            }
          >
            {item.navbarIcon}
            {item.navbarContent}
          </NavLink>
        ))}
        <div className="w-full h-[1px] bg-[#E8EDF2] mt-[10px]"></div>
        <h2 className="text-[12px] font-semibold font-poppins text-[#07070C] mb-3 pl-6 mt-[33px]">
          Categories
        </h2>
        {catagoryItem.map((item) => (
          <NavLink
            to={item.catagoryLink}
            className={({ isActive }) =>
              isActive
                ? "py-[17px] pl-[21px] text-sm font-semibold font-poppins text-[#fff] bg-brandColor flex rounded-[17px] justify-between  gap-[10px] items-center "
                : "py-[17px] pl-[21px] text-sm font-semibold font-poppins text-secend  flex rounded-[17px]  gap-[10px] justify-between items-center "
            }
          >
            {item.catagoryName}
            <div
              className={`w-[18px] h-[18px] rounded-[4px] flex justify-center items-center text-[11px] font-medium font-poppins text-[#07070C] 
              ${item.catagoryColor}`}
            >
              {item.catagoryQty}
            </div>
          </NavLink>
        ))}
        <Link to={'/'} className="flex gap-3 items-center text-[12px] font-semibold font-poppins text-[#07070C] py-[17px] pl-[21px] hover:bg-brandColor rounded-[10px] hover:text-[#fff] group duration-[.4s]"><CgAddR className="text-xl text-[#7E7E8F] group-hover:text-[#fff] duration-[.4s]" />Add Category</Link>
      </nav>
      {/* ------------------- catagory items */}
    </>
  );
};

export default Navbar;
