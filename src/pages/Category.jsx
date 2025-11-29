import React from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import CategoryInputBox from "../components/common/Category/CategoryInputBox";
import Categorylist from "../components/common/Category/Categorylist";

const Category = () => {
  return (
    <>
      <section id="category" className="p-3">
        <CommonHead CommonHead_content={"Add Category"} />
        <BreadCrumb pageName={"Add Category"} />
        <div className="flex mt-5 gap-5">
          <CategoryInputBox />
          <Categorylist/>
        </div>
      </section>
    </>
  );
};

export default Category;
