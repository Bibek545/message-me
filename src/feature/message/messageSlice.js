import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
};

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload
        },
        setNewMessages: (state, action) => {
            state.messages.push(action.payload)
        }
    },
});

const { reducer, actions} = messageSlice
export const { setMessages, setNewMessages} = actions;
export default reducer;