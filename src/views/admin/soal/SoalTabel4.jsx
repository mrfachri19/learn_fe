import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send20Filled } from "@fluentui/react-icons";
function SoalTabel4() {
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #4</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="rounded-xl border p-5 shadow-md w-1/2 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl text-black font-bold">Soal 4</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-gray-900 mb-3">
              Lengkapi kode di bawah agar ketebalan border tabel menjadi 1
              pixel, lebar tabel menjadi 85 persen, tinggi baris ke satu 60
              pixel, tinggi baris ke dua 55 pixel dan lebar kolom ke dua pada
              baris ke 1 adalah 35 persen:
            </div>
            <div className="text-sm text-black pt-5 px-20 pb-3 mb-3 ">
              {"<!DOCTYPE html>"}
              <span className="text-sm text-black  block">
                {'<html lang="id">'}
              </span>
              <span className="text-sm text-black block">{"<head>"}</span>
              <span className="text-sm text-black block">
                {"<title> Learniverse html"}
              </span>
              <span className="text-sm text-black block">{"<body>"}</span>
              <span className="text-sm text-black block">
                {"<Table"}
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                />
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                />
                {">"}
              </span>
              <span className="text-sm text-black block">
                {"<tr"}{" "}
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                />
                {">"}
              </span>
              <span className="text-sm text-black block">{"<td>nama<td>"}</span>
              <span className="text-sm text-black block">
                {"<td"}
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                />
                {">umur<td>>"}
              </span>
              <span className="text-sm text-black block">
                {"<td>jenis kelamin<td>"}
              </span>
              <span className="text-sm text-black block">{"</tr>"}</span>
              <span className="text-sm text-black block">
                {"<tr"}{" "}
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                />
                {">"}
              </span>{" "}
              <span className="text-sm text-black block">{"<td>joe<td>"}</span>
              <span className="text-sm text-black block">
                {"<td>22 tahun<td>"}
              </span>
              <span className="text-sm text-black block">
                {"<td>laki-laki<td>"}
              </span>
              <span className="text-sm text-black block">{"</tr>"}</span>
              <span className="text-sm text-black block">{"</table>"}</span>
              <span className="text-sm text-black block">{"</body>"}</span>
              <span className="text-sm text-black block">{"</html>"}</span>
            </div>

            <div
              className="rounded-full w-10 h-10 bg-red-700 pt-1 ml-auto"
              style={{ paddingLeft: "14px" }}
            >
              <Send20Filled className="w-3 text-white" height="50%" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/soal-tag3">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/teori-10">
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

export default SoalTabel4;
