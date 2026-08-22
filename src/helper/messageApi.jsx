import { apiProcessor } from "./api";

const apiBaseUrl = import.meta.env.VITE_API_URL;
const messageApiEp = apiBaseUrl + "/api/v1/message";

export const getMessageApi = (conversationId) => {
  return apiProcessor({
    method: "get",
    url: messageApiEp + "/" + conversationId,
    isPrivate: true,
  });
};

export const createMessageApi = (payload) => {
  return apiProcessor({
    method: "post",
    url: messageApiEp,
    payload,
    isPrivate: true,
  });
};
