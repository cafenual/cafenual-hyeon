import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  role: "",
  wage: 0, //백엔드에서 어쩌피 값을 매겨놨으니 0원으로 해놈
  status: "",
  phoneNumber: "",
};

const user = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    SetUser: (state, action) => action.payload, //setuser는 변수명
    EmptyUser: (state, action) => initialState, //지워주기 위해 초기값으로 바꿔줌
  },
});

export const { SetUser, EmptyUser } = user.actions;

export default user;
