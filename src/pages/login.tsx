import { Box } from "@mui/material";
import LoginForm from "../components/login/login-form";

function Login() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <LoginForm />
    </Box>
  );
}

export default Login;
