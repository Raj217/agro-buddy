import * as React from "react";
import {
  Avatar,
  Button,
  FormControl,
  CssBaseline,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Palette from "../../configs/pallete";
import { AuthContext } from "../../context/auth";

const theme = createTheme();

export default function SignIn() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: Palette.accent }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <FormControl variant="outlined" required fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: Palette.accent,
                "&:hover": { backgroundColor: Palette.accentDark },
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/forgot-password")}
                >
                  <Typography variant="body2" color={Palette.triadic1}>
                    Forgot password?
                  </Typography>
                </div>
              </Grid>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/sign-up")}
              >
                <Typography variant="body2" color={Palette.triadic1}>
                  Don't have an account? Sign Up
                </Typography>
              </div>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
