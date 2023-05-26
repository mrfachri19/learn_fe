import React from "react";
import logo from "../assets/images/Logo Lerni 1.png";
import img1 from "../assets/images/dribbble.svg";
import img2 from "../assets/images/behance.svg";
import img3 from "../assets/images/githubb.svg";
import img4 from "../assets/images/linkedin.svg";

function footer() {
  return (
    <div className="bg-accentInformation-200">
      <div className="md:mx-40 mx-5 grid grid-cols-2 py-10">
        <div className="block">
          <img src={logo} alt="" />
          <p className="text-sm text-white mt-8">
            Dapatkan keterampilan dasar dalam membuat{" "}
            <span className="block">
              halaman web dengan instruksi yang mudah
            </span>{" "}
            diikuti
          </p>
          <p className="text-xs text-white mt-10">Copyright Learniverse 2023</p>
        </div>
        <div className="block ml-auto">
          <div className="flex mt-36 gap-x-5 ml-auto">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <div className="md:flex md:gap-x-5 ml-auto mt-10 block">
            <p className="text-xs text-white">Terms of Service</p>
            <p className="text-xs text-white">Privacy Policy</p>
            <p className="text-xs text-white">Cookie Policy</p>
            <p className="text-xs text-white">Acceptable Use Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
