import { useState } from "react";
import { BsUpload } from "react-icons/bs";
import { catgoryApi } from "../../../api/categoryApi";
import tostifyMsg from "../../../helpers/tostifyMsg";

export default function UploadCategory({uploadCategory}) {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState(null);

  // -------------- upload category
  const handelAddCategory = async () => {
    // turn on loading
    setLoading(true);

    // image validation
    if (!image) return alert("please select an image");
    
    // set images and name in form data 
    const formData = new FormData();
    formData.append("productImage", image);
    formData.append("catagoryName", categoryName);

    // sending info to backend
    try {
      const categoryData = await catgoryApi.addCategory(formData);
      if (categoryData) {
        setLoading(false);
        tostifyMsg("info", "product upload sucess");
        uploadCategory()
      }

    } catch (err) {
      setLoading(false);
      tostifyMsg("error", err.response.data);
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
          onChange={(e) => {
            setImage(e.target.files[0]),
              setPreview(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </label>
      {preview && (
        <div className="w-[250px] h-[250px] rounded-[15px] overflow-hidden mt-3">
          <img src={preview} alt="preview" />
        </div>
      )}
      {/* Category Name */}
      <h2 className="text-base font-medium text-secend mt-5">Category name</h2>
      <input
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Enter your category name"
        className="w-full border-2 border-borderColor mt-5 h-[40px] rounded-xl pl-3"
        type="text"
      />
      {loading ? (
        <button
          disabled
          className="px-5 py-1 active:scale-[1.1] mt-5 rounded-[5px] bg-brandColor text-lg font-medium  font-poppins text-white flex items-center gap-2"
        >
          <span className="w-[20px] h-[20px] inline-block rounded-full border-4 border-[#e2e2e2c7] border-r-[#fff] animate-spin"></span>
          processing
        </button>
      ) : (
        <button
          onClick={handelAddCategory}
          className="px-5 py-1 active:scale-[1.1] mt-5 rounded-[5px] bg-brandColor text-lg font-medium  font-poppins text-white"
        >
          upload
        </button>
      )}
    </section>
  );
}
