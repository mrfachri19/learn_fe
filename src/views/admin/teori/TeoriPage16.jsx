import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage16() {
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
            <div className="text-xl my-3 font-bold text-black">
              F. Input Type Date, Time dan Month
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • input type date (tanggal) untuk memproses tanggal, dan
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • input type time (waktu) untuk mengelola waktu, serta{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • input type month (bulan) untuk menginputkan bulan.{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Ketiga jenis input ini memiliki manfaat yang besar, seperti
              contohnya pada penginputan tanggal lahir atau tanggal
              check(in/out) pada formulir reservasi, dan penginputan jam
              masuk/keluar pada aplikasi absensi.{" "}
            </div>
            <div className="text-xl my-3 font-bold text-black">
              g. Input Type Number, Email, Color dan URL{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • Tag input dengan type "number" digunakan untuk membuat inputan
              yang hanya bisa diisi dengan angka.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • Tag input dengan type "color" digunakan untuk membuat inputan
              yang dapat digunakan untuk memilih warna.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • Tag input dengan type "email" digunakan untuk membuat inputan
              yang hanya bisa diisi dengan alamat email yang valid.
            </div>
            <div className="text-xl my-3 font-bold text-black">
              h. Input Type File dan Reset{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • Input type file digunakan untuk memungkinkan pengguna memasukkan
              file dari komputer mereka ke dalam formulir.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • Input type reset digunakan untuk memberikan pengguna opsi untuk
              mengulang pengisian formulir dengan menghapus data yang telah
              diisi sebelumnya dan mengembalikan formulir ke kondisi awal.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Jika Anda menggunakan input type file, diperlukan untuk
              menambahkan atribut enctype dengan nilai multipart/form-data. Jika
              tidak menambahkan atribut tersebut, maka pada saat diproses dapat
              terjadi kesalahan (error).
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-form7">
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

export default TeoriPage16;
