import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../views/admin/HomePage";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PilihanBelajar from "../views/admin/PilihanBelajar";
import HtmlPage from "../views/admin/HtmlPage";
import CssPage from "../views/admin/CssPage";
import Profile from "../views/admin/Profile";
import TeoriPage from "../views/admin/teori/TeoriPage";
import Soal1 from "../views/admin/soal/Soal1";
import Soal2 from "../views/admin/soal/Soal2";
import TeoriPage2 from "../views/admin/teori/TeoriPage2";
import TeoriPage1 from "../views/admin/teori/TeoriPage1";
import Soal3 from "../views/admin/soal/Soal3";
import Soal4 from "../views/admin/soal/Soal4";
import Soal5 from "../views/admin/soal/Soal5";
import SoalTag1 from "../views/admin/soal/SoalTag1";
import SoalTag2 from "../views/admin/soal/SoalTag2";
import TeoriPage3 from "../views/admin/teori/TeoriPage3";
import SoalTag3 from "../views/admin/soal/SoalTag3";
import SoalTag4 from "../views/admin/soal/SoalTag4";
import TeoriPage4 from "../views/admin/teori/TeoriPage4";
import SoalTag5 from "../views/admin/soal/SoalTag5";
import TeoriPage5 from "../views/admin/teori/TeoriPage5";
import SoalAtribut1 from "../views/admin/soal/SoalAtribut1";
import TeoriPage6 from "../views/admin/teori/TeoriPage6";
import SoalAtribut2 from "../views/admin/soal/SoalAtribut2";
import TeoriPage7 from "../views/admin/teori/TeoriPage7";
import SoalAtribut3 from "../views/admin/soal/SoalAtribut3";
import TeoriPage8 from "../views/admin/teori/TeoriPage8";
import SoalTabel1 from "../views/admin/soal/SoalTabel1";
import SoalTabel2 from "../views/admin/soal/SoalTabel2";
import TeoriPage9 from "../views/admin/teori/TeoriPage9";
import SoalTabel3 from "../views/admin/soal/SoalTabel3";
import SoalTabel4 from "../views/admin/soal/SoalTabel4";
import TeoriPage10 from "../views/admin/teori/TeoriPage10";
import SoalTabel5 from "../views/admin/soal/SoalTabel5";
import SoalTabel6 from "../views/admin/soal/SoalTabel6";
import LeaderBoard from "../views/admin/LeaderBoard";
import Shop from "../views/admin/Shop";

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
              <Route path="/admin/profile" exact component={Profile} />
              <Route path="/admin/leaderboard" exact component={LeaderBoard} />
              <Route path="/admin/pilihan-belajar" exact component={PilihanBelajar} />
              <Route path="/admin/shop" exact component={Shop} />
{/* =============================================================================== */}
              <Route path="/admin/html" exact component={HtmlPage} />
              <Route path="/admin/teori-1" exact component={TeoriPage1} />
              <Route path="/admin/soal-1" exact component={Soal1} />
              <Route path="/admin/soal-2" exact component={Soal2} />
              <Route path="/admin/teori-2" exact component={TeoriPage2} />
              <Route path="/admin/soal-3" exact component={Soal3} />
              <Route path="/admin/soal-4" exact component={Soal4} />
              <Route path="/admin/soal-5" exact component={Soal5} />
              <Route path="/admin/teori" exact component={TeoriPage} />
              <Route path="/admin/soal-tag1" exact component={SoalTag1} />
              <Route path="/admin/soal-tag2" exact component={SoalTag2} />
              <Route path="/admin/teori-3" exact component={TeoriPage3} />
              <Route path="/admin/soal-tag3" exact component={SoalTag3} />
              <Route path="/admin/soal-tag4" exact component={SoalTag4} />
              <Route path="/admin/teori-4" exact component={TeoriPage4} />
              <Route path="/admin/soal-tag5" exact component={SoalTag5} />
              <Route path="/admin/teori-5" exact component={TeoriPage5} />
              <Route path="/admin/soal-atribut1" exact component={SoalAtribut1} />
              <Route path="/admin/teori-6" exact component={TeoriPage6} />
              <Route path="/admin/soal-atribut2" exact component={SoalAtribut2} />
              <Route path="/admin/teori-7" exact component={TeoriPage7} />
              <Route path="/admin/soal-atribut3" exact component={SoalAtribut3} />
              <Route path="/admin/teori-8" exact component={TeoriPage8} />
              <Route path="/admin/soal-tabel1" exact component={SoalTabel1} />
              <Route path="/admin/soal-tabel2" exact component={SoalTabel2} />
              <Route path="/admin/teori-9" exact component={TeoriPage9} />
              <Route path="/admin/soal-tabel3" exact component={SoalTabel3} />
              <Route path="/admin/soal-tabel4" exact component={SoalTabel4} />
              <Route path="/admin/teori-10" exact component={TeoriPage10} />
              <Route path="/admin/soal-tabel5" exact component={SoalTabel5} />
              <Route path="/admin/soal-tabel6" exact component={SoalTabel6} />

              {/* ----------------------------------------------------------- */}
              <Route path="/admin/css" exact component={CssPage} />

              <Redirect from="/admin" to="/admin" />
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
}
