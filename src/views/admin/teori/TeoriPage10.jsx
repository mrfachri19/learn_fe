import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage10() {
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
                C. Atribut Align
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-black mb-3">
              Atribut align digunakan untuk mengatur posisi tabel dan posisi
              konten pada baris tabel atau posisi konten pada kolom tabel secara
              horizontal. Value dari atribut align ada 3 yaitu left, center, dan
              right.
            </div>

            <div className="text-sm text-black mb-3">
              Berikut ini adalah contoh kode penerapan atribut align :
              <a
                target="_blank"
                href="https://www.nesabamedia.com/penggunaan-atribut-align-dan-valign-pada-tabel-html/"
                className="text-sm font-medium text-yellow-300"
              >
                {" "}
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black">C. Atribut Align</div>
            <div className="text-sm text-black mb-3">
              Atribut align digunakan untuk mengatur posisi konten pada baris
              tabel atau posisi konten pada kolom tabel secara vertikal. Value
              dari atribut align ada 4 yaitu sebagai berikut :
            </div>
            <div className="text-sm text-black mb-3">
              Top = Membuat isi sel berada di atas
            </div>
            <div className="text-sm text-black mb-3">
              Middle = Membuat isi sel berada di tengah{" "}
            </div>
            <div className="text-sm text-black mb-3">
              Bottom = Membuat isi sel berada di bawah{" "}
            </div>
            <div className="text-sm text-black mb-3">
              Baseline = Membuat isi sel berada pada posisi teks pertama yang
              diketik pada kolom sel{" "}
            </div>
            <div className="text-sm text-black mb-3">
              Berikut ini adalah contoh kode penerapan atribut valign  :
              <a
                target="_blank"
                href="https://www.nesabamedia.com/penggunaan-atribut-align-dan-valign-pada-tabel-html/"
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
        <Link to="/admin/soal-tabel4">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/soal-tabel5">
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

export default TeoriPage10;
