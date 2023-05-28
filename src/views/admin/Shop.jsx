import React, { useEffect, useState } from "react";
import boy1 from "../../assets/images/Boy1.png";
import boy2 from "../../assets/images/Boy2.png";
import boy3 from "../../assets/images/Boy3.png";
import girl1 from "../../assets/images/Girl1.png";
import girl2 from "../../assets/images/Girl2.png";
import girl3 from "../../assets/images/Girl3.png";
import { getidShop, postShopuser, updateShopuser } from "../../api";
import { Messaege } from "../../helper/helper";

function Shop() {
  const [user, setUser] = useState([]);
  const [buy1, setBuy1] = useState("");
  const [buy2, setBuy2] = useState("");
  const [buy3, setBuy3] = useState("");
  const [buy4, setBuy4] = useState("");
  const [buy5, setBuy5] = useState("");
  const [buy6, setBuy6] = useState("");

  const ListShop = [
    {
      id: 1,
      photo: boy1,
      nama: "HighShooler",
      variant: "variant - Boy",

      value: buy1,
    },
    {
      id: 2,
      photo: boy2,
      nama: "Extra Stylish",
      variant: "variant - Boy",
      value: buy2,
    },
    {
      id: 3,
      photo: boy3,
      nama: "Not a Hacker",
      variant: "variant - Boy",
      value: user?.boy03,
      value: buy3,
    },
    {
      id: 4,
      photo: girl1,
      nama: "HighShooler",
      variant: "variant - Girl",
      value: buy4,
    },
    {
      id: 5,
      photo: girl2,
      nama: "HighShooler",
      variant: "variant - Girl",
      value: buy5,
    },
    {
      id: 6,
      photo: girl3,
      nama: "HighShooler",
      variant: "variant - Girl",
      value: buy6,
    },
  ];
  const getidUserShop = async () => {
    try {
      const response = await getidShop(`/${localStorage.getItem("idUser")}`);
      var temp = [];
      temp = response?.data?.data;
      console.log(temp);
      setUser(temp);
      setBuy1(temp[0].boy01);
      setBuy2(temp[0].boy02);
      setBuy3(temp[0].boy03);
      setBuy4(temp[0].girl01);
      setBuy5(temp[0].girl02);
      setBuy6(temp[0].girl03);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getidUserShop();
  }, []);

  return (
    <div className="grid grid-cols-3 mx-20 gap-5">
      {ListShop.map((item, idx) => (
        <div className=" my-10 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg mx-16" src={item.photo} alt="" />
          </a>
          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {item.nama}
            </h5>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
              {item.variant}
            </h5>
            {item.value == "ada" ? (
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg ml-3 text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Equip
              </button>
            ) : (
              <>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg mr-3 text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  pilih
                </button>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Buy
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
