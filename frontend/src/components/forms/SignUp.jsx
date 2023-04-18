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
import { Axios } from "../../api/axios_config";
import Google from "../../assets/google.png";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Palette from "../../configs/pallete";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { UserContext } from "../../context/user";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import ReactGa from "react-ga";
import CircularProgress from "@mui/material/CircularProgress";
import "./styles.css";

const theme = createTheme();

export default function SignUp() {
  const [loading, setLoading] = React.useState(false);
  const [Sign, setSign] = React.useState("Sign up");

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      setSign("Signing Up");
    } else {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  const [confirmPassword, setConfirmPassword] = React.useState("");
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const { signup, login, isLoggedIn } = React.useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);

  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    ReactGa.event({
      category: "Button",
      label: "Sign Up",
    });
    event.preventDefault();
    if (confirmPassword !== user.password) {
      toast.error("Passwords do not match");
      return;
    }
    if (user.firstName && user.lastName && user.email && user.password) {
      console.log(user);
      await signup(user);
      navigate("/otp");
    }
    handleButtonClick();
  };

  const onGoogleLoginSuccess = async (response) => {
    handleButtonClick();
    const res = await Axios.get(
      import.meta.env.VITE_GOOGLE_PROFILE_FETCH_URL + response.access_token
    );
    const { given_name, family_name, email } = res.data;
    let googleUser = {
      firstName: given_name,
      lastName: family_name,
      email: email,
      isGoogleSignIn: true,
      role: "USER",
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
    handleButtonClick();
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
          <Avatar sx={{ m: 1, bgcolor: Palette.accentDark }}>
            <LockOutlinedIcon color="primary.main" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" required fullWidth>
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Comfirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>
            </Grid>
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
            <Grid container justifyContent="flex-end">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/sign-in")}
              >
                <Typography color={Palette.triadic1} variant="body2">
                  Already have an account? Sign in
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
