import React, { useState } from "react";
import logo from "../../assets/images/logolearn.svg";
import { login } from "../../api/index";
import { useHistory } from "react-router-dom";
import { Messaege } from "../../helper/helper";
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const Login = async (e) => {
    try {
      e.preventDefault();
      const response = await login({
        email: email,
        password: password,
      });
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("idUser", response.data.data.id);
      localStorage.setItem("nama", response.data.data.name);
      localStorage.setItem("namalengkap", response.data.data.namaPengguna);
      localStorage.setItem("email", response.data.data.email);
      localStorage.setItem("gender", response.data.data.char);
      localStorage.setItem("point", response.data.data.point);

      Messaege("Succes", "Success Login", "success");
      setTimeout(() => {
        history.push("/admin");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };

  return (
    <>
      <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-full p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
        <div className="max-w-md w-full">
          <img src={logo} alt="" className="m-auto" />
          <div className="text-center">
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-8 content-center">
              <input
                className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
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
              {/* <div className="text-sm">
                <a href="#" className="text-indigo-400 hover:text-blue-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-gradient-to-r from-indigo-600 to-accentInformation-200  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                onClick={Login}
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
