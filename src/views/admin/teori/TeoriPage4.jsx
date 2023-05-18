import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage4() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #2</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
                d. Pengertian Element pada HTML
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-black mb-3">
              Element adalah kesatuan antara tag (tag pembuka juga penutup),
              atribut tagnya (jika ada) dan isinya. Isi element bukan hanya
              berupa teks saja, tapi bisa berupa tag lain yang ada pada suatu
              element. Silahkan lihat contoh kode berikut:
            </div>
            <div className="text-sm text-white pt-5 px-20 pb-3 mb-3 bg-slate-800">
              {"<!-- Element p -->"}
              <span className="text-sm text-white bg-slate-800 block">
                {
                  '<p id="letter"> <strong> Selamat </strong>pagi <u> dunia </u> <b>koding</b>'
                }
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {"<!-- Tag p -->"}
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {
                  "<p> <strong> Selamat </strong>pagi <u> dunia </u> <b>koding</b>"
                }
              </span>
            </div>
            <div className="text-sm text-black mb-3">Contoh Kode Lain: </div>
            <div className="text-sm text-white pt-5 px-20 pb-3 mb-3 bg-slate-800">
              {"<!-- Element Head -->"}
              <span className="text-sm text-white bg-slate-800 block">
                {"(<head>)<title>Leaniverse</title>(</head>)"}
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {"<!-- Tag Head -->"}
              </span>
              <span className="text-sm text-white bg-slate-800 block">
                {"(<head><title>Leaniverse</title></head>)"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-tag3">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/soal-tag5">
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

export default TeoriPage4;
