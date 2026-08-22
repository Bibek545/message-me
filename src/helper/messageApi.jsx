import { apiProcessor } from "./api";

const apiBaseUrl = import.meta.env.VITE_API_URL;
const messageApiEp = apiBaseUrl + "/api/v1/message";

export const getMessageApi = (conversationId) => {
    return apiProcessor({
        method: "get",
        url: messageApiEp + "/" + conversationId,
        isPrivate: true
    })
}