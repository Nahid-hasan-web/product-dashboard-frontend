import { MdKeyboardArrowRight } from "react-icons/md";
import { RiHome5Line } from "react-icons/ri";
import { Link } from "react-router";

const BreadCrumb = ({
  pageName,
  pageLink,
  firstPage,
  firstPageLink,
  subpage,

}) => {
  return (
    <>
      <div className="flex items-center gap-1 mt-3">
        <Link
          to={"/"}
          className="flex items-center gap-1 text-sm font-normal font-poppins text-secend"
        >
          <RiHome5Line />
          Home
        </Link>
        <MdKeyboardArrowRight className="text-secend" />
        <Link
          to={pageLink}
          className={`flex items-center gap-1 text-sm font-normal font-poppins ${subpage? "text-secend":"text-brandColor"}`}
        >
          {pageName}
        </Link>
        <Link
          to={firstPageLink}
          className={`flex items-center gap-1 text-sm font-normal font-poppins ${
            !subpage ? "text-brandColor" : "text-secend"
          }`}
        >
          {firstPage}
        </Link>
        {subpage && <MdKeyboardArrowRight className="text-secend" />}
        <Link
          to={'#'}
          className="flex items-center gap-1 text-sm font-normal font-poppins text-brandColor"
        >
          {subpage}
        </Link>
      </div>
    </>
  );
};

export default BreadCrumb;
