import { createAsyncThunk } from "@reduxjs/toolkit";
import { Device } from "../types";

export const getDevices = createAsyncThunk<Device[]>("devices/getDevices", async () => {
  try {
    const res = await fetch("/api/devices", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getDevicesId = createAsyncThunk<Device, string>("devices/getDevices", async (id) => {
  try {
    const res = await fetch("/api/devices/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});
