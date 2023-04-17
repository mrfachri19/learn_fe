import React from "react";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import html from "../../assets/images/html.png.png";
import css from "../../assets/images/css.png.png";

function PilihanBelajar() {
  return (
    <div className="my-10 m-auto flex mx-32">
      <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <img src={html} alt="" />
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              Belajar HTML{" "}
            </p>

            <p className="text-[#7C7C80] font-[15px] mt-6">
              HyperText Markup Language yang biasa disingkat HTML adalah bahasa
              markah yang sangat berguna untuk membuat sebuah halaman (kerangka)
              website. Jika kalian ingin membuat website, maka kalian wajib
              belajar bahasa markah ini.
            </p>

            <div className="flex gap-x-4 mt-5">
              <img src={img2} alt="" />
              <p className="font-bold text-sm text-black">6 modul</p>
              <img src={img1} alt="" />
              <p className="font-bold text-sm text-black">45 soal</p>
            </div>

            <a
              target="_blank"
              href="/admin/html"
              className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Belajar
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <img src={css} alt="" />
          <div className="p-4 sm:p-6">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              Belajar CSS{" "}
            </p>

            <p className="text-[#7C7C80] font-[15px] mt-6">
            Cascading Style Sheets yang biasa disingkat CSS adalah sekumpulan kode yang digunakan untuk men-design bahasa markup seperti HTML. Cascading Style Sheets (CSS) sangat berguna sekali untuk mengelola dan meningkatkan UI/UX sebuah website.
            </p>

            <div className="flex gap-x-4 mt-5">
              <img src={img2} alt="" />
              <p className="font-bold text-sm text-black">6 modul</p>
              <img src={img1} alt="" />
              <p className="font-bold text-sm text-black">45 soal</p>
            </div>

            <a
              target="_blank"
              href="/admin/css"
              className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Belajar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PilihanBelajar;
