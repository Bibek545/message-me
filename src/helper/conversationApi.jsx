import { apiProcessor } from "./api";

const apiBaseUrl = import.meta.env.VITE_API_URL;
const conversationApiEp = apiBaseUrl + "/api/v1/conversation";

export const getMyConversationApi = () => {
  return apiProcessor({
    method: "get",
    url: conversationApiEp + "/user",
    isPrivate: true,
  });
};

export const searchUserConversationApi = (payload) => {
  return apiProcessor({
    method: "post",
    url: conversationApiEp + "/search",
    isPrivate: true,
    payload,
  });
};

export const createNewConversationApi = (newConversation) => {
  return apiProcessor({
    method: "post",
    url: conversationApiEp,
    isPrivate: true,
    payload: newConversation,
  });
};

export const deleteConversationApi = (conversationId) => {
  return apiProcessor({
    method: "delete",
    url: conversationApiEp + "/" + conversationId,
    isPrivate: true,
  });
};
