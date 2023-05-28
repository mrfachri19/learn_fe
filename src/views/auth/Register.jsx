import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/images/logolearn.svg";
import { Messaege } from "../../helper/helper";
import { PostProgressUser, postShopuser, register } from "../../api";
import { Modal } from "antd";
import Laki from "../../assets/images/laki.png";
import Cewek from "../../assets/images/cewek.png";
import bgimage from "../../assets/images/Frame 4 (2).png";
import { Button } from "antd";

export const RegisterPage = () => {
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [konfirmasiPassword, setKonfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [karakter, setKarakter] = useState("");
  const [tentang, setTentang] = useState("");
  const [alamat, setAlamat] = useState("");

  const history = useHistory();
  const RegisterUser = async (e) => {
    if (password == konfirmasiPassword) {
      try {
        e.preventDefault();
        const response = await register({
          namaDepan: namaDepan,
          namaBelakang: namaBelakang,
          email: email,
          password: password,
          karakter: karakter,
          point: 0,
        });
        Messaege("Succes", "Success Register", "success");
        Postprogress(response.data.data.id);
        postShopUser(response.data.data.id);
        setTimeout(() => {
          history.push("auth/login");
        }, 2000);
        console.log(response);
      } catch (error) {
        console.log(error);
        Messaege("Failed", `${error}`, "error");
      }
    } else {
      Messaege("Failed", `password tidak sama`, "error");
    }
  };

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function handlePilihcowo() {
    setKarakter("boy01");
    setIsModalOpen(false);
  }
  function handlePilihcewe() {
    setKarakter("girl01");
    setIsModalOpen(false);
  }

  useEffect(() => {
    showModal();
  }, []);

  const Postprogress = async (id) => {
    try {
      const response = await PostProgressUser({
        idUser: id,
        progress1: 0,
        progress2: 0,
        progress3: 0,
        progress4: 0,
        progress5: 0,
        progress6: 0,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      Messaege("Failed", `${error}`, "error");
    }
  };

  const postShopUser = async (id) => {
    try {
      const response = await postShopuser({
        idUser: id,
        boy01: "ada",
        boy02: "tidak",
        boy03: "tidak",
        girl01: "ada",
        girl02: "tidak",
        girl03: "tidak",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-full p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
        <div className="max-w-md w-full">
          <img src={logo} alt="" className="m-auto" />
          <div className="text-center m-auto md:text-center">
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              Selamat Datang!
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Silakan daftar untuk membuat akun Anda dan mulai menikmati fitur
              kami
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="relative">
              <input
                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                type="text"
                placeholder="nama depan"
                onChange={(e) => setNamaDepan(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                type="text"
                placeholder="nama belakang"
                onChange={(e) => setNamaBelakang(e.target.value)}
              />
            </div>

            <div className="relative">
              <input
                className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-8 content-center">
              <input
                className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8 content-center">
              <input
                className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Konfirmasi password"
                onChange={(e) => setKonfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-gradient-to-r from-indigo-600 to-accentInformation-200  hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                onClick={RegisterUser}
              >
                Sign up
              </button>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Have an account?</span>
              <a
                href="/auth/login"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
      <Modal
        title="Pilih Karakter mu"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        <div className="">
          <img className="absolute h-72 z-0" src={bgimage} alt="" />

          <div className="flex gap-10 justify-center">
            <div className="block">
              <img src={Laki} className="h-52 absolute" alt="" />
              <Button
                className="w-1/2 mt-56 mx-10 bg-accentInformation-200 text-white"
                onClick={() => handlePilihcowo()}
              >
                Pilih
              </Button>
            </div>
            <div className="block">
              <img src={Cewek} className="h-52 absolute" alt="" />
              <Button
                className="w-1/2 mt-56 mx-10 bg-accentInformation-200 text-white"
                onClick={() => handlePilihcewe()}
              >
                Pilih
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
