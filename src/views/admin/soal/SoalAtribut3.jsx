import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Send20Filled } from "@fluentui/react-icons";
import { Messaege } from "../../../helper/helper";
import { updateProgressUser, updateUserPoint } from "../../../api";
function SoalAtribut3() {
  const [sukses, setSukses] = useState();
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const jawaban1 = 'charset="UTF-8"';
  const jawaban2 = "</title>";
  const jawaban3 = "</nav>";
  const jawaban4 = "</section>";
  const jawaban5 = "<footer>";
  const Submit = () => {
    if (
      value1 == jawaban1 &&
      value2 == jawaban2 &&
      value3 == jawaban3 &&
      value4 == jawaban4 &&
      value5 == jawaban5
    ) {
      Messaege("Succes", "jawaban benar", "success");
      updateprogressUser();
      updateUser()
      // history.push("/admin/teori");
    } else {
      Messaege("Failed", `jawaban salah`, "error");
    }
  };

  const updateUser = async () => {
    try {
      const response = await updateUserPoint(
        `/${localStorage.getItem("idUser")}`,
        {
          point: 100 * 3,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };

  const updateprogressUser = async () => {
    try {
      const response = await updateProgressUser(
        `/${localStorage.getItem("idUser")}`,
        {
          idUser: localStorage.getItem("idUser"),
          progress3: 100,
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
        <span className="text-slate-500">Belajar dengan Html #3</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="rounded-xl border p-5 shadow-md w-1/2 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl text-black font-bold">Soal 3</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-gray-900 mb-3">
              Isilah titik-titik dibawah ini
            </div>
            <div className="text-sm text-black pt-5 px-20 pb-3 mb-3 ">
              {"<!DOCTYPE html>"}
              <span className="text-sm text-black  block">
                {'<html lang="id">'}
              </span>
              <span className="text-sm text-black block">{"<head>"}</span>
              <span className="text-sm text-black  block">
                {"<meta charset="}
                <input
                  type="text"
                  className="w-40 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue1(e.target.value)}
                />
                {" >"}
              </span>
              <span className="text-sm text-black block">
                {"<title> Learniverse html"}
              </span>
              <input
                type="text"
                className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                onChange={(e) => setValue2(e.target.value)}
              />
              <span className="text-sm text-black block">{"</head>"}</span>
              <span className="text-sm text-black block">{"<body>"}</span>
              <span className="text-sm text-black block">{"<header>"}</span>
              <span className="text-sm text-black block">
                {"<nav> <!-- navigasi navbar -->"}{" "}
                <input
                  type="text"
                  className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setValue3(e.target.value)}
                />
              </span>
              <span className="text-sm text-black block">{"</header>"}</span>
              <span className="text-sm text-black block">{"<main>"}</span>
              <span className="text-sm text-black block">
                {"<section> <!--isi section-->"}
              </span>
              <input
                type="text"
                className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                onChange={(e) => setValue4(e.target.value)}
              />
              <span className="text-sm text-black block">{"</main>"}</span>
              <input
                type="text"
                className="w-28 rounded-lg border-0 border-b border-gray-400 p-2"
                onChange={(e) => setValue5(e.target.value)}
              />
              <span className="text-sm text-black block">
                {"<!-- isi footer -->"}
              </span>
              <span className="text-sm text-black block">{"</footer>"}</span>
              <span className="text-sm text-black block">{"</body>"}</span>
              <span className="text-sm text-black block">{"</html>"}</span>
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
        <Link to="/admin/soal-atribut2">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        {sukses == 200 ? (
          <Link to="/admin/teori-8">
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

export default SoalAtribut3;
