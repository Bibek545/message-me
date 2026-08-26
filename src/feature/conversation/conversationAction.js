import {
    createNewConversationApi,
  getMyConversationApi,
  searchUserConversationApi,
} from "../../helper/conversationApi";
import { setConversations, setSearchedUser } from "./conversationSlice";

export const getMyConversationAction = () => async (dispatch) => {
  const result = await getMyConversationApi();
  if (result.status === "success") {
    dispatch(setConversations(result.allConversation));
  }
};

export const searchUserConversationAction = (payload) => async (dispatch) => {
  const result = await searchUserConversationApi(payload);
  if (result.status === "success") {
    dispatch(setSearchedUser(result.searchedUser));
  }
};

export const createNewConversationAction = () => async (dispatch) => {
    const result = await createNewConversationApi();
    if(result.status === "success") {
        dispatch(setConversations(result.data.newConversation));
    }
}