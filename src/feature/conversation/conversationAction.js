import { getMyConversationApi } from "../../helper/conversationApi"
import { setConversations } from "./conversationSlice";

export const getMyConversationAction = () => async (dispatch) => {
    const result = await getMyConversationApi();
    if(result.status === "success") {
        dispatch(setConversations(result.allConversation));
    }
}