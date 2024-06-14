import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ObjectsTab from "./objects";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function DeviceTabPanel() {
  const [value, setValue] = useState("1");
  const userGmail = useSelector((state: RootState) => state.user.gmail);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", boxShadow: "0 3px 3px -2px rgba(0,0,0,0.2)" }}>
          <TabList
            onChange={handleChange}
            aria-label="device tabs"
            indicatorColor="none"
            sx={{
              "& .MuiTab-root": {
                fontSize: "14px",
                fontWeight: "bold",
                color: "#9da6ae",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#00be85",
                "&::after": {
                  backgroundColor: "#00be85",
                  height: "3px",
                  content: "''",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                },
              },
            }}
          >
            <Tab label="Учетные записи" value="1" />
            <Tab label="Пользователи" value="2" />
            <Tab label="Объекты" value="3" />
            <Tab label="Водители" value="4" />
            <Tab label="Уведомления" value="5" />
            <Tab label="Задания" value="6" />
            <Box sx={{ display: "flex", alignItems: "center", ml: "auto", mr: 2 }}>
              <NotificationsIcon sx={{ width: "20px", height: "20px", mr: 1, color: "#9da6ae" }} />
              <AccountCircleIcon sx={{ mr: 1, color: "#9da6ae" }} />
              <Typography sx={{ color: "black" }}>{userGmail}</Typography>
            </Box>
          </TabList>
        </Box>
        <TabPanel value="1">Данные во вкладке "Объекты"</TabPanel>
        <TabPanel value="2">Данные во вкладке "Объекты"</TabPanel>
        <TabPanel value="3">
          <ObjectsTab />
        </TabPanel>
        <TabPanel value="4">Данные во вкладке "Объекты"</TabPanel>
        <TabPanel value="5">Данные во вкладке "Объекты"</TabPanel>
        <TabPanel value="6">Данные во вкладке "Объекты"</TabPanel>
      </TabContext>
    </Box>
  );
}

export default DeviceTabPanel;
