
import { CiViewList } from "react-icons/ci";
import CommonProductOptin from "../components/common/CommonProductOptin";
import { BsBoxSeam } from "react-icons/bs";

const ProductPage = () => {
  return (
    <>
      <div className="mt-10 flex gap-5 flex-wrap px-[30px]">
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
    </>
  );
};

export default ProductPage;
