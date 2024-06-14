import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setUserGmail } from "../actions/user-action";

const initialUserState = {
  gmail: "",
};

export const userReducer = createReducer(initialUserState, (builder) => {
  builder.addCase(setUserGmail, (state, action: PayloadAction<string>) => {
    state.gmail = action.payload;
  });
});
