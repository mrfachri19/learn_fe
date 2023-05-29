import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage14() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #5</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
              D.	Menghubungkan Tag Label (Atribut for) dan Tag Input (Atribut id)
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600 mb-3">
            Elemen tag "label" pada HTML digunakan untuk memberikan label atau keterangan terhadap suatu elemen form seperti input, select, atau textarea. Fungsi dari label ini adalah untuk memberikan deskripsi atau nama pada elemen form tersebut agar lebih mudah dipahami oleh pengguna dan membantu aksesibilitas pada website.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
            Pada HTML, label dan elemen input dapat dihubungkan dengan menggunakan atribut "for" pada tag "label" dan "id" pada tag "input". Hal ini memungkinkan pengguna untuk mengklik label sebagai ganti mengklik input itu sendiri. Dengan demikian, area yang dapat diklik oleh pengguna menjadi lebih luas dan meningkatkan aksesibilitas pada website.            </div>
            
            <div className="text-sm text-black mb-3">
              Berikut adalah beberapa tag HTML yang sering dipakai dapat di
              lihat
              <a
                target="_blank"
                href="https://www.w3schools.com/html/html_forms_attributes.asp"
                className=" text-sm font-medium"
              >
                {' '}disini
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-form3">
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

export default TeoriPage14;
