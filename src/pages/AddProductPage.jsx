import React from "react";
import CommonHead from "../components/common/CommonHead";
import BreadCrumb from "../components/common/BreadCrumb";
import PorductUploadBoard from "../components/PorductUploadBoard";

const AddProductPage = () => {
  return (
    <div className="mt-[42px] px-[23px]">
      <CommonHead />
      <BreadCrumb />
      <PorductUploadBoard/>
    </div>
  );
};

export default AddProductPage;
