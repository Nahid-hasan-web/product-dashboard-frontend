import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center py-8">
        <div className="p-8 w-full lg:w-[400px] bg-white rounded-[16px] shadow-lg">
          <h2 className="text-3xl font-semibold font-poppins text-secend mb-6 text-center">
            Welcome back
          </h2>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium font-poppins text-secend block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium font-poppins text-secend block mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-brandColor text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
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
