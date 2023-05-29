import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage12() {
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
                F. Tag Colgroup dan Col
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-black mb-3">
              {
                "Tag colgroup dan col pada HTML memiliki fungsi untuk mengaitkan tiap kolom secara keseluruhan."
              }
            </div>

            <div className="text-sm text-black mb-3">
              Berikut ini adalah contoh kode penerapannya :{" "}
              <a
                target="_blank"
                href="https://www.w3schools.com/html/html_table_colgroup.asp"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-tabel7">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/soal-tabel8">
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

export default TeoriPage12;
