import React, { useState } from "react";
import logo from "../assets/images/Logo Lerni 1.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Messaege } from "../helper/helper";
const Navbar = () => {
  const user = localStorage.getItem("token");
  const LogOut = () => {
    localStorage.clear();
    Messaege("Succes", "Success Logout", "success");
    setTimeout(() => {
      window.location.href = "/auth/login";
    }, 2000);
  };

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="h-15 bg-accentInformation-200 md:px-20">
        <div className="antialiased ">
          <div className="w-full text-gray-700">
            <div className="flex flex-col md:items-center md:justify-between md:flex-row">
              <div className="flex flex-row items-center justify-between p-4">
                <button
                  className="rounded-lg md:hidden focus:outline-none text-white cursor-pointer focus:shadow-outline"
                  onClick={() => setShow(!show)}
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    {/* <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path> */}
                  </svg>
                </button>
                <a href="/admin">
                  <img src={logo} alt="" />
                </a>
              </div>
              <nav
                className={`pb-4 md:pb-0 md:flex md:justify-end md:flex-row mx-5 ${
                  show == true ? "" : "hidden"
                }`}
              >
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-white"
                  href="/admin"
                >
                  Beranda
                </a>
                {user ? (
                  <a
                    className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-white block"
                    href="/admin/shop"
                  >
                    Shop
                  </a>
                ) : (
                  <></>
                )}

                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-white block"
                  href="/admin/leaderboard"
                >
                  LeaderBoard
                </a>
                {user ? (
                  <>
                    <a
                      className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-white"
                      href="/admin/profile"
                    >
                      Profile
                    </a>
                    <a
                      className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-white block"
                      href="/admin/pilihan-belajar"
                    >
                      Belajar
                    </a>
                    <div className="relative">
                      <button
                        className="flex flex-row text-white bg-transparent border-2 border-white items-center px-4 py-2 mt-2 text-sm font-semibold text-left rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={LogOut}
                      >
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative">
                      <Link to="/auth/login">
                        <button className="flex flex-row text-white bg-transparent border-2 border-white items-center px-4 py-2 mt-2 text-sm font-semibold text-left rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                          <span>Sign in</span>
                        </button>
                      </Link>
                    </div>
                    <div className="relative ">
                      <Link to="/auth/register">
                        <button className="flex flex-row text-white bg-transparent border-2 border-white items-center px-4 py-2 mt-2 text-sm font-semibold text-left rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                          <span className="">Sign up</span>
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
