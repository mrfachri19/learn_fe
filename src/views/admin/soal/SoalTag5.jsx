import React, { useEffect, useState } from "react";
import { Radio, Space } from "antd";
import { Link } from "react-router-dom";
import { Send20Filled } from "@fluentui/react-icons";
import { Messaege, ModalBerhasil } from "../../../helper/helper";
import { getIdUser, updateProgressUser, updateUserPoint } from "../../../api";
import berhasil from "../../../assets/images/badgeLearn-TagAtributElemen.png"
function SoalTag5() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const [sukses, setSukses] = useState();
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
  
  const Submit = () => {
    if (value == 4) {
      Messaege("Succes", "jawaban benar", "success");
      updateprogressUser();
      updateUser();
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
          progress2: 100,
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
          point: point + 2000,
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
        Belajar <span className="text-slate-500">/</span> Html{" "}
        <span className="text-slate-500">/</span>{" "}
        <span className="text-slate-500">Belajar dengan Html #2</span>
      </h5>
      <div className="flex items-center justify-center mt-5 mb-10">
        <div className="rounded-xl border p-5 shadow-md w-1/2 bg-white">
          <div className="flex w-full items-center justify-between border-b pb-3">
            <div className="flex items-center">
              <div className="text-xl text-black font-bold">Soal 5</div>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-900 mb-3">
              Perhatikan kode berikut
            </div>
            <div className="block">
              <div className="text-sm text-gray-900 mx-5 mt-6">
                {'<form action ="proses.php" method="post"> '}
              </div>
              <div className="text-sm text-gray-900 mx-5 ">
                {'<label for="username">Username: </label> '}
              </div>
              <div className="text-sm text-gray-900 mx-5 ">{"<br> "}</div>
              <div className="text-sm text-gray-900 mx-5 ">
                {'<input type="text" name="username" id="username" required> '}
              </div>
              <div className="text-sm text-gray-900 mx-5 ">{"<br> "}</div>
              <div className="text-sm text-gray-900 mx-5 ">
                {'<input type="submit" name="submit" value="kirim"> '}
              </div>
              <div className="text-sm text-gray-900 mx-5 ">{"</form> "}</div>
            </div>
            <div className="text-sm text-gray-900 mt-5 mb-3">
              Element apa saja yang terdapat pada kode di atas?{" "}
            </div>
            <div className="text-sm text-gray-900 mb-20 w-full">
              <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                  <Radio value={1}>
                    a. form, action, method, label, for, br, input, type, name,
                    id
                  </Radio>
                  <Radio value={2}>b. form, action, submit, kirim </Radio>
                  <Radio value={3}>c. action, method, type, name, id </Radio>
                  <Radio value={4}>d. form, label, br, input </Radio>
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
        <Link to="/admin/soal-tag4">
          <a
            target="_blank"
            className="block w-28 px-4 py-3 text-sm font-medium tracking-wide text-center transition-colors duration-300 transform bg-slate-100 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Sebelumnya
          </a>
        </Link>
        {sukses == 200 ? (
          <Link to="/admin/html">
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

export default SoalTag5;
