import React from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import PorductUploadBoard from "../components/PorductUploadBoard";

const AddProductPage = () => {
  return (
    <div className="mt-[42px] px-[23px]">
      <CommonHead CommonHead_content={"Uplod Product"} />
      <BreadCrumb pageName={"Add Product"} pageLink={"/addProduct"} />
      <PorductUploadBoard />
    </div>
  );
};

export default AddProductPage;
