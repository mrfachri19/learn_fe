import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Send20Filled } from "@fluentui/react-icons";
import { Messaege } from "../../../helper/helper";
import { updateProgressUser } from "../../../api";
function SoalTag4() {
  const history = useHistory();
  const jawaban = "width=”300px” height=”250px”";
  const [text, setText] = useState("");
  const [sukses, setSukses] = useState();

  const Submit = () => {
    if (text == jawaban) {
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
          progress2: 80,
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
              <div className="text-xl text-black font-bold">Soal 4</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-gray-900 mb-3">
              Lengkapilah tag img di bawah agar hasil ukuran lebar gambarnya
              300px dan tinggi gambarnya 250px:
            </div>
            <div className="block">
              <div className="flex items-center align-middle">
                <div className="text-sm text-gray-900 mb-3 mx-5 mt-6">
                  {'img src="folder-gambar/file-gambar.jpg"'}
                </div>
                <input
                  type="text"
                  className="w-64 rounded-lg border-0 border-b border-gray-400 p-2"
                  onChange={(e) => setText(e.target.value)}
                />

                <div className="text-sm text-gray-900 mb-3 mt-6">{">"}</div>
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
        <Link to="/admin/soal-tag3">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        <Link to="/admin/teori-4">
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

export default SoalTag4;
