import React, { useState, useEffect, useCallback } from "react";
import { BsUpload } from "react-icons/bs";

const MAX_FILE_SIZE_MB = 5;
const ACCEPTED_TYPES = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

export default function UploadCategory() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");

  // ---------- File Validation ----------
  const validateFile = useCallback((file) => {
    if (!file) return "No file selected.";

    if (!ACCEPTED_TYPES.includes(file.type)) {
      return "Only PNG, JPG, JPEG, or WEBP images are allowed.";
    }

    if (file.size / 1024 / 1024 > MAX_FILE_SIZE_MB) {
      return `File size must be under ${MAX_FILE_SIZE_MB}MB.`;
    }

    return null;
  }, []);

  // ---------- Handle Selected File ----------
  const handleFileSelect = useCallback(
    (selectedFile) => {
      const errorMessage = validateFile(selectedFile);

      if (errorMessage) {
        setError(errorMessage);
        setFile(null);
        setPreview(null);
        return;
      }

      setError("");
      setFile(selectedFile);
    },
    [validateFile]
  );

  // ---------- Preview Generator ----------
  useEffect(() => {
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  // ---------- Drag & Drop Handlers ----------
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFileSelect(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <section className="bg-white border border-borderColor p-5 rounded-[10px] max-w-md">

      {/* Upload Box */}
      <label
        htmlFor="thumbnailImage"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`
          w-[250px] h-[250px] rounded-[15px]
          border-2 border-dashed cursor-pointer
          flex flex-col justify-center items-center gap-2 transition-all overflow-hidden
          ${
            isDragging
              ? "border-brandColor bg-[#EEEFFD]"
              : "border-brandColor bg-bgColor"
          }
        `}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover rounded-[10px]"
          />
        ) : (
          <>
            <BsUpload className="text-3xl text-brandColor" />
            <p className="text-secend text-sm">Drag & Drop</p>
            <p className="text-secend text-xs">or click to upload</p>
          </>
        )}

        <input
          id="thumbnailImage"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={(e) => handleFileSelect(e.target.files[0])}
        />
      </label>

      {/* Error Message */}
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

   

      {/* Category Name */}
      <h2 className="text-base font-medium text-secend mt-5">
        Category name
      </h2>

      <input
        className="
          w-full lg:w-[400px] h-[45px] border border-borderColor
          outline-none mt-2 rounded-[10px]
          px-3 bg-bgColor
          focus:ring-2 focus:ring-brandColor
        "
        type="text"
        placeholder="Enter category name"
      />
      <button className="px-5 py-1 active:scale-[1.1] mt-5 rounded-[5px] bg-brandColor text-lg font-medium  font-poppins text-white">upload</button>
    </section>
  );
}
