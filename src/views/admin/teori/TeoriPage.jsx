import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage() {
  const kodeHtml =
    "<!DOCTYPE html> <html> <head> <title>Belajar HTML</title> </head> <body> <p>Hallo dunia!!!</p> </body> </html>";
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #1</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">
                Persiapan Tempur
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-black mb-3">
              Sebelum kita belajar atau berselancar lebih jauh, mari kita
              berkenalan terlebih dahulu dengan alat dan bahan untuk menulis dan
              menampilkan kode HTML.
            </div>
            <div className="text-sm text-black mb-3">
              Pertama tama kita berkenalan dengan text editor, text editor
              adalah aplikasi yang bertujuan untuk memudahkan dalam menulis kode
              bahasa pemrograman. Kita bisa memanfaatkan text editor untuk
              menghemat waktu juga tenaga, khususnya untuk menulis kode html
              yang akan kita pelajari.
            </div>
            <div className="text-sm text-black mb-3">
              Berikut adalah beberapa text editor yang kami rekomendasikan untuk
              kalian pakai:
            </div>
            <div className="text-sm text-black mb-3">
              Visual studio code{" "}
              <span className="text-sm text-black my-1 block">
                Sublime Text
              </span>
              <span className="text-sm text-black mb-1 block">Atom</span>
              <span className="text-sm text-black mb-1 block">
                Adobe Dreamweaver
              </span>
              <span className="text-sm text-black mb-1 block">Komodo Edit</span>
              <span className="text-sm text-black mb-1 block">Notepad ++</span>
            </div>
            <div className="text-sm text-black mb-3">
              Tentunya masih banyak lagi text editor yang lain, sebenarnya kita
              memakai dan menulis kode html pada notepad biasa saja sudah cukup,
              tetapi jika kita akan menuliskan kode yang banyak maka akan
              memakan banyak waktu pula, karna itulah adanya text editor yang
              dikhususkan untuk para programmer, dengan fitur fitur yang cangih
              juga dukungan shortcut yang bertujuan untuk memudahkan para
              programmer.
            </div>
            <div className="text-sm text-black mb-3">
              Jika kita sudah menulis kode html dan kita ingin melihat hasilnya,
              maka yang kita butuhkan adalah web browser. Web browser adalah
              sebuah aplikasi untuk menerima, menampilkan, dan menerjemahkan
              informasi dari world wide web, lalu dibuat dalam format HTML. Jadi
              jika kita sudah menulis kode html dan menyimpannya dengan ekstensi
              maka browser akan menerjemahkan dan menampilkan hasil dari file
              yang terdapat kode html yang sudah kita tulis.
            </div>
            <div className="text-sm text-black mb-3">Contoh kode HTML</div>
            <div className="text-sm text-white pt-5 px-20 pb-3 mb-3 bg-slate-800">
              {kodeHtml}
            </div>
            <div className="text-sm text-black mb-3">
              Kode di atas hanya contoh, kalian akan mengetahui fungsi-fungsinya
              di modul berikutnya. Tugas kalian sekarang hanya untuk mengetahui
              terlebih dahulu alat bahan untuk belajar html dan bagaimana cara
              menjalankan dan menampilkan kode html.
            </div>
            <div className="text-sm text-black mb-3">
              Untuk menjalankan kode html dan menampilkan hasilnya, pertama tama
              kita buat folder terlebih dahulu, nama foldernya, Kita simpan di
              drive D saja agar memudahkan untuk mengaksesnya. Lalu buka text
              editornya dan ketik kode seperti di atas, lalu simpan di folder
              yang sudah kita buat dengan nama filenya yaitu
            </div>
            <div className="text-sm text-black mb-3">
              Lalu buka browser yang terdapat pada komputer kalian, boleh
              menggunakan Google Chrome, Mozilla Firefox, Opera, Internet
              Explorer dll. Tetapi kami sarankan untuk memakai web browser
              Google Chrome yang sangat banyak sekali penggunanya khususnya
              dikalangan pengembang website.
            </div>
            <div className="text-sm text-black mb-3">
              Dan klik kanan file tersebut, Open With {">"} Google Chrome (jika
              kalian menggunakan web browser google chrome) atau bisa kita
              arahkan direktori file yang telah kita buat di kolom url pada
              browser, seperti ini:
            </div>
            <div className="text-sm text-white pt-5 px-20 pb-3 mb-3 bg-slate-800">
              file:///D:/Belajar Html/belajar.html
            </div>
            <div className="text-sm text-black mb-3">
              Peraturan penulisannya adalah didahulukan dengan file:/// lalu
              diikuti dengan alamat (direktori) file html yang ingin kita
              jalankan dan kita lihat hasilnya.
            </div>
            <div className="text-sm text-black mb-3">
              Untuk menjalankan dan melihat hasil kode html kita tidak harus
              online, offline pun kita bisa melihatnya.
            </div>
            <div className="text-sm text-black mb-3">
              Selamat mencoba dan semoga lancar.
            </div>
            <div className="text-base font-bold text-black mb-3">
              2. Tag, Atribut, dan Elemen Pada HTML
            </div>
            <div className="text-sm font-bold text-black mb-3">
              a. Pengertian Tag Pada HTML
            </div>
            <div className="text-sm text-black mb-3">
              Ada tag, ada atribut, dan ada element pada html... bingung?,
              jangan bingung, kamu akan mempelajarinya di sini
            </div>
            <div className="text-sm text-black mb-3">
              Tag merupakan kode yang memiliki fungsi untuk memperkenalkan pada
              web browser untuk apa text HTML yang ditulis. HTML membutuhkan
              cara memperkenalkan text yang ditulis didalamnya kepada web
              browser. baik text itu berupa list, paragraf, link dan sebagainya.
              disinilah di gunakan tag. dalam penulisan tag, hampir semua
              menggunakan pembuka dan penutup tag, dimana objek yang di
              maksudkan berada diantara pembuka dan penutup tag. berikut
              penulisan tag yang digunakan dalam HTML.
            </div>
            <div className="text-sm text-black mb-3">Format tag dasar :</div>
            <div className="text-sm text-white pt-5 px-10 pb-3 mb-3 bg-slate-800">
              {"<pembuka>isi</penutup>"}
            </div>
            <div className="text-sm text-black mb-3">
              Yang ditandai disebut dengan tag HTML, Berikut ini beberapa contoh
              penggunaannya
            </div>
            <div className="text-sm text-white pt-5 px-10 pb-3 mb-3 bg-slate-800">
              {"<b>isi</b>"}
            </div>
            <div className="text-sm text-black mb-3">
              Hasilnya: mencetak tebal
            </div>
            <div className="text-sm text-white pt-5 px-10 pb-3 mb-3 bg-slate-800">
              {"<i>isi</i>"}
            </div>
            <div className="text-sm text-black mb-3">
              Hasilnya: mencetak miring
            </div>
            <div className="text-sm font-bold text-black mb-3">
              b. Tag-Tag pada HTML
            </div>
            <div className="text-sm text-black mb-3">
              Di bawah ini adalah tag yang terdapat pada HTML. Tag yang dicetak
              tebal merupakan tag yang umumnya digunakan. Di sini juga bisa
              diketahui mana tag yang memerlukan penutup dan tag yang tidak
              memerlukan penutup (solo tag){" "}
            </div>
            <div className="text-sm text-black mb-3">
              Berikut adalah beberapa tag HTML yang sering dipakai dapat di
              lihat
              <a
                target="_blank"
                href="https://www.w3schools.com/tags/default.asp"
                className=" text-sm font-medium"
              >
                {' '}disini
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-tag1">
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

export default TeoriPage;
