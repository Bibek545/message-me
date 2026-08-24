import { apiProcessor } from "./api.jsx";

const apiBaseUrl = import.meta.env.VITE_API_URL;
const authApiEp = apiBaseUrl + "/api/v1/auth";

export const registerUserApi = async (payload) => {
  return apiProcessor({
    method: "post",
    url: authApiEp + "/register",
    payload,
  });
};

export const loginUserApi = async (payload, findUser) => {
  return apiProcessor({
    method: "post",
    url: authApiEp + "/login",
    payload,
    findUser,
  });
};

export const getUserApi = (payload) => {
  return apiProcessor({
    method: "get",
    url: authApiEp + "/me",
    isPrivate: true,
    payload,
  });
};
