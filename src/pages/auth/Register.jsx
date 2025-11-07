import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router";

const Register = () => {
  const [showPass , setShowPass] = useState(false)
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center px-4 py-4 sm:py-8">
        <div className="p-4 sm:p-6 md:p-8 w-full max-w-[95%] sm:max-w-[500px] bg-white rounded-[12px] sm:rounded-[16px] shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold font-poppins text-secend mb-4 sm:mb-6 text-center">
            Create Account
          </h2>

          <form className="space-y-3 sm:space-y-4">
            <div>
              <label
                htmlFor="username"
                className="text-sm font-medium font-poppins text-secend block mb-1.5 sm:mb-2"
              >
                User Name
              </label>
              <input
                placeholder="User name"
                type="text"
                id="username"
                name="username"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium font-poppins text-secend block mb-1.5 sm:mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base`}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="text-sm font-medium font-poppins text-secend block mb-1.5 sm:mb-2"
              >
                Address
              </label>
              <input
                placeholder="Enter Your Address"
                type="text"
                id="address"
                name="address"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base`}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium font-poppins text-secend block mb-1.5 sm:mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base`}
                placeholder="Enter your phone number"
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
                type={showPass ? "text" : "password"}
                id="password"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base`}
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

            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 mt-2 sm:mt-4 bg-brandColor text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm sm:text-base"
            >
              Register
            </button>
          </form>

          <p className="mt-4 sm:mt-6 text-center text-gray-600 text-sm sm:text-base">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-brandColor font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
