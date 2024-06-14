import { createSlice } from "@reduxjs/toolkit";
import { getDevices } from "./actions";
import { Device } from "../types";

const initialState: Device[] = [];

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDevices.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const devicesReducer = devicesSlice.reducer;
