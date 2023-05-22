import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../views/auth/Login";
import { RegisterPage } from "../views/auth/Register";
import Navbar from "../components/navbar";

export default function Auth() {
  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div
            className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-accentInformation-200 text-white bg-no-repeat bg-cover relative"
            style={{
              backgroundImage: `https://images.unsplash.com/photo-1579451861283-a2239070aaa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`,
            }}
          >
            <div className="absolute bg-accentInformation-200 z-0"></div>
            <div className="w-full  max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Learning is the only way to run the world.
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                {" "}
                Dapatkan keterampilan dasar dalam membuat halaman web dengan
                instruksi yang mudah diikuti
              </div>
            </div>
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
            <Suspense fallback={renderLoader()}>
              <Switch>
                <Route path="/auth/login" exact component={LoginPage} />
                <Route path="/auth/register" exact component={RegisterPage} />
                <Redirect from="/auth" to="/auth/login" />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
