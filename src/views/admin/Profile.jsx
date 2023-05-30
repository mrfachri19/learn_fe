import React, { useEffect, useState } from "react";
import Laki from "../../assets/images/Boy1.png";
import Laki2 from "../../assets/images/Boy2.png";
import Laki3 from "../../assets/images/Boy3.png";

import Cewek from "../../assets/images/cewek.png";
import Cewek2 from "../../assets/images/Girl2.png";
import Cewek3 from "../../assets/images/Girl3.png";
import medali1 from "../../assets/images/med1.png";
import medali2 from "../../assets/images/med2.png";

import { getIdUser, getIdUserProgress } from "../../api";
import { Tabs } from "antd";
import { Messaege } from "../../helper/helper";

const Tab1 = () => {
  return (
    <>
      <div class="mt-4 mb-6">
        <div class="mb-3 text-lg font-bold">Nama Pengguna: </div>
        <div class="text-sm text-neutral-600">
          {localStorage.getItem("nama")}
        </div>
        <hr className="mt-3" />
        <div class="mb-3 text-lg font-bold">Nama Lengkap: </div>
        <div class="text-sm text-neutral-600">
          {localStorage.getItem("namalengkap")}
        </div>
        <hr className="mt-3" />
        <div class="mb-3 text-lg font-bold">Jenis Kelamin: </div>
        <div class="text-sm text-neutral-600">
          {localStorage.getItem("gender") == "boy01"
            ? "laki-laki"
            : "perempuan"}
        </div>
        <hr className="mt-3" />
        <div class="mb-3 text-lg font-bold">Email: </div>
        <div class="text-sm text-neutral-600">
          {localStorage.getItem("email")}
        </div>
        <hr className="mt-3" />
      </div>
    </>
  );
};

const Tab2 = () => {
  const [progress, setprogress] = useState();
  const [progress2, setprogress2] = useState();
  const [progress3, setprogress3] = useState();
  const [progress4, setprogress4] = useState();
  const [progress5, setprogress5] = useState();
  const [progress6, setprogress6] = useState();
  const getIdprogress = async () => {
    try {
      const response = await getIdUserProgress(
        `/${localStorage.getItem("idUser")}`
      );
      console.log(response);
      setprogress(response.data.data[0].progress1);
      setprogress2(response.data.data[0].progress2);
      setprogress3(response.data.data[0].progress3);
      setprogress4(response.data.data[0].progress4);
      setprogress5(response.data.data[0].progress5);
      setprogress6(response.data.data[0].progress6);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };
  useEffect(() => {
    getIdprogress();
  }, []);

  const progressHtml =
    progress + progress3 + progress2 + progress4 + progress5 + progress6;
  return (
    <>
      <div class="mt-4 mb-6">
        <div class="mb-3 text-lg font-bold">Kemampuan dimiliki: </div>
        <div className="flex my-3">
          {" "}
          <div class="text-lg text-neutral-600 mr-5">Html:</div>
          <div class="text-lg text-neutral-600">
            {progressHtml >= 600
              ? "100%"
              : progressHtml > 200 && progressHtml < 400
              ? "50%"
              : progressHtml == 0
              ? "0"
              : "20%"}
          </div>
        </div>
        <div className="flex">
          {" "}
          <div class="text-lg text-neutral-600 mr-5">CSS:</div>
          <div class="text-lg text-neutral-600">0 </div>
        </div>
      </div>
    </>
  );
};

const pencapaian = () => {
  return (
    <>
      <div class="mt-4 mb-6">
        <div class="mb-3 text-lg font-bold">
          Pencapaian {localStorage.getItem("nama")}:{" "}
        </div>
        <div class="mb-3 flex gap-3">
          <img src={medali1} alt="" /> <img src={medali2} alt="" />{" "}
        </div>
      </div>
    </>
  );
};
const sertifikat = () => {
  return (
    <>
      <div class="mt-4 mb-6">
        <div class="mb-3 text-lg font-bold">
          Sertifikat {localStorage.getItem("nama")}:{" "}
        </div>
        <div class="mb-3 flex gap-3">
          <img src={medali1} alt="" /> <img src={medali1} alt="" />{" "}
        </div>
      </div>
    </>
  );
};

function Profile() {
  // tabs
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "1",
      label: `Rincian`,
      children: Tab1(),
    },
    {
      key: "2",
      label: `Kemampuan`,
      children: Tab2(),
    },
  ];

  const items2 = [
    {
      key: "1",
      label: `Pencapaian`,
      children: pencapaian(),
    },
  ];

  return (
    <div className="flex mx-28 gap-5 mt-14">
      <div className="w-1/13 px-4">
        <div className="relative flex flex-col w-full bg-white mb-6 shadow-xl rounded-lg">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <img
                    src={
                      localStorage.getItem("gender") == "boy01"
                        ? Laki
                        : localStorage.getItem("gender") == "boy02"
                        ? Laki2
                        : localStorage.getItem("gender") == "boy03"
                        ? Laki3
                        : localStorage.getItem("gender") == "girl01"
                        ? Cewek
                        : localStorage.getItem("gender") == "girl02"
                        ? Cewek2
                        : Cewek3
                    }
                    className="shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                {localStorage.getItem("nama")}
              </h3>

              <div className="mt-2 text-blueGray-600 mb-5">
                Poin Belajar - {localStorage.getItem("point")}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        {" "}
        <div class="rounded-xl border p-5 shadow-md bg-white">
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
        <div class="rounded-xl border my-10 p-5 shadow-md bg-white">
          <Tabs defaultActiveKey="1" items={items2} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
