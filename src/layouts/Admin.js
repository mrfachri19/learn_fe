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
import TeoriPage11 from "../views/admin/teori/TeoriPage11";
import SoalTabel7 from "../views/admin/soal/SoalTabel7";
import TeoriPage12 from "../views/admin/teori/TeoriPage12";
import SoalTabel8 from "../views/admin/soal/SoalTabel8";
import TeoriPage13 from "../views/admin/teori/TeoriPage13";
import SoalFormulir1 from "../views/admin/soal/SoalFormulir1";
import SoalFormulir2 from "../views/admin/soal/SoalFormulir2";
import TeoriPage14 from "../views/admin/teori/TeoriPage14";
import SoalFormulir3 from "../views/admin/soal/SoalFormulir3";
import TeoriPage15 from "../views/admin/teori/TeoriPage15";
import SoalFormulir4 from "../views/admin/soal/SoalFormulir4";
import SoalFormulir5 from "../views/admin/soal/SoalFormulir5";
import SoalFormulir6 from "../views/admin/soal/SoalFormulir6";
import TeoriPage16 from "../views/admin/teori/TeoriPage16";
import SoalFormulir7 from "../views/admin/soal/SoalFormulir7";
import TeoriPage17 from "../views/admin/teori/TeoriPage17";
import SoalHtml1 from "../views/admin/soal/SoalHtml1";
import SoalHtml2 from "../views/admin/soal/SoalHtml2";
import SoalHtml3 from "../views/admin/soal/SoalHtml3";
import TeoricssPage from "../views/admin/teoricss/teoricss";
import Soalcss1 from "../views/admin/soalcss/Soalcss1";
import Soalcss2 from "../views/admin/soalcss/Soalcss2";
import Teoricss1 from "../views/admin/teoricss/Teoricss1";
import Soalcss3 from "../views/admin/soalcss/Soalcss3";
import Soalcss4 from "../views/admin/soalcss/Soalcss4";
import Soalcss5 from "../views/admin/soalcss/Soalcss5";
import Teoricss2 from "../views/admin/teoricss/Teoricss2";
import SoalImplement1 from "../views/admin/soalcss/SoalImplement1";
import SoalImplement2 from "../views/admin/soalcss/SoalImplement2";
import SoalImplement3 from "../views/admin/soalcss/SoalImplement3";
import SoalImplement4 from "../views/admin/soalcss/SoalImplement4";
import SoalImplement5 from "../views/admin/soalcss/SoalImplement5";
import Teoricss3 from "../views/admin/teoricss/Teoricss3";
import SoalProperti1 from "../views/admin/soalcss/SoalProperti1";
import SoalProperti3 from "../views/admin/soalcss/SoalProperti3";
import SoalProperti2 from "../views/admin/soalcss/SoalProperti2";
import SoalProperti4 from "../views/admin/soalcss/SoalProperti4";
import SoalProperti5 from "../views/admin/soalcss/SoalProperti5";

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
              <Route path="/admin/teori-11" exact component={TeoriPage11} />
              <Route path="/admin/soal-tabel7" exact component={SoalTabel7} />
              <Route path="/admin/teori-12" exact component={TeoriPage12} />
              <Route path="/admin/soal-tabel8" exact component={SoalTabel8} />
              <Route path="/admin/teori-13" exact component={TeoriPage13} />
              <Route path="/admin/soal-form1" exact component={SoalFormulir1} />
              <Route path="/admin/soal-form2" exact component={SoalFormulir2} />
              <Route path="/admin/teori-14" exact component={TeoriPage14} />
              <Route path="/admin/soal-form3" exact component={SoalFormulir3} />
              <Route path="/admin/teori-15" exact component={TeoriPage15} />
              <Route path="/admin/soal-form4" exact component={SoalFormulir4} />
              <Route path="/admin/soal-form5" exact component={SoalFormulir5} />
              <Route path="/admin/soal-form6" exact component={SoalFormulir6} />
              <Route path="/admin/teori-16" exact component={TeoriPage16} />
              <Route path="/admin/soal-form7" exact component={SoalFormulir7} />
              <Route path="/admin/teori-17" exact component={TeoriPage17} />
              <Route path="/admin/soal-html1" exact component={SoalHtml1} />
              <Route path="/admin/soal-html2" exact component={SoalHtml2} />
              <Route path="/admin/soal-html3" exact component={SoalHtml3} />
              {/* ----------------------------------------------------------- */}
              <Route path="/admin/teoricss-1" exact component={TeoricssPage} />
              <Route path="/admin/soalcss-1" exact component={Soalcss1} />
              <Route path="/admin/soalcss-2" exact component={Soalcss2} />
              <Route path="/admin/teoricss-2" exact component={Teoricss1} />
              <Route path="/admin/soalcss-3" exact component={Soalcss3} />
              <Route path="/admin/soalcss-4" exact component={Soalcss4} />
              <Route path="/admin/soalcss-5" exact component={Soalcss5} />
              <Route path="/admin/teoricss-3" exact component={Teoricss2} />

              <Route path="/admin/soalimpl-1" exact component={SoalImplement1} />
              <Route path="/admin/soalimpl-2" exact component={SoalImplement2} />
              <Route path="/admin/soalimpl-3" exact component={SoalImplement3} />
              <Route path="/admin/soalimpl-4" exact component={SoalImplement4} />
              <Route path="/admin/soalimpl-5" exact component={SoalImplement5} />

              <Route path="/admin/teoricss-4" exact component={Teoricss3} />
              <Route path="/admin/soalproperti-1" exact component={SoalProperti1} />
              <Route path="/admin/soalproperti-2" exact component={SoalProperti2} />
              <Route path="/admin/soalproperti-3" exact component={SoalProperti3} />
              <Route path="/admin/soalproperti-4" exact component={SoalProperti4} />
              <Route path="/admin/soalproperti-5" exact component={SoalProperti5} />

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
