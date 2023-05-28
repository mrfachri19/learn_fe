import React from "react";
import Laki from "../../assets/images/Boy1.png";
import Laki2 from "../../assets/images/Boy2.png";
import Laki3 from "../../assets/images/Boy3.png";

import Cewek from "../../assets/images/cewek.png";
import Cewek2 from "../../assets/images/Girl2.png";
import Cewek3 from "../../assets/images/Girl3.png";
import medali1 from "../../assets/images/med1.png";
import medali2 from "../../assets/images/med2.png";

import { getIdUser } from "../../api";
import { Tabs } from "antd";

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
  return (
    <>
      <div class="mt-4 mb-6">
        <div class="mb-3 text-lg font-bold">Kemampuan dimiliki: </div>
        <div class="text-sm text-neutral-600">Html dan CSS </div>
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
          <img src={medali1} alt="" />{" "}
          <img src={medali2} alt="" />{" "}

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
          <img src={medali1} alt="" />{" "}
          <img src={medali1} alt="" />{" "}

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
                Poin Belajar 100
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
