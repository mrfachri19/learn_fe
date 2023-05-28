import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage5() {
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
                3. Struktur Dasar HTML
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-xl font-bold text-black">
              a. Struktur Dasar HTML
            </div>
            <div className="text-sm text-black mb-3">
              Struktur dasar untuk membangun suatu dokumen html yaitu harus
              memiliki:
            </div>
            <div className="text-sm text-black mb-1">
              • {"<!"}DOCTYPE html{">"} untuk mendefinisikan tipe html 5
              (terbaru).
            </div>
            <div className="text-sm text-black mb-1">• Tag html.</div>
            <div className="text-sm text-black mb-1">
              • Tag head yang posisi nya di dalam tag html.
            </div>
            <div className="text-sm text-black mb-1">
              • Tag title yang posisi nya di dalam tag head.
            </div>
            <div className="text-sm text-black mb-1">
              • Tag body yang posisi nya di dalam tag html setelah tag head.{" "}
            </div>
            <div className="text-sm text-white pt-5 px-20 pb-3 mb-3 bg-slate-800">
              {"<!DOCTYPE html>"}
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
              Jika tidak mendefinisikan tipe dokumen, tampilan akan tetap
              terlihat baik. Namun, jika mencampur kode HTML dan CSS untuk
              desain web, maka web yang dihasilkan tidak akan optimal. Oleh
              karena itu, web browser akan melakukan optimalisasi kode HTML jika
              ada deklarasi jenis dokumen secara jelas.
            </div>
            <div className="text-xl font-bold text-black">
              b. Atribut Language pada HTML
            </div>
            <div className="text-sm text-black my-3">Cara penulisan :</div>
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
            Fungsi dari atribut ini adalah untuk menentukan bahasa utama dokumen
            HTML. Seperti yang sudah dijelaskan sebelumnya, jika ingin dokumen
            HTML menggunakan bahasa Indonesia, bisa menentukan atribut lang
            dengan kode bahasa Indonesia yaitu "id".
          </div>
          <div className="text-sm text-black mb-3">
            Namun, jika ingin menggunakan bahasa Inggris, bisa mengubah isi
            atribut lang menjadi "en". Selain itu, atribut lang pada tag HTML
            ini juga membantu mesin pencarian untuk menentukan negara asal,
            sehingga ketika seseorang mencari informasi, mesin pencarian dapat
            lebih fokus pada negara tersebut.
          </div>
          <div className="text-sm text-black mb-3">
            Hal ini mempermudah orang Indonesia untuk menemukan website yang
            dibuat di mesin pencarian. Atribut ini juga berguna agar website
            dapat diterjemahkan ke bahasa lain oleh mesin pencarian seperti
            Google.
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-atribut1">
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

export default TeoriPage5;
