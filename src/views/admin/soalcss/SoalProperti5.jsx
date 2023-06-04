import React, { useEffect, useState } from "react";
import { Radio, Space } from "antd";
import { Link, useHistory } from "react-router-dom";
import { Send20Filled } from "@fluentui/react-icons";
import { Messaege, ModalBerhasil } from "../../../helper/helper";
import { getIdUser, updateProgressUsercss, updateUserPoint } from "../../../api";
import berhasil from "../../../assets/images/badgeLearn-FormulirHTML (1).png"

function SoalProperti5() {
  const [value, setValue] = useState(1);
  const [sukses, setSukses] = useState();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const [point, setpoint] = useState("");

  const getId = async () => {
    try {
      const response = await getIdUser(`/${localStorage.getItem("idUser")}`);
      setpoint(response.data.data[0].point);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getId();
  }, []);
  
  const history = useHistory();
  const Submit = () => {
    if (value == 4) {
      Messaege("Succes", "jawaban benar", "success");
      updateprogressUser();
      updateUser();
    } else {
      Messaege("Failed", `jawaban salah`, "error");
    }
  };

  const updateprogressUser = async () => {
    try {
      const response = await updateProgressUsercss(
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
  const updateUser = async () => {
    try {
      const response = await updateUserPoint(
        `/${localStorage.getItem("idUser")}`,
        {
          point: point + 3500,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };
  const suksesModul = () =>  {
    ModalBerhasil(berhasil);
  }
  return (
    <>
      <h5 className="md:ml-40 text-accentInformation-200">
        Belajar <span className="text-slate-500">/</span> Css{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Css #3</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="rounded-xl border p-5 shadow-md w-1/2 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl text-black font-bold">Soal 5</div>
            </div>
          </div>

          <div className="mt-4 mb-6">
            <div className="text-sm text-gray-900 mb-3">
              Yang manakah penulisan font-decoration yang benar?{" "}
            </div>
            <div className="text-sm text-gray-900 mt-10 mb-20 w-full">
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>{"text-decoration: line black;"} </Radio>
                  <Radio value={2}>text-decoration: dotted yellow; </Radio>
                  <Radio value={3}>
                    text-decoration: overline green solid;{" "}
                  </Radio>
                  <Radio value={4}>
                    text-decoration: underline double red;{" "}
                  </Radio>
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
        <Link to="/admin/soalproperti-4">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        {sukses == 200 ? (
          <Link to="/admin/css">
            <a
              target="_blank"
              className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              onClick={suksesModul}

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

export default SoalProperti5;
