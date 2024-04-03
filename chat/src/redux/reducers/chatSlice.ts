import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CreateChatProps {
  newChat: String;
}

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    chat: [] as { id: Number; chat: String }[],
    status: false,
  },
  reducers: {
    createChat: (state, action: PayloadAction<CreateChatProps>) => {
      const newChat = {
        id: Date.now(),
        chat: action.payload.newChat,
      };
      state.chat.push(newChat);
    },
  },
});

const { reducer: chatReducer, actions } = chatSlice;
export const { createChat } = actions;

export default chatReducer;
