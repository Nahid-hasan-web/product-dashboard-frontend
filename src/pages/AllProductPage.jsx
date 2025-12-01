import React, { useEffect, useState } from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import { GoDotFill } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import { Pagination } from "antd";
import SingelProductCart from "../components/common/SingelProductCart";
import ProductListHead from "../components/common/ProductListHead";
import { productApi } from "../api/productApi";
const AllProductPage = () => {
  const [products, setProducts] = useState([]);
  const [pageLimit  , setPageLimit ] =  useState({page:1 , limit:9 })

  const handelPagination = (page,limit)=>{
    setPageLimit({page, limit })
  }



  useEffect(() => {
    const apiFun = async () => {
      const apiData = await productApi.getProducts(pageLimit);
      setProducts(apiData.data);
    };
    apiFun();
  }, [pageLimit]);

  
  return (
    <>
      <div className="flex-1 px-[23px] py-[42px]">
        <CommonHead CommonHead_content={"All Products"} />
        <BreadCrumb
          firstPage={"Products"}
          firstPageLink={"/products"}
          subpage={"All Product"}
          subpageLink={"/allProduct"}
        />

        {/* ------------------ pagination */}
        <div className="w-full p-[25px] rounded-[16px] bg-white mt-[18px] ">
          <ProductListHead />
          {products?.products?.map((item) => (
            <SingelProductCart key={item._id} image={item.thumbnail} title={item.title} discountPrice={item.discontPrice} status={item.status} />
          ))}
          <div className="mt-12">
            <Pagination onChange={handelPagination} align="end" defaultCurrent={1} total={products.total} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductPage;
