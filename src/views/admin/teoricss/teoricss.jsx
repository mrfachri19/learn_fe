import React from "react";
import { Link } from "react-router-dom";
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
                1. Berkenalan dengan CSS
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-base font-bold text-neutral-600 mb-3">
              Pengertian CSS
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              CSS (Cascading Style Sheets) adalah bahasa stylesheet yang
              digunakan untuk mengatur tampilan dan layout pada halaman web yang
              dibuat dengan HTML dan XHTML. Dengan CSS, kita dapat memisahkan
              antara konten (HTML) dan tampilan (styling) pada sebuah halaman
              web, sehingga memudahkan dalam pengaturan dan pemeliharaan
              website.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              CSS bekerja dengan menghubungkan elemen HTML pada halaman web
              dengan aturan styling yang diterapkan pada elemen tersebut. Aturan
              styling ini dapat berupa warna, font, margin, padding, dan lain
              sebagainya.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              CSS memiliki aturan kaskade yang menentukan urutan prioritas
              penerapan styling. Aturan ini memungkinkan pengembang untuk
              menentukan styling yang diterapkan pada elemen dengan lebih
              spesifik atau lebih umum. Hal ini memungkinkan pengembang untuk
              membuat styling yang lebih kompleks dan mudah diatur.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Dalam pengembangan website, CSS merupakan bagian penting dari tiga
              teknologi inti web, yaitu HTML, CSS, dan JavaScript. Dalam
              kombinasi dengan teknologi lain, CSS memungkinkan pengembang untuk
              membuat halaman web yang menarik, mudah diakses, dan dapat diakses
              dari berbagai perangkat dan platform.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soalcss-1">
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
