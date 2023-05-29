import { Modal } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import button from "../../../assets/images/button.png"
function TeoriPage1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex">
      <div>
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
                  1. Berkenalan dengan HTML
                </div>
              </div>
            </div>

            <div className="mt-4 mb-6">
              <div className="text-base font-bold text-neutral-600 mb-3">
                a. Pengertian HTML
              </div>
              <div className="text-sm text-neutral-600 mb-3">
                Hypertext Markup Language (HTML) adalah bahasa markah yang
                digunakan untuk menghasilkan tampilan halaman website dan
                menampilkan berbagai informasi pada browser internet. Format
                hiperteks sederhana ini ditulis dalam file ASCII dan dipakai
                untuk memformat agar tampilan terintegrasi dan mudah dibaca oleh
                pengguna.
              </div>
              <div className="text-sm text-neutral-600 mb-3">
                HTML berawal dari SGML (Standard Generalized Markup Language)
                yang mana merupakan bahasa populer yang digunakan dalam industri
                penerbitan dan percetakan. Namun, dari bahasa ini muncul standar
                HTML yang saat ini digunakan secara meluas dalam menampilkan
                halaman web. HTML sekarang dianggap sebagai standar internet dan
                penggunaannya diatur oleh World Wide Web Consortium (W3C).
              </div>
              <div className="text-sm text-neutral-600 mb-3">
                HTML dibuat atas hasil dari kolaborasi Robert Calilau dengan Tim
                Berners Lee ketika mereka bekerja di CERN pada tahun 1989 (CERN
                adalah lembaga penelitian fisika energi tinggi di Jenewa).
              </div>
              <div className="text-sm text-neutral-600 mb-3">
                Selamat mencoba dan semoga lancar.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5 mb-10">
          <Link to="/admin/soal-1">
            <a
              target="_blank"
              className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Selanjutnya
            </a>
          </Link>
        </div>
      </div>

      <button className="m-auto hidden md:block" type="primary" onClick={showModal}>
        <img src={button} alt="" />
      </button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h1 className="font-bold my-3 text-xl">Berkenalan dengan HTML</h1>
        <p className="font-semibold text-base my-2">1. Pengertian HTML</p>
        <p className="font-semibold text-base my-2">2. Halaman Soal Modul 1 Soal 1</p>
        <p className="font-semibold text-base my-2">3. Halaman Soal Modul 1 Soal 2</p>
        <p className="font-semibold text-base my-2">4. Sejarah HTML</p>
        <p className="font-semibold text-base my-2">5. Halaman Soal Modul 1 Soal 3</p>
        <p className="font-semibold text-base my-2">6. Halaman Soal Modul 1 Soal 4</p>
        <p className="font-semibold text-base my-2">7. Halaman Soal Modul 1 Soal 5</p>
        <p className="font-semibold text-base my-2">8. Persiapan Tempur</p>
        <p className="font-semibold text-base my-2">9. Halaman Soal Modul 2 Soal 1</p>
        <p className="font-semibold text-base my-2">10. Halaman Soal Modul 2 Soal 2</p>
        <p className="font-semibold text-base my-2">11. Halaman Soal Modul 2 Soal 3</p>
        <p className="font-semibold text-base my-2">12. Halaman Soal Modul 2 Soal 4</p>
        <p className="font-semibold text-base my-2">13. Halaman Soal Modul 2 Soal 5</p>
        <p className="font-semibold text-base my-2">14. Struktur Dasar HTML</p>
        <p className="font-semibold text-base my-2">15. Halaman Soal Modul 3 Soal 1</p>
        <p className="font-semibold text-base my-2">16. Halaman Soal Modul 3 Soal 2</p>
        <p className="font-semibold text-base my-2">17. Halaman Soal Modul 3 Soal 3</p>
        <p className="font-semibold text-base my-2">18. Membuat Tabel Pada HTML</p>
        <p className="font-semibold text-base my-2">15. Halaman Soal Modul 4 Soal 1</p>
        <p className="font-semibold text-base my-2">15. Halaman Soal Modul 4 Soal 2</p>
        <p className="font-semibold text-base my-2">15. Halaman Soal Modul 4 Soal 3</p>
        <p className="font-semibold text-base my-2">15. Halaman Soal Modul 4 Soal 4</p>
        <p className="font-semibold text-base my-2">15. Halaman Soal Modul 4 Soal 5</p>
        <p className="font-semibold text-base my-2">15. Halaman Soal Modul 4 Soal 6</p>
      </Modal>
    </div>
  );
}

export default TeoriPage1;
