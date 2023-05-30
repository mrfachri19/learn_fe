import React, { useState } from "react";
import { Radio, Space } from "antd";
import { Link, useHistory } from "react-router-dom";
import { Send20Filled } from "@fluentui/react-icons";
import { Messaege } from "../../../helper/helper";
import { updateProgressUser } from "../../../api";
function SoalHtml1() {
  const [value, setValue] = useState(1);
  const [sukses, setSukses] = useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const Submit = () => {
    if (value == 2) {
      Messaege("Succes", "jawaban benar", "success");
      updateprogressUser();
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
          progress6: 40,
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
        <span className="text-slate-500">Belajar dengan Html #6</span>
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
              Tipe list apakah yang digunakan pada contoh di bawah ini?{" "}
            </div>
            <div className="text-sm text-gray-900 mb-3">1. Abraham </div>
            <div className="text-sm text-gray-900 mb-3">2. David </div>
            <div className="text-sm text-gray-900 mb-3">3. Fadli </div>
            <div className="text-sm text-gray-900 mt-10 mb-20 w-full">
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>a. Unordered List  </Radio>
                  <Radio value={2}>b. Ordered List  </Radio>
                  <Radio value={3}>
                    c. Data  List {" "}
                  </Radio>
                  <Radio value={4}>d. Ordered List  </Radio>
                </Space>
              </Radio.Group>
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
        <Link to="/admin/soal-teori17">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        {sukses == 200 ? (
          <Link to="/admin/soal-html2">
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

export default SoalHtml1;
