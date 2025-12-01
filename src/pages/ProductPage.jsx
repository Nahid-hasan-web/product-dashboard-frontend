import { CiShop, CiViewList } from "react-icons/ci";
import CommonProductOptin from "../components/common/CommonProductOptin";
import { BsBoxSeam } from "react-icons/bs";
import BreadCrumb from "../components/common/BreadCrumb";
import CommonHead from "../components/common/CommonHead";
import { VscInbox } from "react-icons/vsc";
import { BiCategory } from "react-icons/bi";

const ProductPage = () => {
  return (
    <>
      <div className="px-[30px] pt-10">
        <CommonHead CommonHead_content={"Product Page"} />
        <BreadCrumb firstPage={"Products"} pageLink={"/products"} />
        <h2 className="text-2xl font-medium font-poppins text-secend mt-5 ">
          Add Items
        </h2>

        <div className="mt-5 flex gap-5 flex-wrap  ">
          <CommonProductOptin
            cardIcon={
              <CiViewList className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-green-400" />
            }
            cardcontent={"Add catagory"}
            cardLink={"/category"}
          />
          <CommonProductOptin
            cardIcon={
              <BsBoxSeam className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-yellow-400" />
            }
            cardcontent={"Add Product"}
            cardLink={"/addProduct"}
            cardColor={"blue-100"}
          />
        </div>

        <h2 className="text-2xl font-medium font-poppins text-secend mt-5 ">
          Items List
        </h2>

        <div className="mt-5 flex gap-5 flex-wrap  ">
          <CommonProductOptin
            cardIcon={
              <BiCategory className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-blue-400" />
            }
            cardcontent={"View catagory"}
            cardLink={"/category"}
          />
          <CommonProductOptin
            cardIcon={
              <CiShop className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-[#FB7BB8]" />
            }
            cardcontent={"View Product"}
            cardLink={"/allProduct"}
            cardColor={"blue-100"}
          />
          <CommonProductOptin
            cardIcon={
              <VscInbox className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-[#50D1B2]" />
            }
            cardcontent={"Manage Product"}
            cardLink={"/manage-prouduct"}
            cardColor={"blue-100"}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
