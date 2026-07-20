import axios from "axios";

export const apiProcessor = async ({
  method,
  url,
  payload,
  isPrivate = false,
}) => {
  try {
    const headers = {};

    if (isPrivate) {
      const token = localStorage.getItem("jwtToken");

      if (!token) {
        return {
          status: "error",
          message: "Please login again",
        };
      }

      headers.Authorization = `Bearer ${token}`;
    }

    const { data } = await axios({
      method,
      url,
      data: payload,
      headers,
    });

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.response?.data?.message || error.message,
    };
  }
};
