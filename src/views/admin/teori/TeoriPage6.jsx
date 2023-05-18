import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage6() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #3</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
                C. Meta Tag pada HTML
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-black mb-3">
              Meta tag adalah tag HTML yang berisi informasi tentang dokumen
              atau data. Bedanya dengan tag HTML lainnya, meta tag tidak
              ditampilkan kepada pengguna atau pengunjung website, melainkan
              hanya ditujukan untuk web browser atau program robot seperti mesin
              pencarian.
            </div>
            <div className="text-sm text-black mb-1">Cara Penulisan :</div>
            <div className="text-sm text-white pt-5 px-20 pb-3 mb-3 bg-slate-800">
              {'<html lang="id">'}{" "}
              <span className="text-sm text-white bg-slate-800 block">
                {"<html>"}
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {"<head>"}
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {"<title> Learniverse html"}
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {"</head>"}
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {"<body><p>hello world!</p></body>"}
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {"</html>"}
              </span>
            </div>
            <div className="text-sm text-black mb-3">
              Kode meta tag di atas berlaku untuk HTML5 yang sangat sudah
              disederhanakan. Untuk HTML4 atau XHTML kode meta tag nya seperti
              ini:
            </div>
          </div>
          <div className="text-sm text-white pt-5 px-20 pb-3 mb-3 bg-slate-800">
            {"<!DOCTYPE html>"}
            <span className="text-sm text-white bg-slate-800 block">
              {'<html lang="id">'}
            </span>
            <span className="text-sm text-white bg-slate-800 block">
              {"<head>"}
            </span>
            <span className="text-sm text-white bg-slate-800 block">
              {'<meta http-equiv="content-type" content="text/html">'}
            </span>
            <span className="text-sm text-white bg-slate-800 block">
              {"<title> Learniverse html"}
            </span>
            <span className="text-sm text-white bg-slate-800 block">
              {"</head>"}
            </span>
            <span className="text-sm text-white bg-slate-800 block">
              {"<body><p>hello world!</p></body>"}
            </span>
            <span className="text-sm text-white bg-slate-800 block">
              {"</html>"}
            </span>
          </div>
          <div className="text-sm text-black mb-3">
            Meta tag charset ini bersifat opsional. Walaupun bersifat opsional,
            hampir setiap halaman HTML menggunakan meta tag ini.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-tag5">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/soal-atribut2">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Selanjutnya
          </a>
        </Link>
      </div>
    </>
  );
}

export default TeoriPage6;
