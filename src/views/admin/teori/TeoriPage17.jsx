import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage17() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #6</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
                6. HTML Lanjutan{" "}
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-xl font-bold text-black my-3">
              a. Membuat List pada HTML{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {
                "Pada HTML tersedia tag-tag untuk membuat dan mengatur list, dan terdapat tiga jenis list yaitu :"
              }
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {`•Ordered List (list yang memiliki urutan tertentu),
                •	Unordered List (list yang tidak memiliki urutan tertentu) 
                •	Data List.`}
            </div>
            <div className="text-xl my-3 font-bold text-black">
              {`•	<ol></ol>	Membuat suatu list yang beraturan.
•	<ul></ul>	Membuat suatu list yang tidak beraturan.
•	<li></li>	Mendefinisikan list (daftar), untuk tag <ol></ol> dan <ul></ul>.
•	<dl></dl>	Membuat data list.
•	<dt></dt>	Membuat judul list pada tag <dl></dl>.
•	<dd></dd>	Membuat deskripsi list pada tag <dl></dl>.
`}{" "}
            </div>
            <div className="text-xl font-bold text-black my-3">
              b. Tag yang Bersifat Inline dan Block{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              • Tag inline mengambil lebar web browser yang hanya cukup sesuai
              dengan isi kontennya. • Tag block mengambil seluruh lebar browser
              dan menempati satu baris penuh.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Beberapa tag yang bersifat inline:{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {`•	<a></a>
•	<span></span>
•	<img>
`}
            </div>
            <div className="text-xl my-3 font-bold text-black">
              Beberapa tag yang bersifat block:{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {`•	<p></p>
•	<div></div>
•	<h1></h1> ~ <h6></h6>
`}
            </div>
            <div className="text-xl font-bold text-black my-3">
              c. Tag Image, Audio, dan Video{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Menggunakan tag image, audio, dan video sangatlah penting dalam
              pembuatan website karena tujuannya adalah untuk memberikan
              kenyamanan kepada pengguna dan mempermudah penyampaian pesan.
              Meskipun demikian, cara penggunaan tag-tag tersebut tidak jauh
              berbeda, sehingga sangat mudah dipahami.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-html1">
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

export default TeoriPage17;
