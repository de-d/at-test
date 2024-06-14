import { Box } from "@mui/material";
import Search from "./components/search";
import ActionButtons from "./components/action-button";
import ObjectsList from "./components/object-list";

function ObjectsTab() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
        <Search />
        <ActionButtons />
      </Box>
      <Box>
        <ObjectsList />
      </Box>
    </Box>
  );
}

export default ObjectsTab;
