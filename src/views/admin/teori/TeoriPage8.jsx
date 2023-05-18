import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage8() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #4</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 ">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
                4. Membuat Table pada HTML{" "}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-xl font-bold text-black mb-3">
              a. Tabel Sederhana pada HTML{" "}
            </div>
            <div className="text-sm text-black mb-3">
              Tabel sangatlah sering digunakan dalam pengelolaan data pada
              website. Maka dari itu, diperlukannya pengetahuan pembuatan tabel
              pada HTML. Dalam tabel, terdapat beberapa tag berikut :
              <a
                target="_blank"
                href="https://www.w3schools.com/html/html_tables.asp"
                className="text-sm font-medium text-yellow-300"
              >
                {" "}
                disini
              </a>
            </div>
            <div className="text-sm text-black mb-3">
              Untuk membuat tabel sederhana pada HTML, hanya membutuhkan 3 tag
              tabel yaitu{" <table>, <tr>, dan <td>."} Berikut ini adalah contoh
              kode HTML dalam membuat tabel sederhana :
              <a
                target="_blank"
                href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table3"
                className="text-sm font-medium text-yellow-300"
              >
                {" "}
                disini
              </a>
            </div>
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
        <Link to="/admin/soal-tabel1">
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

export default TeoriPage8;
