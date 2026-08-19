import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    conversations: [],

};

const conversationSlice = createSlice({
    name: "conversations",
    initialState,
    reducers: {
        setConversations: (state, action) => {
        state.conversations = action.payload
        },
    },
});

const { reducer, actions } = conversationSlice
export const { setConversations} = actions;
export default reducer;