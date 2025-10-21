import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const PorductUploadBoard = () => {
  const [imgPath, setImgPath] = useState("");
  const [subImage, setSubImage] = useState([]);

  console.log(subImage);
  return (
    <>
      <div className=" flex-1 p-[50px] border border-[#E8EDF2]  bg-white rounded-[16px] mt-[18px]">
        <div className="productRow flex  justify-between">
          {/* ---------------- column 1 */}
          <div>
            {/* --------------- product name */}
            <div className=" ">
              <h2 className="commonHead">Product Name</h2>
              <input
                type="text"
                placeholder="Type name here"
                className="w-full lg:w-[527px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] mt-[10px] inputText focus-within:border-brandColor"
              />
            </div>
            {/* --------------- product name */}
            <div className="mt-[48px] ">
              <h2 className="commonHead">Product Name</h2>
              <input
                type="text"
                placeholder="Type name here"
                className="w-full lg:w-[527px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] mt-[10px] inputText focus-within:border-brandColor"
              />
            </div>
            {/* --------------- product Catagory */}
            <div className=" w-fit mt-[48px] relative">
              <h2 className="commonHead">Category</h2>
              <IoMdArrowDropdown className=" absolute top-[60%] right-4 text-xl text-secend z-10" />
              <select
                className="w-full relative lg:w-[527px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] mt-[10px] inputText focus-within:border-brandColor appearance-none"
                name=""
                id=""
              >
                <option value="">Select Catagory</option>
                <option value="">T-shirt</option>
                <option value="">Panjabi</option>
              </select>
            </div>
            {/* --------------- product more info  */}
            <div className="w-fit flex flex-wrap gap-[23px] mt-[48px]">
              <div>
                <h2 className="commonHead">Regular Price</h2>
                <input
                  placeholder="$500"
                  className="w-[252px] h-[48px]  border border-[#E8EDF2] rounded-[8px] inputText"
                  type="text"
                />
              </div>
              <div>
                <h2 className="commonHead">Discount percentage ( If any)</h2>
                <input
                  placeholder="8%"
                  className="w-[252px] h-[48px]  border border-[#E8EDF2] rounded-[8px] inputText"
                  type="text"
                />
              </div>
            </div>
            <div className="w-fit flex flex-wrap gap-[23px] mt-[48px]">
              <div>
                <h2 className="commonHead">Stock quantity</h2>
                <input
                  placeholder="200"
                  className="w-[252px] h-[48px]  border border-[#E8EDF2] rounded-[8px] inputText"
                  type="text"
                />
              </div>
              <div className=" w-fit  relative">
                <IoMdArrowDropdown className=" absolute top-[60%] right-4 text-xl text-secend z-10" />
                <h2 className="commonHead">Tags ( If any)</h2>
                <select
                  className=" relative w-[252px]  duration-[.4s] h-[48px] rounded-[8px] border border-[#E8EDF2] inputText focus-within:border-brandColor appearance-none"
                  name=""
                  id=""
                >
                  <option value="">Select Tags</option>
                  <option value="">New</option>
                  <option value="">Offter</option>
                  <option value="">Sale</option>
                </select>
              </div>
            </div>
          </div>
          {/* -------------- column 2 */}
          <div>
            <div
              className={`w-full lg:w-[503px]   ${
                imgPath ? "border h-fit" : "border-4 border-dashed h-[463px] "
              } border-borderColor  rounded-[8px]  flex justify-center items-center overflow-hidden`}
            >
              {imgPath ? (
                <img src={imgPath} alt="thumbnail image" />
              ) : (
                <label
                  htmlFor="thumbnailImage"
                  className="flex flex-col justify-center items-center"
                >
                  <CiImageOn className="text-8xl text-brandColor" />
                  <h2 className="text-sm font-medium font-poppins text-secend">
                    Drop your image here, or
                    <span className="text-brandColor my-5 ml-1">browse</span>
                  </h2>
                  <p className="text-[13px] font-normal font-poppins text-[#9A9AAF] mt-2">
                    JPG,PNG and GIF files are allowed
                  </p>
                  <input
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setImgPath(URL.createObjectURL);
                      }
                    }}
                    className="invisible"
                    id="thumbnailImage"
                    type="file"
                  />
                </label>
              )}
            </div>
            <h2 className="commonHead mt-[48px]">Product Sub-Images</h2>
            <div
              className={`w-full lg:w-[503px]   ${
                imgPath ? "border h-fit" : "border-4 border-dashed h-[154px] "
              } border-borderColor  rounded-[8px]  flex justify-center items-center overflow-hidden`}
            >
              <label
                htmlFor="subimage"
                className="flex flex-col justify-center items-center"
              >
                <CiImageOn className="text-5xl text-brandColor" />
                <h2 className="text-sm font-medium font-poppins text-secend">
                  Drop your image here, or
                  <span className="text-brandColor my-5 ml-1">browse</span>
                </h2>
                <p className="text-[13px] font-normal font-poppins text-[#9A9AAF] mt-2">
                  JPG,PNG and GIF files are allowed
                </p>
                <input
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setSubImage((prev) => [
                        ...prev,
                        URL.createObjectURL(file),
                      ]);
                    }
                  }}
                  className="invisible"
                  id="subimage"
                  type="file"
                />
              </label>
            </div>
            {subImage.length > 0 && (
              <div>
                <h2 className="commonHead mt-[48px]">preview</h2>
                <div className="flex gap-5 flex-wrap items-center mt-5">
                  {subImage.map((item, i) => (
                    <div
                      key={i}
                      className="w-[80px] h-[80px] rounded-[5px] bg-gray-100 relative group"
                    >
                      <img className="w-full" src={item} alt="sub images" />
                      <button className="w-[20px] h-[20px] rounded-full bg-black flex justify-center items-center text-white text-sm absolute top-[-10px] right-0 duration-[.2s]  opacity-0 group-hover:opacity-100 active:scale-[1.1]">
                        <RxCross1 />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PorductUploadBoard;
