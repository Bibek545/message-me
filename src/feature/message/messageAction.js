import { getMessageApi } from "../../helper/messageApi"
import { setMessages } from "./messageSlice";

export const getMessageAction = (conversationId) => async(dispatch) => {
    const result = await getMessageApi(conversationId);
    if(result.status ==="success" ){
        dispatch(setMessages(result.sortLatestMessage))
    }}