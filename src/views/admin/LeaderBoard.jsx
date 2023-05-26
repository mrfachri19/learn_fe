import React, { useEffect, useState } from "react";
import medali3 from "../../assets/images/Medali 5.png";
import medali2 from "../../assets/images/Medali 4.png";
import medali1 from "../../assets/images/Medali 1.png";
import { getAlluser } from "../../api";

function LeaderBoard() {
  const [user, setUser] = useState([]);
  const [user1, setUser1] = useState([]);

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
    leaderboead()
    getAllUserLeaderboard();
  }, []);

  return (
    <div className="mx-32">
      <div className="grid grid-cols-3 my-20">
        {user.map((item, index) => (
          <div class="card w-60 mx-auto bg-white  shadow-xl hover:shadow">
            <img
              src={index == 0 ? medali1 : index == 1 ? medali2 : medali3}
              alt=""
              className="ml-auto"
            />
            <img
              class="w-28 mx-auto rounded-full border-8 border-white"
              src="https://avatars.githubusercontent.com/u/67946056?v=4"
              alt=""
            />
            <div class="text-center mt-2 text-base font-medium">
              {item.namaDepan + " " + item.namaBelakang}
            </div>
            <div class="text-center mt-2 font-light text-sm">
              {item.namaDepan}
            </div>
            <div class="text-center font-normal text-sm">email</div>
            <hr class="mt-3" />
            <div class="flex p-4">
              <div class="w-1/2 text-center text-sm ">
                <span class="font-bold block">0 %</span> Progress
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
                <img
                  src="https://avatars.githubusercontent.com/u/67946056?v=4"
                  className="h-12 w-12 bg-white rounded-full border"
                  alt="..."
                ></img>{" "}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {item.namaDepan + " " + item.namaBelakang}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                email{" "}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {item.point} Point
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex items-center">
                  <span className="mr-2">Progress</span>
                </div>
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                <a
                  target="_blank"
                  className="block align-middle items-center w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80 cursor-pointer"
                >
                  Tambah Teman
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;