import React from "react";
import bgHead from "../../assets/images/Group 40.png";
import img1 from "../../assets/images/1. Lakukan Pendaftaran.png";
import img2 from "../../assets/images/2. Pelajari Teori.png";
import img3 from "../../assets/images/3. Latihan Soal.png";
import img4 from "../../assets/images/4. Dapatkan Reward.png";
import card from "../../assets/images/Boy1.png";
import card1 from "../../assets/images/Girl1.png";
import card2 from "../../assets/images/Boy2.png";
import card3 from "../../assets/images/Girl2.png";

function HomePage() {
  return (
    <>
      <div className="bg-accentInformation-200">
        <div className="md:mx-40 mx-5">
          <div className="grid grid-cols-2">
            <div className="">
              <div className="bg-white w-fit p-2 rounded-2xl md:mt-32 mt-5">
                <p className=" text-center text-xs text-accentInformation-200">
                  Website Pembelajaran HTML & CSS
                </p>
              </div>
              <h1 className="text-white font-bold md:text-5xl text-xs mt-5">
                Learning is the only way to run the world.
              </h1>
              <p className="font-normal text-sm text-white mt-5">
                Dapatkan keterampilan dasar dalam{" "}
                <span className="block">
                  membuat halaman web dengan instruksi{" "}
                </span>{" "}
                yang mudah diikuti
              </p>
              <div className="text-white p-2 w-fit rounded-xl md:text-base mb-5 text-xs bg-black mt-5">
                Belajar Sekarang
              </div>
            </div>
            <div className="md:mt-5 mt-16 -mb-12">
              <img src={bgHead} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="bg-grey-20">
        <h5 className="text-center font-bold text-xl text-black pt-20">
          Misi yang Harus Diselesaikan
        </h5>
        <div className="md:mx-40 mx-5 mt-10 pb-12">
          <div className="grid md:grid-cols-4 grid-cols-4">
            <div className="py-4 md:px-20 px-5 rounded-lg border-accentInformation-200 border bg-white w-fit">
              level 1
            </div>
            <div className="py-4 md:px-20 px-5   rounded-lg border-accentInformation-200 border bg-white w-fit">
              level 2
            </div>
            <div className="py-4 md:px-20 px-5   rounded-lg border-accentInformation-200 border bg-white w-fit">
              level 3
            </div>
            <div className="py-4 md:px-20 px-5  rounded-lg border-accentInformation-200 border bg-white w-fit">
              level 4
            </div>
          </div>
          <div className="grid grid-cols-4 mt-10">
            <div className="py-4 md:px-20 px-5 rounded-lg border-accentInformation-200 border bg-white w-fit">
              level 5
            </div>
            <div className="py-4 md:px-20 px-5  rounded-lg border-accentInformation-200 border bg-white w-fit">
              level 6
            </div>
            <div className="py-4 md:px-20 px-5  rounded-lg border-accentInformation-200 border bg-white w-fit">
              level 7
            </div>
            <div className="py-4 md:px-20 px-5  rounded-lg border-accentInformation-200 border bg-white w-fit">
              level 8
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="bg-white px-5 md:px-40">
        <h5 className="text-center font-bold text-xl text-black pt-20">
          Cara Untuk Menyelesaikan Misi
        </h5>
        <p className="text-center text-sm text-black mt-5">
          Terdapat 4 step yang diperlukan untuk menyelesaikan misi pembelajaran{" "}
        </p>
        <div className="md:grid md:grid-cols-4 md:gap-x-8 mt-20 pb-20 block">
          <div className="block mb-5 md:mb-0">
            <img src={img1} alt="" />
            <h1 className="text-black font-bold text-base my-6">
              1. Lakukan Pendaftaran{" "}
            </h1>
            <p className="text-sm text-black mt-5 justify-end">
              Book for only £60. This includes your initial consultation and
              review of your food diary. Follow up consultations are only £40.
            </p>
          </div>
          <div className="block mb-5 md:mb-0">
            <img src={img2} alt="" />
            <h1 className="text-black font-bold text-base my-6">
              2. Pelajari Teori{" "}
            </h1>
            <p className="text-sm text-black mt-5 justify-end">
              Place your orders through the app. Your dietician will share
              shoppable recipes so you can have what you need in a couple of
              clicks.
            </p>
          </div>
          <div className="block mb-5 md:mb-0">
            <img src={img3} alt="" />
            <h1 className="text-black font-bold text-base my-6">
              3. Latihan Soal{" "}
            </h1>
            <p className="text-sm text-black mt-5 justify-end">
              We have 1,000's of products to choose from. Buy in bulk for
              significant savings.
            </p>
          </div>
          <div className="block mb-5 md:mb-0">
            <img src={img4} alt="" />
            <h1 className="text-black font-bold text-base my-6">
              4. Dapatkan Reward{" "}
            </h1>
            <p className="text-sm text-black mt-5 justify-end">
              Our recipes are step by step within the app and you can always
              jump in and join one of our community chat groups.
            </p>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="bg-accentInformation-200">
        <div className="md:mx-40 mx-5">
          <div className="md:grid md:grid-cols-2 pb-14 block">
            <div className="md:mt-40 mt-5 mr-3">
              <h1 className="text-white font-bold text-5xl mt-5">
                Ayo Kumpulkan Avatar!{" "}
              </h1>
              <p className="font-normal text-sm text-white mt-5">
                Book for only £60. This includes your initial consultation and
                review of your food diary. Follow up consultations are only £40.
              </p>
              <div className="text-white p-2 w-fit rounded-xl bg-black mt-5">
                Belajar Sekarang
              </div>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-5">
              <img src={card} alt="" />
              <img src={card1} alt="" />
              <img src={card2} alt="" />
              <img src={card3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
