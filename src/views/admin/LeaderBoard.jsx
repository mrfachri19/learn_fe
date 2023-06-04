import React, { useEffect, useState } from "react";
import medali3 from "../../assets/images/Medali 5.png";
import medali2 from "../../assets/images/Medali 4.png";
import medali1 from "../../assets/images/Medali 1.png";
import { getAlluser, getIdUser } from "../../api";
import { Progress } from "antd";
import Laki from "../../assets/images/Boy1.png";
import Laki2 from "../../assets/images/Boy2.png";
import Laki3 from "../../assets/images/Boy3.png";
import Cewek from "../../assets/images/cewek.png";
import Cewek2 from "../../assets/images/Girl2.png";
import Cewek3 from "../../assets/images/Girl3.png";

function LeaderBoard() {
  const [user, setUser] = useState([]);
  const [user1, setUser1] = useState([]);
  const [gambar, setGambar] = useState("");
  const [point, setpoint] = useState("");

  const getAllUserLeaderboard = async () => {
    try {
      const response = await getAlluser();
      var temp = [];
      temp = response?.data?.data;
      let temps = temp.filter((item, index) => {
        return index < 3;
      });
      console.log(temps);
      setUser(temps);
    } catch (error) {
      console.log(error);
    }
  };
  const leaderboead = async () => {
    try {
      const response = await getAlluser();
      var temp = [];
      temp = response?.data?.data;
      let temps = temp.filter((item, index) => {
        return index > 2;
      });
      console.log(temps);
      setUser1(temps);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    leaderboead();
    getAllUserLeaderboard();
  }, []);

  const getId = async () => {
    try {
      const response = await getIdUser(`/${localStorage.getItem("idUser")}`);
      setGambar(response.data.data[0].karakter);
      setpoint(response.data.data[0].point);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getId();
  }, []);
  const [show, setShow] = useState(true);

  return (
    <div className="mx-32">
      <div className="grid grid-cols-3 my-20">
        {user.map((item, index) => (
          <div class="card w-60 mx-auto bg-white  shadow-xl hover:shadow">
            {item.karakter == "boy01" ? (
              <img
                src={Laki}
                className="w-28 mx-auto rounded-full border-8 border-white"
                alt=""
              />
            ) : (
              <></>
            )}
            {item.karakter == "boy02" ? (
              <img
                src={Laki2}
                className="w-28 mx-auto rounded-full border-8 border-white"
                alt=""
              />
            ) : (
              <></>
            )}
            {item.karakter == "boy03" ? (
              <img
                src={Laki3}
                className="w-28 mx-auto rounded-full border-8 border-white"
                alt=""
              />
            ) : (
              <></>
            )}
            {item.karakter == "girl01" ? (
              <img
                src={Cewek}
                className="w-28 mx-auto rounded-full border-8 border-white"
                alt=""
              />
            ) : (
              <></>
            )}
            {item.karakter == "girl02" ? (
              <img
                src={Cewek2}
                className="w-28 mx-auto rounded-full border-8 border-white"
                alt=""
              />
            ) : (
              <></>
            )}
            {item.karakter == "girl03" ? (
              <img
                src={Cewek3}
                className="w-28 mx-auto rounded-full border-8 border-white"
                alt=""
              />
            ) : (
              <></>
            )}
            <div class="text-center mt-2 text-base font-medium">
              {item.namaDepan + " " + item.namaBelakang}
            </div>
            <div class="text-center mt-2 font-light text-sm">
              {item.namaDepan}
            </div>
            <div class="text-center font-normal text-sm">
              {localStorage.getItem("email")}
            </div>
            <hr class="mt-3" />
            <div class="flex p-4">
              <div class="w-1/2 text-center text-sm ">
                <span class="font-bold block">
                  {item.point >= 9000
                    ? "100%"
                    : item.point < 9000 && item.point > 4500
                    ? "50%"
                    : item.point == 0
                    ? "0%"
                    : "10%"}
                </span>{" "}
                Progress
              </div>
              <div class="w-0 border border-gray-300 "></div>
              <div class="w-1/2 text-center text-sm  ">
                <span class="font-bold block"> {item.point}</span> Points
              </div>
            </div>
          </div>
        ))}
      </div>
      <table className="items-center w-full bg-transparent border-collapse">
        <tbody>
          {user1.map((item, index) => (
            <tr>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {gambar == "boy01" ? (
                  <img
                    src={"https://i.postimg.cc/rm7zTfjF/laki.png"}
                    className="w-28 mx-auto rounded-full border-8 border-white"
                    alt=""
                  />
                ) : "girl01" ? (
                  <img
                    src={"https://i.postimg.cc/T2m3mqQg/cewek.png"}
                    className="w-28 mx-auto rounded-full border-8 border-white"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {item.namaDepan + " " + item.namaBelakang}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {item.email}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                {item.point} Point
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2">
                    {item.point >= 8000 ? (
                      <>
                        <Progress
                          percent={100}
                          size="small"
                          style={{
                            width: 170,
                          }}
                        />
                      </>
                    ) : item.point >= 5000 && item.point < 8000 ? (
                      <>
                        <Progress
                          percent={80}
                          size="small"
                          style={{
                            width: 170,
                          }}
                        />
                      </>
                    ) : item.point >= 3000 && item.point < 5000 ? (
                      <>
                        <Progress
                          percent={50}
                          size="small"
                          style={{
                            width: 170,
                          }}
                        />
                      </>
                    ) : item.point > 0 && item.point < 3000 ? (
                      <>
                        <Progress
                          percent={30}
                          size="small"
                          style={{
                            width: 170,
                          }}
                        />
                      </>
                    ) : item.point == 0 ? (
                      <>
                        <Progress
                          percent={0}
                          size="small"
                          style={{
                            width: 170,
                          }}
                        />
                      </>
                    ) : (
                      <Progress
                        percent={0}
                        size="small"
                        style={{
                          width: 170,
                        }}
                      />
                    )}
                  </span>
                </div>
              </td>
              {/* <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                {show == true ? (
                  <a
                    target="_blank"
                    className="block align-middle items-center w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 cursor-pointer"
                    onClick={() => setShow(false)[index]}
                  >
                    add friend
                  </a>
                ) : (
                  <a
                    target="_blank"
                    className="block align-middle items-center w-full text-white px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-teal-900 rounded-[14px] hover:bg-teal-900 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 cursor-pointer"
                    // onClick={() => setShow(true)}
                  >
                    added friend
                  </a>
                )}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
