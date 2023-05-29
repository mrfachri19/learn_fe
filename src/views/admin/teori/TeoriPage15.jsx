import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage15() {
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
                E. Tag Textarea, Select , Option, dan Optgroup{" "}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600 mb-3">
              {
                '•	Tag <textarea></textarea> digunakan untuk menampung inputan teks dalam jumlah yang banyak. Bedanya dengan tag <input type="text"> adalah tag <textarea></textarea> dapat diatur ukurannya menggunakan atribut cols (untuk mengatur lebar) dan atribut rows (untuk mengatur tinggi).'
              }
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {
                "•	Tag <select></select> digunakan untuk membuat inputan pilihan dalam bentuk dropdown, seperti halnya input type text. Namun, jika di-klik, daftar opsi akan muncul. •	Tag <option></option> adalah bagian dari tag <select></select> yang berfungsi sebagai menu pilihan. •	Tag <optgroup></optgroup> berguna untuk mengelompokkan tag <option></option> (mengelompokkan menu) pada tag <select></select>."
              }
            </div>

            
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-form4">
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

export default TeoriPage15;
