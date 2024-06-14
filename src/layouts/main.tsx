import { Box } from "@mui/material";
import MainAppBar from "../components/app-bar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <MainAppBar />
      <Box sx={{ margin: "0 192px", padding: "0 24px" }}>{children}</Box>
    </Box>
  );
}

export default MainLayout;
