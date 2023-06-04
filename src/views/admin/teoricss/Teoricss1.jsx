import React from "react";
import { Link } from "react-router-dom";
function Teoricss1() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> CSS{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan css #1</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">Sejarah CSS</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600 mb-3">
              Cascading Style Sheets atau CSS adalah teknologi internet yang
              dianjurkan oleh World Wide Web Consortium (W3C) pada tahun 1996.
              Setelah CSS distandardisasi, Internet Explorer dan Netscape
              merilis versi terbaru browser mereka yang sesuai atau mendekati
              standar Cascading Style Sheets.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Hakon Wium Lie, CTO Opera, adalah pencipta atau penemu CSS. Ia
              lahir pada tahun 1965 di Norwegia dan pernah bekerja bersama Tim
              Berners-Lee di CERN. CSS merupakan penelitian Hakon untuk
              memperoleh gelar Ph.D. di Universitas Oslo. Dia membela
              disertasinya yang berjumlah 306 halaman untuk meraih gelar Ph.D.
              Sejak saat itu, CSS telah digunakan oleh pengembang web dan
              desainer web untuk menciptakan tampilan web yang menakjubkan.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              CSS tidak hanya diciptakan oleh Hakon, setelah pindah ke Opera
              dari W3C, Hakon dibantu oleh Bert Bos dalam menciptakan CSS.
              Dengan adanya CSS, pengelolaan gaya dan tampilan menjadi lebih
              efisien. Saat ini, CSS dikembangkan oleh World Wide Web Consortium
              (W3C).
            </div>
            <div className="text-xl font-bold text-black my-3">
              Penulisan pada CSS
            </div>

            <div className="text-sm text-neutral-600 mb-3">
              Pada saat masuk bagian CSS, sering dijumpai kode sebagai berikut:
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {'h3 {color: "black"}'}{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Bagian awal sebelum {} disebut sebagai selector, sementara bagian
              yang terletak di antara {} disebut sebagai declaration yang
              terdiri dari dua elemen, yaitu property dan value. Pada pernyataan
              di atas, selector yang digunakan adalah h1, sedangkan color
              merupakan property, dan #0789de merupakan value.{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Terdapat berbagai jenis selector CSS yang beragam, termasuk
              selector untuk ID, selector untuk class, selector untuk elemen
              (seperti contoh kode di atas), selector untuk semua elemen,
              selector atribut, selector dengan pseudocode, dan universal
              selector.
            </div>
            <div className="text-sm text-neutral-600 bg-neutral-400 mb-3">
              Ekstensi untuk berkas CSS adalah .css
            </div>
            <div className="text-xl font-bold text-black my-3">
              Fakta pada CSS
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Fakta menggunakan CSS di antaranya:
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Telah didukung oleh kebanyakan browser versi terbaru, tetapi tidak
              didukung oleh browser-browser lama.{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Menjaga HTML dalam penggunaan tag yang minimal, hal ini
              berpengaruh terhadap ukuran berkas dan kecepatan pengunduhan
              (kecepatan loading website).{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Dapat menampilkan konten utama terlebih dahulu, sementara gambar
              dapat ditampilkan sesudahnya.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Penerjemahan CSS setiap browser berbeda, tata letak akan berubah
              jika dilihat di berbagai browser.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              CSS adalah layouting Masa Depan dengan penggabungan bersama XHTML.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Banyak framework (Kerangka Kerja) CSS yang sangat membantu.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Komunitas yang sudah luas dan banyak.{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Banyak framework (Kerangka Kerja) CSS yang sangat membantu.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soalcss-2">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            sebelumnya
          </a>
        </Link>
        <Link to="/admin/soalcss-3">
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

export default Teoricss1;
