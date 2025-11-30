import React, { useEffect, useState } from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import CategoryInputBox from "../components/common/Category/CategoryInputBox";
import Categorylist from "../components/common/Category/Categorylist";
import { catgoryApi } from "../api/categoryApi";
import axios from "axios";

const Category = () => {
  const [categorys, setCategorys] = useState([]);
  const [newCategory , setNewCastegory] = useState(true)
  // ---- getting product category
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryData = await catgoryApi.getCagory();
        setCategorys(categoryData.data.categorys);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategory();
  }, [newCategory]);
  

  return (
    <>
      <section id="category" className="p-3">
        <CommonHead CommonHead_content={"Add Category"} />
        <BreadCrumb pageName={"Add Category"} />
        <div className="flex flex-wrap lg:flex-nowrap mt-5 gap-10">
          <CategoryInputBox  uploadCategory={()=>setNewCastegory(!newCategory)}  />
          <Categorylist  categoryReRender={()=>setNewCastegory(!newCategory)}  categoryItems={categorys} />
        </div>
      </section>
    </>
  );
};

export default Category;
