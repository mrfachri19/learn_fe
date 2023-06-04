import React from "react";
import { Link } from "react-router-dom";
function Teoricss2() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> CSS{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan css #2</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
                Memadukan CSS dengan HTML
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600 mb-3">
              Untuk menggabungkan CSS dengan HTML, kalian dapat menggunakan tiga
              metode, yaitu :
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Internal CSS (berada pada tag head) External CSS (menggunakan file
              .css) Inline CSS (menggunakan atribut style).
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Sebelum menjelajahi topik ini lebih dalam, disarankan untuk
              menyelesaikan semua modul pelajaran HTML terlebih dahulu di
              Learniverse atau minimal memiliki pemahaman tentang HTML. Karena
              dalam materi ini, Anda akan menggunakan kode-kode HTML.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Pertama-tama, Anda akan mempelajari semua metode CSS tersebut agar
              Anda dapat mengenalinya dengan baik. Namun, untuk kelanjutan
              pembelajaran di Learniverse, Anda akan fokus menggunakan metode
              Internal CSS saja untuk memudahkan pemahaman CSS.{" "}
            </div>

            <div className="text-sm text-neutral-600 mb-3">
              Metode yang umum digunakan untuk menggabungkan CSS dan HTML adalah
              metode External CSS. Learniverse juga menggunakan metode External
              CSS untuk menghemat waktu, upaya, dan mengurangi jumlah kode dalam
              setiap file. Selain itu, metode External CSS juga memudahkan
              pemeliharaan website.{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Namun, dalam pembelajaran CSS di Learniverse, Anda akan lebih
              sering menggunakan metode Internal CSS. Mengapa menggunakan metode
              Internal CSS? Karena ini akan memudahkan proses pembelajaran Anda.{" "}
            </div>
            <div className="text-xl font-bold text-black my-3">
              Metode Internal CSS{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Metode internal CSS adalah salah satu cara untuk menerapkan CSS di
              dalam sebuah halaman HTML, tepatnya berada pada tag head. Dalam
              metode ini, kode CSS ditulis langsung di dalam file HTML
              menggunakan elemen {"<style>"}. Dengan demikian, aturan-aturan
              styling yang ditulis di dalam elemen {"<style>"} akan berlaku
              untuk elemen-elemen di dalam halaman HTML tersebut.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Metode internal CSS memungkinkan pengaturan tampilan yang spesifik
              untuk halaman yang bersangkutan, namun tidak dapat digunakan
              secara terpisah untuk halaman lain.
            </div>
            <div className="text-sm text-neutral-600  mb-3">
              Berikut adalah contoh kode metode internal CSS:{" "}
              <a
                target="_blank"
                href="https://www.w3schools.com/css/css_howto.asp"
                className="text-sm font-medium text-yellow-300"
              >
                {" "}
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Metode External CSS{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Metode external CSS adalah salah satu cara untuk menerapkan CSS
              pada halaman web dengan menyisipkan file CSS terpisah. Dalam
              metode ini, aturan-aturan styling ditulis dalam file CSS yang
              terpisah dari file HTML.{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Pada metode external CSS, kita membuat file dengan ekstensi .css
              yang berisi semua aturan CSS yang ingin diterapkan pada halaman
              web. Kemudian, kita menghubungkan file CSS tersebut dengan file
              HTML menggunakan elemen {"<link>"} di dalam elemen{" <head>"}.
              Dengan cara ini, aturan-aturan CSS dalam file eksternal akan
              diterapkan pada elemen-elemen dalam halaman web.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              File css terpisah yang bernama style.css :
              <a
                target="_blank"
                href="https://www.w3schools.com/css/css_howto.asp"
                className="text-sm font-medium text-yellow-300"
              >
                {" "}
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Metode Inline CSS{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Metode inline CSS adalah salah satu cara untuk menerapkan CSS
              secara langsung pada elemen HTML menggunakan atribut "style".
              Dalam metode ini, aturan CSS dituliskan langsung di dalam tag HTML
              yang terkait.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Dengan menggunakan metode inline CSS, kita dapat menentukan gaya
              (styling) secara spesifik untuk elemen tertentu dalam halaman
              HTML. Aturan CSS dituliskan di dalam atribut "style" pada elemen
              HTML yang ingin diubah tampilannya. Contohnya, kita dapat mengubah
              warna teks, latar belakang, ukuran font, dan properti-properti
              lainnya.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Berikut adalah contoh kode metode inline CSS :{" "}
              <a
                target="_blank"
                href="https://www.w3schools.com/css/css_howto.asp"
                className="text-sm font-medium text-yellow-300"
              >
                {" "}
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              CSS Selector (Class, ID, Attribute){" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              CSS Selector digunakan dalam CSS untuk memilih elemen HTML yang
              akan diberi gaya. Terdapat beberapa jenis CSS Selector yang umum
              digunakan, yaitu ID Selector, Class Selector, dan Attribute
              Selector.{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              ID Selector digunakan untuk memilih elemen dengan atribut "id"
              yang unik di dalam dokumen HTML. Dinyatakan dengan tanda pagar (#)
              diikuti dengan nama ID elemen. Contohnya, "#header" akan memilih
              elemen dengan atribut "id" bernama "header". Class Selector
              digunakan untuk memilih elemen dengan atribut "class". Dinyatakan
              dengan tanda titik (.) diikuti dengan nama class elemen.
              Contohnya, ".button" akan memilih semua elemen dengan atribut
              "class" bernama "button". Attribute Selector digunakan untuk
              memilih elemen berdasarkan atributnya. Ada beberapa jenis
              Attribute Selector, seperti [attribute], [attribute=value], dan
              [attribute~=value]. Misalnya, [target] akan memilih elemen dengan
              atribut "target", [type=text] akan memilih elemen dengan atribut
              "type" dan nilai "text", serta [class~=highlight] akan memilih
              elemen dengan atribut "class" yang mengandung kata "highlight".{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Menggunakan CSS Selector memungkinkan penerapan aturan CSS secara
              spesifik pada elemen yang diinginkan. Dengan kombinasi yang tepat
              dari ID Selector, Class Selector, dan Attribute Selector, kita
              dapat mengontrol tampilan halaman web dengan lebih presisi dan
              fleksibilitas.{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
            Berikut adalah contoh kode penerapan CSS Selector (Class, ID, Attribute) :              <a
                target="_blank"
                href="https://www.w3schools.com/cssref/css_selectors.php"
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
        <Link to="/admin/soalimpl-1">
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

export default Teoricss2;
