import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { Box } from "@mui/material";
import MainLayout from "../layouts/main";
import { getDevices } from "../redux/api/actions";
import { useEffect } from "react";
import DeviceTabPanel from "../components/devices/tab-panel/tab-panel";

function Devices() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  return (
    <Box>
      <MainLayout>
        <DeviceTabPanel />
      </MainLayout>
    </Box>
  );
}

export default Devices;
