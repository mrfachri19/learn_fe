import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getIdUserProgresscss } from "../../api";
import { Messaege } from "../../helper/helper";
function CssPage() {
  const [progress, setprogress] = useState();
  const [progress2, setprogress2] = useState();
  const [progress3, setprogress3] = useState();
  const data = [
    {
      nama: "Berkenalan Dengan CSS",
      link: "/admin/teoricss-1",
      progress: progress,
    },
    {
      nama: "Perpaduan CSS dengan HTML",
      link: "/admin/teoricss-3",
      progress: progress2,
    },
    {
      nama: "Property pada CSS   ",
      link: "/admin/teoricss-4",
      progress: progress3,
    },
  ];

  const getIdprogress = async () => {
    try {
      const response = await getIdUserProgresscss(
        `/${localStorage.getItem("idUser")}`
      );
      console.log(response);
      setprogress(response.data.data[0].progress1);
      setprogress2(response.data.data[0].progress2);
      setprogress3(response.data.data[0].progress3);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `terjadi kesalahan`, "error");
    }
  };
  useEffect(() => {
    getIdprogress();
  }, []);
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
                <div className="flex items-center justify-center my-16">
                  <Progress type="circle" percent={item.progress} />
                </div>
              </div>
              <div class="border-t-2">
                <Link to={item.link}>
                  <button
                    target="_blank"
                    className={`block w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 ${
                      item.progress == 100
                        ? "bg-gray-200"
                        : "hover:bg-[#FFC933DD] bg-gray-50"
                    }`}
                    // disabled={item.progress < 100 ? true : false}
                  >
                    Belajar
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CssPage;
