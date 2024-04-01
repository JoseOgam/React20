import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    chat: [],
  },
  reducers: {},
});

const chatReducer = chatSlice.reducer;

export default chatReducer;
