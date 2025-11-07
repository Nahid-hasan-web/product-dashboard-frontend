import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center px-4 py-4 sm:py-8">
        <div className="p-4 sm:p-6 md:p-8 w-full max-w-[95%] sm:max-w-[440px] bg-white rounded-[12px] sm:rounded-[16px] shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold font-poppins text-secend mb-4 sm:mb-6 text-center">
            Welcome back
          </h2>

          <form className="space-y-4 sm:space-y-6">
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
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium font-poppins text-secend block mb-1.5 sm:mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent text-sm sm:text-base"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 sm:py-3 mt-2 sm:mt-4 bg-brandColor text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm sm:text-base"
            >
              Login
            </button>
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
