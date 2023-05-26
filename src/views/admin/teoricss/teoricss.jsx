import React from "react";
import {Link} from "react-router-dom"
function TeoricssPage() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan css #1</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
                1. Berkenalan dengan HTML
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-base font-bold text-neutral-600 mb-3">
              a. Pengertian HTML
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Hypertext Markup Language (HTML) adalah bahasa markah yang
              digunakan untuk menghasilkan tampilan halaman website dan
              menampilkan berbagai informasi pada browser internet. Format
              hiperteks sederhana ini ditulis dalam file ASCII dan dipakai untuk
              memformat agar tampilan terintegrasi dan mudah dibaca oleh
              pengguna.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              HTML berawal dari SGML (Standard Generalized Markup Language) yang
              mana merupakan bahasa populer yang digunakan dalam industri
              penerbitan dan percetakan. Namun, dari bahasa ini muncul standar
              HTML yang saat ini digunakan secara meluas dalam menampilkan
              halaman web. HTML sekarang dianggap sebagai standar internet dan
              penggunaannya diatur oleh World Wide Web Consortium (W3C).
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              HTML dibuat atas hasil dari kolaborasi Robert Calilau dengan Tim
              Berners Lee ketika mereka bekerja di CERN pada tahun 1989 (CERN
              adalah lembaga penelitian fisika energi tinggi di Jenewa).
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Selamat mencoba dan semoga lancar.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
      <Link to="/admin">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/soal-1">
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

export default TeoricssPage;
