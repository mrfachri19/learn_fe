import axios from "axios";
import CONFIG from "../config";

const fullURL = (path) => {
  return `${CONFIG.API_URL}/${path}`;
};

export const handleNetworkError = (error) => {
  if (error.message === "Network request failed") {
    alert(
      "Kesalahan Jaringan",
      "Silakan periksa koneksi Anda dan coba kembali.",
      "iconNoInet"
    );
  }
  throw error;
};

const post = (api) => async (data, token) => {
  return await axios.post(fullURL(api), data, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });
};

const patch =
  (api) =>
  async (param = "", data) => {
    try {
      return await axios.patch(
        `${fullURL(api)}${param}`,
        data,
        {
          method: "PATCH",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };

const get =
  (api) =>
  async (param = "") => {
    try {
      return await axios(
        `${fullURL(api)}${param}`,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        },
        { handleNetworkError }
      );
    } catch (err) {
      console.log(err);
    }
  };

// ============= auth
export const register = post("auth/register");
export const login = post("auth/login");
export const getIdUser = get("auth");
export const getAlluser = get("auth");

// ===============
export const getIdUserProgress = get("progress-html");
export const PostProgressUser = post("progress-html");
export const updateProgressUser = patch("progress-html");

const API = {
  login,
  register,
  // ====
  getIdUserProgress,
  updateProgressUser,
  getAlluser
};

export default API;
