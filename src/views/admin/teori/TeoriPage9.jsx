import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage9() {
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
                b. Mengatur Lebar Kolom, Tinggi Baris dan Lebar Tabel{" "}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-black mb-3">- Lebar Tabel</div>
            <div className="text-sm text-black mb-3 ml-5">
              Untuk mengatur lebar tabel bisa digunakan atribut width pada tag{" "}
              {"<table></table>"}, bisa berupa satuan pixel (px) bisa juga
              berupa satuan persen (%).
            </div>
            <div className="text-sm text-black mb-3">- Tinggi Baris</div>
            <div className="text-sm text-black mb-3 ml-5">
              Untuk mengatur tinggi baris pada tabel, dapat digunakan atribut
              height pada tag {"<tr></tr>"}.
            </div>
            <div className="text-sm text-black mb-3">- Lebar Kolom</div>
            <div className="text-sm text-black mb-3 ml-5">
              Sama hal nya seperti mengatur lebar tabel, kita menggunakan
              atribut width namun bedanya sekarang penempatan atribut width nya
              di tag {"<td></td> atau <th></th>"} (tag {"<th></th>"} memiliki
              fungsi yang sama persis dengan tag {"<td></td>"}. Tag{" "}
              {"<th></th>"} dibuat untuk menandakan sebuah kolom dari suatu
              tabel). Lebarnya juga bisa satuan pixel (px) atau satuan persen
              (%).
            </div>

            <div className="text-sm text-black mb-3">
              Berikut ini adalah contoh kode untuk mengatur lebar kolom, tinggi
              baris, dan lebar tabel :
              <a
                target="_blank"
                href="https://www.w3schools.com/html/html_table_sizes.asp"
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
        <Link to="/admin/soal-tabel3">
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

export default TeoriPage9;
