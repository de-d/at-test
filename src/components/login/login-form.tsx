import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserGmail } from "../../redux/actions/user-action";
import { TextField, Box, Button, Alert } from "@mui/material";
import { IconButton, InputAdornment, FormControl, InputLabel, Input } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      setError("Введите корректный адрес электронной почты");
    } else {
      setError("");
    }
  }, [email]);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUserGmail(email));
    setLoginError("");
    const base64Credentials = btoa(`${email}:${password}`);

    try {
      const response = await fetch("/api/session", {
        method: "POST",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      });

      if (response.ok) {
        const data = await response.json();
        navigate("/home");
        return data;
      } else {
        setLoginError(`Ошибка: Не удалось войти. Код ошибки: ${response.status}`);
      }
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  const isFormInvalid = !email || !password || !!error;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
        <TextField
          sx={{ m: 1, width: "33ch" }}
          id="outlined-basic"
          label="Email"
          variant="standard"
          value={email}
          onChange={handleChangeEmail}
          error={!!error}
          helperText={error}
        />
        <FormControl sx={{ m: 1, width: "33ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={handleChangePassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button sx={{ m: 1, width: "34ch" }} variant="contained" type="submit" disabled={isFormInvalid}>
          Вход
        </Button>
      </form>
      {loginError && (
        <Alert severity="error" sx={{ m: 1, width: "30ch" }}>
          {loginError}
        </Alert>
      )}
    </Box>
  );
}

export default LoginForm;
