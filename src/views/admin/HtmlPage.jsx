import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Messaege } from "../../helper/helper";
import { getIdUserProgress } from "../../api";
function HtmlPage() {
  const [progress, setprogress] = useState();
  const data = [
    {
      nama: "Berkenalan Dengan HTML",
      link: "/admin/teori-1",
      progress: progress,
    },
    {
      nama: "Tag, Atribut dan Elemen Pada HTML",
      link: "/admin/teori-1",
      progress: "0",
    },
    {
      nama: "Struktur Dasar Pada HTML",
      link: "/admin/teori-1",
      progress: "0",
    },
    {
      nama: "Membuat Tabel Pada HTML",
      link: "/admin/teori-1",
      progress: "0",
    },
    {
      nama: "Formulir pada HTML",
      // link: "/admin/teori-1",
    },
    {
      nama: "HTML Lanjutan",
      // link: "/admin/teori-1",
    },
  ];
  const getIdprogress = async () => {
    try {
      const response = await getIdUserProgress(
        `/${localStorage.getItem("idUser")}`
      );
      console.log(response);
      setprogress(response.data.data[0].progress1);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };
  useEffect(() => {
    getIdprogress();
  }, []);
  return (
    <div className="mx-40 my-20">
      <h1 className="text-center text-black text-2xl font-medium mb-10">
        Pelajari semua HTML ini
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {data.map((item) => (
          <div class="border-2 rounded overflow-hidden ">
            <p class="p-4 font-medium text-sm">{item.nama}</p>
            <div class="border-b-2 m-0"></div>
            <div className="flex items-center justify-center my-16">
              <Progress type="circle" percent={item.progress} />
            </div>
            <div class="border-t-2">
              <Link to={item.link}>
                <a
                  target="_blank"
                  className="block w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-gray-50 rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                >
                  Belajar
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HtmlPage;
