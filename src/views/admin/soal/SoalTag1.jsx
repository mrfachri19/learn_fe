import React, { useState } from "react";
import { Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { Send20Filled } from "@fluentui/react-icons";
import { Messaege } from "../../../helper/helper";
import { updateProgressUser, updateUserPoint } from "../../../api";
function SoalTag1() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  const [value11, setValue11] = useState("");
  const [value21, setValue21] = useState("");
  const [value31, setValue31] = useState("");
  const [value41, setValue41] = useState("");
  const [value51, setValue51] = useState("");
  const [value61, setValue61] = useState("");
  const [sukses, setSukses] = useState();

  const jawaban1 = "<b>";
  const jawaban2 = "</b>";
  const jawaban3 = "<i>";
  const jawaban4 = "</i>";
  const jawaban5 = "<p>";
  const jawaban6 = "</p>";

  const jawaban11 = "<!--";
  const jawaban21 = "-->";
  const jawaban31 = "<h6>";
  const jawaban41 = "</h6>";
  const jawaban51 = "<textarea>";
  const jawaban61 = "</textarea>";

  const Submit = () => {
    if (
      value1 == jawaban1 &&
      value2 == jawaban2 &&
      value3 == jawaban3 &&
      value4 == jawaban4 &&
      value5 == jawaban5 &&
      value6 == jawaban6 &&
      value11 == jawaban11 &&
      value21 == jawaban21 &&
      value31 == jawaban31 &&
      value41 == jawaban41 &&
      value51 == jawaban51 &&
      value61 == jawaban61
    ) {
      Messaege("Succes", "jawaban benar", "success");
      updateprogressUser();
      // history.push("/admin/teori");
    } else {
      Messaege("Failed", `jawaban salah`, "error");
    }
  };

  const updateprogressUser = async () => {
    try {
      const response = await updateProgressUser(
        `/${localStorage.getItem("idUser")}`,
        {
          idUser: localStorage.getItem("idUser"),
          progress2: 20,
        }
      );
      console.log(response);
      setSukses(response.data.status);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };

  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #2</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="rounded-xl border p-5 shadow-md w-1/2 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl text-black font-bold">Soal 1</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-gray-900 mb-3">
              Lengkapi semua inputan tag dengan benar{" "}
            </div>
            <div className="block">
              <div className="flex items-center align-middle">
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue1(e.target.value)}
                />
                <div className="text-sm text-gray-900 mb-3 mx-5 mt-6">
                  Teks akan menjadi tebal
                </div>
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue2(e.target.value)}
                />
              </div>
            </div>
            {/* -- */}
            <div className="block">
              <div className="flex">
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue3(e.target.value)}
                />
                <div className="text-sm text-gray-900 mb-3 mx-5 mt-6">
                  Teks akan menjadi miring
                </div>
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue4(e.target.value)}
                />
              </div>
            </div>
            {/* -- */}
            <div className="block">
              <div className="flex items-center align-middle">
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue5(e.target.value)}
                />
                <div className="text-sm text-gray-900 mb-3 mx-5 mt-6">
                  Membuat sebuah paragraph{" "}
                </div>
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue6(e.target.value)}
                />
              </div>
            </div>
            {/* -- */}
            <div className="block">
              <div className="flex items-center align-middle">
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue11(e.target.value)}
                />
                <div className="text-sm text-gray-900 mb-3 mx-5 mt-6">
                  Membuat sebuah komentar{" "}
                </div>
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue21(e.target.value)}
                />
              </div>
            </div>
            {/* -- */}
            <div className="block">
              <div className="flex items-center align-middle">
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue31(e.target.value)}
                />
                <div className="text-sm text-gray-900 mb-3 mx-5 mt-6">
                  Heading terkecil di HTML
                </div>
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue41(e.target.value)}
                />
              </div>
            </div>
            {/* -- */}
            <div className="block">
              <div className="flex items-center align-middle">
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue51(e.target.value)}
                />
                <div className="text-sm text-gray-900 mb-3 mx-5 mt-6">
                  Menginput banyak baris
                </div>
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue61(e.target.value)}
                />
              </div>
            </div>

            <div
              className="rounded-full w-10 h-10 bg-red-700 pt-1 ml-auto"
              style={{ paddingLeft: "14px" }}
              onClick={Submit}
            >
              <Send20Filled className="w-3 text-white" height="50%" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5 mb-10">
        <Link to="/admin/teori">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        {sukses == 200 ? (
          <Link to="/admin/soal-tag2">
            <a
              target="_blank"
              className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
            >
              Selanjutnya
            </a>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default SoalTag1;
