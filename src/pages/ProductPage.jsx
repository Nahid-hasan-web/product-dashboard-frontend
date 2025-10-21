
import { CiViewList } from "react-icons/ci";
import CommonProductOptin from "../components/common/CommonProductOptin";
import { BsBoxSeam } from "react-icons/bs";
import BreadCrumb from "../components/common/BreadCrumb";
import CommonHead from "../components/common/CommonHead";
import { VscInbox } from "react-icons/vsc";

const ProductPage = () => {
  return (
    <>
    <div className="px-[30px] pt-10">
    <CommonHead CommonHead_content={'Product Page'} />
    <BreadCrumb/>
    <h2 className="text-2xl font-medium font-poppins text-secend mt-5 ">Add Items</h2>

      <div className="mt-5 flex gap-5 flex-wrap  ">
        <CommonProductOptin
          cardIcon={
            <CiViewList className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-yellow-400" />
        }
        cardcontent={"Add catagory"}
        cardLink={'/'}
        />
        <CommonProductOptin
          cardIcon={
            <BsBoxSeam className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-yellow-400" />
        }
        cardcontent={"Add Product"}
        cardLink={'/addProduct'}
        cardColor={'blue-100'}
        />
      </div>

    <h2 className="text-2xl font-medium font-poppins text-secend mt-5 ">Items List</h2>

       <div className="mt-5 flex gap-5 flex-wrap  ">
        <CommonProductOptin
          cardIcon={
            <CiViewList className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-yellow-400" />
        }
        cardcontent={"View catagory"}
        cardLink={'/'}
        />
        <CommonProductOptin
          cardIcon={
            <BsBoxSeam className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-yellow-400" />
        }
        cardcontent={"View Product"}
        cardLink={'/addProduct'}
        cardColor={'blue-100'}
        />
        <CommonProductOptin
          cardIcon={
            <VscInbox className="text-6xl text-gray-400 transition-transform duration-500 group-hover:scale-125 group-hover:text-yellow-400" />
        }
        cardcontent={"Manage Product"}
        cardLink={'/addProduct'}
        cardColor={'blue-100'}
        />
      </div>
      </div>
    </>
  );
};

export default ProductPage;
