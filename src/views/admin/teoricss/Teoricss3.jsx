import React from "react";
import { Link } from "react-router-dom";
function Teoricss3() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> CSS{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan css #3</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10 min-h-screen">
        <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl font-bold text-black">Property Color</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600 mb-3">
              Property color berfungsi untuk mengatur warna teks atau font.
              Nilai (value) dari property color dapat berupa warna dalam bahasa
              Inggris, kode warna HEX, kode warna RGB, kode warna RGBA, kode
              warna HSL, dan kode warna HSLA.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Contoh property color yang isi (valuenya) berupa warna dalam
              bahasa inggris:
              <a
                target="_blank"
                href="https://www.w3schools.com/cssref/pr_text_color.php#:~:text=Definition%20and%20Usage%20The%20color%20property%20specifies%20the,color%20that%20makes%20the%20text%20easy%20to%20read."
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property font-size
            </div>

            <div className="text-sm text-neutral-600 mb-3">
              Property font-size berfungsi untuk mengatur ukuran teks atau font.
              Anda dapat mengatur ukuran teks atau font menjadi sangat kecil,
              kecil, sedang, besar, sangat besar, dan sangat besar sekali.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Property ini memiliki kegunaan yang sangat penting dalam pembuatan
              website responsif. Anda dapat menyesuaikan ukuran teks atau font
              sesuai dengan perangkat yang digunakan, seperti smartphone,
              tablet, laptop, dan komputer.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Contoh property color yang isi (valuenya) berupa warna dalam
              bahasa inggris:
              <a
                target="_blank"
                href="https://www.w3schools.com/css/css_font_size.asp"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property font-family{" "}
            </div>

            <div className="text-sm text-neutral-600 mb-3">
              Property ini memiliki peran penting dalam mengubah gaya teks atau
              font pada halaman website Anda (berbeda dengan font-style).
              Penggunaan property ini sangat bermanfaat untuk meningkatkan
              pengalaman pengguna pada halaman website Anda. Terasa monoton jika
              Anda hanya menggunakan satu jenis font pada website Anda.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Berikut adalah contoh penggunaan property font-family pada CSS:
              <a
                target="_blank"
                href="https://www.w3schools.com/css/css_font.asp"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property font-weight{" "}
            </div>

            <div className="text-sm text-neutral-600 mb-3">
              Property font-weight memiliki fungsi untuk mengubah ketebalan text
              atau font. Bisa menjadi tipis, normal, tebal dan sangat tebal.
              Berikut adalah cara penggunaan property font-weight pada CSS:
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property font-weight{" "}
            </div>

            <div className="text-sm text-neutral-600 mb-3">
              Property font-weight memiliki fungsi untuk mengubah ketebalan text
              atau font. Bisa menjadi tipis, normal, tebal dan sangat tebal.
              Berikut adalah cara penggunaan property font-weight pada CSS:
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Berikut adalah contoh penggunaan property font-weight pada CSS:
              <a
                target="_blank"
                href="https://www.w3schools.com/cssref/pr_font_weight.php"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property font-weight{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Seperti namanya, property text-decoration berfungsi untuk menghias
              atau memberikan dekorasi pada teks atau font. Anda dapat
              memberikan coretan, garis bawah, atau garis atas pada teks, serta
              mengubah gaya dan warna dekorasi garis sesuai keinginan.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Penulisan formatnya adalah: text-decoration: [garis
              (line-through/underline/overline) harus ada] [gaya
              (wavy/solid/double/dotted) opsional] [warna (dapat berbagai warna)
              opsional];.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Berikut adalah contoh penggunaan property text-decoration:
              <a
                target="_blank"
                href="https://www.w3schools.com/Css/css_text_decoration.asp"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property text-transform{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Property text-transform berguna untuk mengubah kapitalisasi pada
              text atau font. Misalkan mengubah text atau font menjadi huruf
              kecil semua, huruf besar semua atau kapital pada huruf pertama di
              masing-masing kata saja.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Berikut adalah contoh penggunaan property text-transform:{" "}
              <a
                target="_blank"
                href="https://www.w3schools.com/Css/css_text_decoration.asphttps://www.w3schools.com/cssref/pr_text_text-transform.php"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property Display{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Fungsi property display pada CSS ini adalah untuk menentukan
              bagaimana suatu element ditampilkan. Property ini bisa membuat
              suatu tag html yang bertipe block menjadi tidak bertipe block,
              atau sebaliknya membuat tag html yang tidak bertipe block menjadi
              tag yang bertipe block.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Banyak sekali nilai untuk property display ini, berikut adalah
              nilai-nilai untuk property display pada CSS:
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Fungsi property display pada CSS ini adalah untuk menentukan
              bagaimana suatu element ditampilkan. Property ini bisa membuat
              suatu tag html yang bertipe block menjadi tidak bertipe block,
              atau sebaliknya membuat tag html yang tidak bertipe block menjadi
              tag yang bertipe block.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              none = menyembunyikan elemen inline = Membuat element menjadi
              bersifat inline (hanya memakan tempat sesuai dengan konten element
              dan tidak bisa diatur width, height, margin dan paddingnya) block
              = Membuat element menjadi bersifat block (memakan tempat 100% ke
              samping (horizontal) dan bisa diatur width, height, margin juga
              paddingnya) inline-block = Gabungan dari sifat inline dan block,
              sifat akan sama seperti inline tapi bisa di atur width, height,
              margin dan paddingnya
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Berikut adalah contoh penggunaan property display:{" "}
              <a
                target="_blank"
                href="https://www.w3schools.com/css/css_display_visibility.asp"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property Visibility{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Property visibility pada CSS berfungsi untuk menyembunyikan dan
              menampilkan suatu elemen di web browser (dari pandangan user).
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Berikut adalah contoh penggunaan property visibility pada CSS:
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/visibilityp"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
            <div className="text-xl font-bold text-black my-3">
              Property Overflow{" "}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Property overflow pada CSS berguna untuk mengatur konten jika
              melebihi batas yang sudah di tentukan atau konten yang sudah
              melebihi parent element nya. Property overflow pada CSS memiliki 4
              isi (value) dengan fungsi yang berbeda tentunya. Berikut adalah
              nilai-nilai untuk property overflow pada CSS:
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              visible : Konten masih terlihat meski melewati batas parent nya.
              hidden : Konten yang melebihi parent nya akan disembunyikan.
              scroll : Konten yang melebihi parent nya akan disembunyikan.
              Tetapi kalian masih bisa melihat seluruh kontennya dengan
              menggerakan scroll bar. auto : Konten yang melebihi parent nya
              akan disembunyikan dengan scroll dan tanpa scroll.
            </div>

            <div className="text-sm text-neutral-600 mb-3">
              Berikut adalah beberapa contoh cara menggunakan property overflow
              pada CSS{" "}
              <a
                target="_blank"
                href="https://www.w3schools.com/css/css_overflow.asp"
                className="text-sm font-medium text-yellow-300"
              >
                disini
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soalproperti-1">
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

export default Teoricss3;
