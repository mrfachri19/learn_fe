import React, { useState, useEffect } from "react";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import html from "../../assets/images/html.png.png";
import css from "../../assets/images/css.png.png";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import Laki from "../../assets/images/laki.png";
import Cewek from "../../assets/images/cewek.png";

function PilihanBelajar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    showModal();
  }, []);
  return (
    <>
      <div className="my-10 m-auto flex mx-32">
        <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="max-w-md mx-auto">
            <img src={html} alt="" />
            <div className="p-4 sm:p-6">
              <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                Belajar HTML{" "}
              </p>

              <p className="text-[#7C7C80] font-[15px] mt-6">
                HyperText Markup Language yang biasa disingkat HTML adalah
                bahasa markah yang sangat berguna untuk membuat sebuah halaman
                (kerangka) website. Jika kalian ingin membuat website, maka
                kalian wajib belajar bahasa markah ini.
              </p>

              <div className="flex gap-x-4 mt-5">
                <img src={img2} alt="" />
                <p className="font-bold text-sm text-black">6 modul</p>
                <img src={img1} alt="" />
                <p className="font-bold text-sm text-black">45 soal</p>
              </div>
              <Link to="/admin/html">
                <a
                  target="_blank"
                  className="block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                >
                  Belajar
                </a>
              </Link>
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
                Cascading Style Sheets yang biasa disingkat CSS adalah
                sekumpulan kode yang digunakan untuk men-design bahasa markup
                seperti HTML. Cascading Style Sheets (CSS) sangat berguna sekali
                untuk mengelola dan meningkatkan UI/UX sebuah website.
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
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
      >
        <div className="w-full">
          <div className="flex gap-3 mx-2">
            <div className="flex justify-center">
              <img
                src={localStorage.getItem("gambar") == "01" ? Laki : Cewek}
                alt=""
              />
              <div className="block">
                <h1 className="text-[#7C7C80] text-xl mt-6 font-bold">
                  Selamat Datang di Learniverse!
                </h1>
                <p className="text-[#7C7C80] font-[15px] text-sm font-bold mt-6">
                  Di sini kalian akan mempelajari dasar pemahaman tentang HTML
                  dan juga CSS.{" "}
                  <span className="block mt-10">
                    Selain itu, kalian akan mendapatkan poin setelah mengerjakan
                    soal dan poin tersebut dapat ditukarkan dengan avatar kalian
                    dari universe lain.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default PilihanBelajar;
