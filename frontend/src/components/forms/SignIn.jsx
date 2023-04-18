import * as React from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import { Axios } from "../../api/axios_config";
import Google from "../../assets/google.png";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Palette from "../../configs/pallete";
import { AuthContext } from "../../context/auth";
import ReactGa from "react-ga";
import toast from "react-hot-toast";
import CircularProgress from "@mui/material/CircularProgress";
import "./styles.css";

const theme = createTheme();

export default function SignIn() {
  const [loading, setLoading] = React.useState(false);
  const [Sign, setSign] = React.useState("Sign in");

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      setSign("Signing in");
    } else {
      setLoading(false);
      setSign("Sign In");
    }
  };

  const { login, isLoggedIn } = React.useContext(AuthContext);
  React.useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // "email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid"
  const handleSubmit = async (event) => {
    ReactGa.event({
      category: "Button",
      label: "Sign In",
    });
    event.preventDefault();
    try {
      await login(user);
      if (isLoggedIn) {
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onGoogleLoginSuccess = async (response) => {
    const res = await Axios.get(
      import.meta.env.VITE_GOOGLE_PROFILE_FETCH_URL + response.access_token
    );
    const { given_name, family_name, email } = res.data;
    let googleUser = {
      "firstName": given_name,
      "lastName": family_name,
      "email": email,
      "isGoogleSignIn": true,
      "role": "USER"
    };
    try {
      await login(googleUser);
      if (isLoggedIn) {
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const onGoogleLoginFailure = (error) => {
    toast.error(error);
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: onGoogleLoginSuccess,
    onError: onGoogleLoginFailure,
  });
  return (
    <ThemeProvider theme={theme}>
      <Container className="page-container" component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5" padding="5px">
            Sign In
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
                onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              onClick={handleButtonClick}
              endIcon={
                loading && (
                  <CircularProgress
                    size={20}
                    sx={{
                      color: "white",
                    }}
                  />
                )
              }
            >
              {Sign}
            </Button>

            <Grid container>
              {
                // ! Important Comment
                // ? Forgot Password functionality
                /* <Grid item xs>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/forgot-password")}
                >
                  <Typography variant="body2" color={Palette.triadic1}>
                    Forgot password?
                  </Typography>
                </div>
              </Grid> */
              }
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/sign-up")}
              >
                <Typography variant="body2" color={Palette.triadic1}>
                  Don't have an account? Sign Up
                </Typography>
              </div>
            </Grid>
            <Grid container>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  color: Palette.dark,
                  border: `1.5px solid ${Palette.dark}`,
                  padding: "10px 0px",
                  marginTop: "20px",
                }}
                startIcon={
                  <img style={{ height: "15px", width: "15px" }} src={Google} />
                }
                onClick={handleGoogleLogin}
              >
                Sign In with Google
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
