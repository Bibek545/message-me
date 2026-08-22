import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    conversations: [],
    selectedConversationId: null,

};

const conversationSlice = createSlice({
    name: "conversations",
    initialState,
    reducers: {
        setConversations: (state, action) => {
        state.conversations = action.payload
        },
        setSelectedConversationId : (state, action) => {
            state.selectedConversationId = action.payload
        }
    },
});

const { reducer, actions } = conversationSlice
export const { setConversations, setSelectedConversationId} = actions;
export default reducer;