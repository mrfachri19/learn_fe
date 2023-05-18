import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage3() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #2</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
                c. Pengertian Atribut pada HTML
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-black mb-3">
              Atribut adalah informasi tambahan yang diberikan pada tag.
              Informasi ini bisa berupa perintah untuk pemformatan teks,
              mengatur lebar dan tinggi, dan bisa juga untuk memodifikasi
              dokumen (Halaman Website) dengan CSS dan JavaScript.
            </div>
            <div className="text-sm text-black mb-3">
              Setiap atribut memiliki nama dan isi (value). Isi (value) diapit
              oleh tanda kutip, boleh menggunakan tanda kutip satu (') ataupun
              kutip dua ("). Penulisan atribut sebagai berikut: nama=”isi”.
            </div>
            <div className="text-sm text-black mb-3">
              Atribut diletakkan di dalam tag pembuka seperti contoh berikut:
            </div>
            <div className="text-sm text-white pt-5 px-20 pb-3 mb-3 bg-slate-800">
              {'<form action="simpan.php" method="POST"></Form>'}
              <span className="text-sm text-white bg-slate-800 block">
                {
                  '<img src="folder-gambar/file-gambar.png" widht="50%" height="350px"'
                }
              </span>
            </div>
            <div className="text-sm text-black mb-3">Penjelasan:</div>
            <div className="text-sm text-black mb-3">
              Di baris pertama kita mempunyai tag form yang mempunyai atribut
              action yang berisi simpan.php dan atribut method yang berisi POST.
              action dan method adalah nama atribut. simpan.php dan POST adalah
              isi atributnya. Fungsi atribut action adalah untuk mengarahkan ke
              lokasi file aksi untuk pemrosesan data formulir jika formulirnya
              disubmit (diproses), dan fungsi atribut method adalah untuk
              mendeklarasikan metodenya (POST/GET).
            </div>
            <div className="text-sm text-black mb-3">
              Di baris ke dua kita mempunyai tag img yang berfungsi untuk
              menampilkan gambar ke halaman web yang mempunyai 3 atribut yaitu
              src yang berisi gambar.png, width yang berisi 50% dan height yang
              berisi 350px. Atribut src berfungsi untuk mendeklarasikan lokasi
              gambar yang ingin ditampilkan, atribut width berfungsi untuk
              mengatur lebar gambar, dan atribut height berfungsi untuk mengatur
              tingginya gambar.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-tag2">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/soal-tag3">
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

export default TeoriPage3;
