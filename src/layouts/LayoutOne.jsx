import { Outlet, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const LayoutOne = () => {
  const reduxData = useSelector((state)=>state.reduxData.userInfo) 
  const navigate = useNavigate()

  useEffect(()=>{
    if(reduxData=== null){
    navigate('/login')
  }
  },[])


  if(reduxData=== null){
    navigate('/login')
  }

  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="w-screen">
          <TopNav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutOne;
