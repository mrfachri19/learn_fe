import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Messaege } from "../../helper/helper";
import { getIdUserProgress } from "../../api";
function HtmlPage() {
  const [progress, setprogress] = useState();
  const [progress2, setprogress2] = useState();
  const [progress3, setprogress3] = useState();
  const [progress4, setprogress4] = useState();
  const [progress5, setprogress5] = useState();
  const [progress6, setprogress6] = useState();

  const data = [
    {
      nama: "Berkenalan Dengan HTML",
      link: "/admin/teori-1",
      progress: progress,
    },
    {
      nama: "Tag, Atribut dan Elemen Pada HTML",
      link: "/admin/teori",
      progress: progress2,
    },
    {
      nama: "Struktur Dasar Pada HTML",
      link: "/admin/teori-5",
      progress: progress3,
    },
    {
      nama: "Membuat Tabel Pada HTML",
      link: "/admin/teori-8",
      progress: progress4,
    },
    {
      nama: "Formulir pada HTML",
      link: "/admin/teori-13",
      progress: progress5,

    },
    {
      nama: "HTML Lanjutan",
      link: "/admin/teori-17",
      progress: progress6,

    },
  ];
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
                <button
                  target="_blank"
                  className={`block w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 ${item.progress == 100 ? "bg-gray-200" : "hover:bg-[#FFC933DD] bg-gray-50" }`}
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
  );
}

export default HtmlPage;
