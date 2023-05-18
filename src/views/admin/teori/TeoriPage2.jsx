import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage2() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #1</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">Sejarah HTML</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600 mb-3">
              Tim Berners-Lee, seorang ahli fisika, pada tahun 1980 bekerja
              sebagai kontraktor di CERN (European Organization for Nuclear
              Research) yang bergerak dalam bidang penelitian nuklir. Di sana,
              ia mengusulkan dan mengembangkan sebuah sistem bernama ENQUIRE
              untuk memudahkan para ilmuwan CERN dalam berbagi dokumen. Setelah
              sembilan tahun, Berners-Lee kemudian mengusulkan pengembangan
              sebuah sistem markah berbasis internet.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Pada akhir tahun 1990, Berners-Lee menetapkan spesifikasi HTML dan
              mengembangkan perangkat lunak serta jaringannya. Saat itu, ia
              bersama dengan Robert Cailliau, seorang insinyur sistem data CERN,
              membuat permohonan pendanaan untuk proyek tersebut, tetapi usulan
              mereka tidak mendapat persetujuan resmi dari CERN.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Penjelasan pertama yang dibagi untuk umum dari HTML adalah sebuah
              dokumen yang disebut Tanda HTML, pertama kali disebutkan di
              Internet oleh Tim Berners-Lee pada akhir 1991.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Tanda ini menunjukkan 18 elemen dasar pertama yang merupakan versi
              awal sederhana dari HTML. Kecuali untuk tag hyperlink yang
              terpengaruh oleh SGMLguid, sebuah format dokumen berbasis Standard
              Generalized Markup Language (SGML) yang dikembangkan di CERN.
              Sebelas elemen tersebut masih tetap digunakan di dalam HTML 4.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Selamat mencoba dan semoga lancar.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/soal-2">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/soal-3">
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

export default TeoriPage2;
