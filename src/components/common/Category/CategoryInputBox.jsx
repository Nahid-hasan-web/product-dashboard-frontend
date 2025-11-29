import React, { useState, useEffect, useCallback } from "react";
import { BsUpload } from "react-icons/bs";
import { catgoryApi } from "../../../api/categoryApi";
import axios from "axios";



export default function UploadCategory() {
  const [catagoryName, setCategoryName] = useState("");

  const [image, setImage] = useState("");
  // -------------- upload category
  const handelAddCategory = async () => {
    if (!image) return alert("please select an image");
    console.log(image);
    const formData = new FormData();
    formData.append("productImage", image);

    try {
      // const categoryData = await catgoryApi.addCategory(formData);

      const categoryData = await axios.post('http://localhost:8000/category/addCatagory' , formData);
      console.log(categoryData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-white border border-borderColor p-5 rounded-[10px] max-w-md">
      {/* Upload Box */}
      <label
        htmlFor="thumbnailImage"
        className={`
          w-[250px] h-[250px] rounded-[15px]
          border-2 border-dashed border-brandColor cursor-pointer
          flex flex-col justify-center items-center gap-2 transition-all overflow-hidden
         
        `}
      >
        <BsUpload className="text-3xl text-brandColor" />
        <p className="text-secend text-sm">Drag & Drop</p>
        <p className="text-secend text-xs">or click to upload</p>

        <input
          id="thumbnailImage"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>

      {/* Category Name */}
      <h2 className="text-base font-medium text-secend mt-5">Category name</h2>
      <input
        placeholder="Enter your category name"
        className="w-full border-2 border-borderColor"
        type="text"
      />

      <button
        onClick={handelAddCategory}
        className="px-5 py-1 active:scale-[1.1] mt-5 rounded-[5px] bg-brandColor text-lg font-medium  font-poppins text-white"
      >
        upload
      </button>
    </section>
  );
}
