import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import axios from "axios";
import tostifyMsg from "../../helpers/totstifyMsg";
import { BeatLoader } from "react-spinners";
import Cookies from 'js-cookie';

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState({
    emailError: "border-gray-300 ",
    passwordError: "border-gray-300 ",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    // make sure formData is defined
    if (!formData || typeof formData !== "object") return;

    if (!formData.email) {
      setFormError((prev) => ({ ...prev, emailError: "border-red-500" }));
    }
    if (!formData.password) {
      setFormError((prev) => ({ ...prev, passwordError: "border-red-500" }));
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/login",
        formData
      );
      tostifyMsg("sucess", "Login sucess");
      navigate("/");
      setLoading(false);
      Cookies.set('token' , res.data.accessToken)
      console.log(res)

    } catch (err) {
      tostifyMsg("error", err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center px-4 py-4 sm:py-8">
        <div className="p-4 sm:p-6 md:p-8 w-full max-w-[95%] sm:max-w-[440px] bg-white rounded-[12px] sm:rounded-[16px] shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold font-poppins text-secend mb-4 sm:mb-6 text-center">
            Welcome back
          </h2>

          <form onSubmit={handelSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label
                htmlFor="email"
                className={`text-sm font-medium font-poppins text-secend block mb-1.5 sm:mb-2 `}
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                  setFormError((prev) => ({
                    ...prev,
                    emailError: "border-gray-300",
                  }));
                }}
                type="email"
                id="email"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border ${formError.emailError} focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base`}
                placeholder="Enter your email"
              />
            </div>

            <div className=" relative">
              <label
                htmlFor="password"
                className={`text-sm font-medium font-poppins text-secend block mb-1.5 sm:mb-2 `}
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }));
                  setFormError((prev) => ({
                    ...prev,
                    passwordError: "border-gray-300",
                  }));
                }}
                type={showPass ? "text" : "password"}
                id="password"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3  ${formError.passwordError} rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base`}
                placeholder="Enter your password"
              />
              {showPass ? (
                <IoEyeOutline
                  onClick={() => setShowPass(!showPass)}
                  className=" absolute bottom-4 text-secend right-3"
                />
              ) : (
                <IoEyeOffOutline
                  onClick={() => setShowPass(!showPass)}
                  className=" absolute bottom-4 text-secend right-3"
                />
              )}
            </div>

            <Link
              className="text-[12px] block text-end mb-0  font-medium font-poppins text-brandColor"
              to={"/forgotPassword"}
            >
              forgot password?
            </Link>
            {loading ?  (
              <div
                type="submit"
                className="w-full text-center active:scale-[1.1] duration-[4s] py-2.5 sm:py-3 mt-2 sm:mt-4 bg-brandColor text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm sm:text-base"
              >
                <BeatLoader size={10} color="#fff" />
              </div>
            )
            :
            (
              <button
                type="submit"
                className="w-full active:scale-[1.1] duration-[4s] py-2.5 sm:py-3 mt-2 sm:mt-4 bg-brandColor text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm sm:text-base"
              >
                Login
              </button>
            ) 
          }
          </form>

          <p className="mt-4 sm:mt-6 text-center text-gray-600 text-sm sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-brandColor font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
