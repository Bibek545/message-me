import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
  searchedUsers: [],
  selectedConversationId: null,
  selectedConversation: null,
};

const conversationSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    setSelectedConversation: (state, action) => {
      state.selectedConversation = action.payload;
    },

    setSelectedConversationId: (state, action) => {
      state.selectedConversationId = action.payload;
    },
    setSearchedUser: (state, action) => {
      state.searchedUsers = action.payload;
    },
    updateConversationLastMessage: (state, action) => {
      const conversation = state.conversations.find(
        (conversation) => conversation._id === action.payload.conversationId,
      );

      if (conversation) {
        conversation.lastMessage = action.payload;
        console.log("Conversation found");
      } else {
        console.log("Conversation not found");
      }
    },
  },
});

const { reducer, actions } = conversationSlice;
export const {
  setConversations,
  setSelectedConversationId,
  setSelectedConversation,
  setSearchedUser,
  updateConversationLastMessage,
} = actions;
export default reducer;
