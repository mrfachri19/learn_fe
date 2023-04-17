import React from "react";
import "./style.css";
import logo from "../../assets/images/logolearn.svg";
export const LoginPage = () => {
  return (
    <>
      <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-full p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
        <div className="max-w-md w-full">
          <div className="text-center">
            <img src={logo} alt="" className="ml-14" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Selamat Datang!
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Silakan daftar untuk membuat akun Anda dan mulai menikmati fitur
              kami
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <input
                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                type=""
                placeholder="mail@gmail.com"
                value="mail@gmail.com"
              />
            </div>
            <div className="mt-8 content-center">
              <input
                className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="Enter your password"
                value="*****|"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-indigo-400 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-gradient-to-r from-indigo-600 to-accentInformation-200  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
              >
                Sign in
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <a
                href="/auth/register"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
