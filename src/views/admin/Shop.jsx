import React from "react";
import boy1 from "../../assets/images/Boy1.png";
import boy2 from "../../assets/images/Boy2.png";
import boy3 from "../../assets/images/Boy3.png";
import girl1 from "../../assets/images/Girl1.png";
import girl2 from "../../assets/images/Girl2.png";
import girl3 from "../../assets/images/Girl3.png";
function Shop() {
  const ListShop = [
    {
      photo: boy1,
      nama: "Karakter Boy 1",
    },
    {
      photo: boy2,
      nama: "Karakter Boy 2",
    },
    {
      photo: boy3,
      nama: "Karakter Boy 3",
    },
    {
      photo: girl1,
      nama: "Karakter Girl 3",
    },
    {
      photo: girl2,
      nama: "Karakter Girl 3",
    },
    {
      photo: girl3,
      nama: "Karakter Girl 3",
    },
  ];

  return (
    <div className="grid grid-cols-3 mx-20 gap-5">
      {ListShop.map((item, idx) => (
        <div class=" my-10 bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg mx-16" src={item.photo} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                {item.nama}{" "}
              </h5>
            </a>

            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
