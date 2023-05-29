import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function TeoriPage13() {
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
                A. Formulir pada HTML
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-neutral-600 mb-3">
              Formulir pada website memiliki fungsi untuk menginput dan
              memproses data atau mengumpulkan informasi dari pengguna di
              halaman website.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Pada sebuah form, terdapat tag sebagai berikut :
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {"•	<form></form>"}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {"•	<label></label>"}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {"•	<textarea></textarea>"}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {"•	<select></select>"}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {"•	<optgroup></optgroup>"}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {"•	<option></option>"}
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              Penggunaan formulir pada website paling sering digunakan untuk
              formulir pendaftaran (register) dan formulir masuk (login). Selain
              itu, masih banyak contoh lain untuk penggunaan formulir seperti
              untuk kontak kami dan lain-lain.
            </div>
            <div className="text-xl font-bold text-black">
              b. Membuat Formulir Sederhana{" "}
            </div>
            <div className="text-sm text-neutral-600 my-3">
              Dalam membuat formulir daftar anggota, dibutuhkan data inputan
              seperti nama pengguna, nama lengkap, email, dan kata sandi.
            </div>
            <div className="text-sm text-neutral-600 mb-3">
              {`•	Elemen tag form berfungsi untuk menentukan formulir dan memiliki dua atribut, yaitu action dan method. Nilai pada atribut action, seperti "daftar_anggota.php", menunjukkan file di mana formulir akan diproses ketika tombol daftar ditekan. Sedangkan nilai pada atribut method, seperti POST, digunakan untuk memberitahu formulir bahwa data akan disetor.
•	Elemen tag input dengan atribut type "text" digunakan untuk membuat kotak input yang dapat diisi dengan teks (string).
•	Elemen tag input dengan atribut type "email" digunakan untuk membuat kotak input yang harus diisi dengan alamat email yang valid.
•	Elemen tag input dengan atribut type "password" digunakan untuk membuat kotak input yang akan menampilkan karakter bintang (*) untuk setiap huruf atau angka yang dimasukkan.
•	Elemen tag input dengan atribut type "submit" digunakan untuk membuat tombol yang berfungsi sebagai eksekutor formulir ketika diklik. Atribut value digunakan untuk menampilkan teks visual pada tombol tersebut.
`}
            </div>
            <div className="text-xl font-bold text-black">
              c. Input Type Checkbox dan Radio{" "}
            </div>
            <div className="text-sm text-neutral-600 my-3">{`•	Elemen input type "radio" memungkinkan pengguna memilih salah satu opsi dari beberapa pilihan yang disediakan. Biasanya, elemen input type "radio" digunakan untuk pilihan yang eksklusif atau saling terkait, seperti jenis kelamin atau status perkawinan.	
•	Sedangkan elemen input type "checkbox" memungkinkan pengguna memilih beberapa opsi dari beberapa pilihan yang disediakan. Biasanya, elemen input type "checkbox" digunakan untuk pilihan yang bersifat independen, seperti pilihan produk dalam keranjang belanja atau pilihan opsi pada konfigurasi pengaturan pada suatu aplikasi.
•	Kedua elemen input ini perlu diberi atribut "name" yang sama pada setiap opsi pilihan, sehingga ketika formulir dikirimkan, server dapat mengidentifikasi dan memproses data yang dikirimkan dengan benar. Selain itu, pada setiap opsi pilihan perlu diberikan nilai "value" yang berbeda untuk mengidentifikasi nilai pilihan yang dikirimkan ketika formulir disetor.
`}</div>
            <div className="text-sm text-neutral-600 mb-3">
              Selamat mencoba dan semoga lancar.
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-form1">
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

export default TeoriPage13;
