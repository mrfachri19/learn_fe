import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../views/admin/HomePage";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PilihanBelajar from "../views/admin/PilihanBelajar";
import HtmlPage from "../views/admin/HtmlPage";
import CssPage from "../views/admin/CssPage";
import Profile from "../views/admin/Profile";

export default function Admin() {
 

  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      <div className="relative">
        <Navbar />
        {/* Header */}
        <div className="mx-auto w-full">
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route path="/admin" exact component={HomePage} />
              <Route path="/admin/pilihan-belajar" exact component={PilihanBelajar} />
              <Route path="/admin/html" exact component={HtmlPage} />
              <Route path="/admin/css" exact component={CssPage} />
              <Route path="/admin/profile" exact component={Profile} />

              <Redirect from="/admin" to="/admin" />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}
