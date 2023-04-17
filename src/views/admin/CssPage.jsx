import React from "react";
import { Progress } from "antd";
function CssPage() {
  const data = [
    {
      nama: "Berkenalan Dengan CSS",
    },
    {
      nama: "Perpaduan CSS dengan HTML",
    },
    {
      nama: "Bekerja dengan Text",
    },
    {
      nama: "Property pada CSS   ",
    },
    {
      nama: "Posisi dan Layout Pada CSS",
    },
    {
      nama: "Background dan Gradasi",
    },
  ];
  return (
    <>
      <div className="mx-40 my-20">
        <h1 className="text-center text-black text-2xl font-medium mb-10">
          Pelajari semua CSS ini
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {data.map((item) => (
            <div class="border-2 rounded overflow-hidden ">
              <p class="p-4">{item.nama}</p>
              <div class="border-b-2 m-0"></div>
              <div class="m-auto">
                <div class="mx-20 my-6">
                  <Progress type="circle" percent={0} />
                </div>
              </div>
              <div class="border-t-2">
                <a
                  target="_blank"
                  href="foodiesapp://food/1001"
                  className="block w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-gray-50 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                >
                  Belajar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CssPage;
