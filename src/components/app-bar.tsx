import { useNavigate } from "react-router-dom";
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

function MainAppBar() {
  const navigate = useNavigate();
  const pages = ["Home", "Devices"];

  const handleHome = () => {
    navigate("/home");
  };

  const handleDevices = () => {
    navigate("/devices");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2a353e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalShippingIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              padding: "0 0 4px 0",
            }}
          >
            AutoTracker
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ color: "white", "&:hover": { backgroundColor: "#3a4955" } }}
                onClick={page === "Home" ? handleHome : handleDevices}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ "&:hover": { backgroundColor: "#3a4955" } }} onClick={handleLogout}>
              <LogoutIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainAppBar;
