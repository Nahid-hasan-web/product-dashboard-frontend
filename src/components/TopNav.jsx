import React, { useState, useEffect, useRef } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import {
  RiLogoutCircleRLine,
  RiSearch2Line,
  RiSettingsLine,
} from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdArrowDropUp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { userInfoReducer } from "../redux/infoSlice";
import { getCurrentUser } from "../api/authApi";

const TopNav = () => {
  const [listening, setListening] = useState(false);
  const [searchText, setSearchText] = useState("");
  const recognitionRef = useRef(null);
  const [show_profile_option, set_show_profile_option] = useState(false);

  // ----------------- voice command input
  useEffect(() => {
    if (
      !("webkitSpeechRecognition" in window) &&
      !("SpeechRecognition" in window)
    ) {
      alert("Your browser does not support Speech Recognition");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setSearchText(transcript);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleListening = () => {
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  // ---------------- logout
  const navigate = useNavigate();
  const reudxData = useSelector((state)=>state.reduxData.userInfo) 

  const handelLogOut = () => {
    navigate("/login");
    Cookies.remove("token");
    localStorage.removeItem("userInfo");
    dispatch(userInfoReducer(null));
  };
  return (
    <div className="w-full h-fit py-6 px-[50px] bg-white flex justify-between">
      {/* ----------- search input */}
      <div className="search lg:w-[360px] h-[48px] rounded-[12px] bg-bgColor flex items-center justify-between py-[14px] px-[18px]">
        <RiSearch2Line className="text-xl text-[#7E7E8F]" />
        <input
          className="flex-1 outline-none pl-2 text-[14px] font-poppins font-semibold text-[#C6CBD9]"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Type or speak..."
        />
        <button
          className={`w-8 h-8  text-xl flex justify-center items-center duration-[0.4s] ${
            listening
              ? "rounded-full bg-brandColor text-white animate-pulse"
              : "text-[#7E7E8F]"
          }`}
          onClick={toggleListening}
        >
          <CiMicrophoneOn />
        </button>
      </div>
      {/* ------------ profile datas */}
      <div className="flex items-center gap-[25px]">
        <button className="text-xl text-secend">
          <IoNotificationsOutline />
        </button>
        <div className="flex flex-col ">
          <h2 className="text-lg font-medium font-poppins text-secend">
            {reudxData?.userName}
          </h2>
          <p className="text-sm font-bold text-secend">{reudxData?.userRole}</p>
        </div>
        <button
          onClick={() => set_show_profile_option(!show_profile_option)}
          className="w-[48px] h-[48px] bg-brandColor rounded-full"
        ></button>
        {show_profile_option && (
          <div className=" bg-white  rounded-[5px]  absolute top-[10%] right-10 shadow-[1px_0px_11px_0px_rgba(0,_0,_0,_0.1)] text-center">
            <MdArrowDropUp className="text-3xl  absolute top-[-20px] text-brandColor left-[70px] " />
            <button className="flex items-center  px-5 py-2 gap-3  hover:bg-brandColor hover:text-white duration-[.4s]">
              <FaRegUser />
              Profile
            </button>
            <button className="flex items-center  px-5 py-2 gap-3  hover:bg-brandColor hover:text-white duration-[.4s]">
              <RiSettingsLine />
              Setting
            </button>
            <button
              onClick={handelLogOut}
              className="flex items-center  px-5 py-2 gap-3 hover:bg-brandColor hover:text-white duration-[.4s]"
            >
              <RiLogoutCircleRLine />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
