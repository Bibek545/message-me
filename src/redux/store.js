import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userSlice.js";
import conversationReducer from "../feature/conversation/conversationSlice.js"

export default configureStore({
  reducer: {
    userInfo: userReducer,
    conversationsInfo: conversationReducer,
  },
});
