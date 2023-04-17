import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import {
  Avatar,
  Button,
  CssBaseline,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Palette from "../../configs/pallete";
import { AuthContext } from "../../context/auth";
import { UserContext } from "../../context/user";
import ReactGa from "react-ga";
import CircularProgress from '@mui/material/CircularProgress';
import "./styles.css";

const theme = createTheme();

function GenerateOtp() {


  const [loading, setLoading] = React.useState(false);
  const [Sign, setSign] = React.useState("Verify");

  React.useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);
  const [otp, setOtp] = React.useState("");
  const { user } = React.useContext(UserContext);
  const { validateOtp } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  const handleSubmit = async (event) => {
    ReactGa.event({
      category: "Button",
      label: "Verify OTP",
    });
    event.preventDefault();
    if (!loading) {
      setLoading(true);
      setSign("Verifying");
    }
    else {
      setLoading(false);
      setSign("Verify");
    }
    await validateOtp(user.email, otp);
    navigate("/");
    window.location.reload(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container className="page-container" component="main" maxWidth="xs" sx={{ minHeight: '40vh' }}>
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
            Enter your OTP
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <MuiOtpInput
              value={otp}
              onChange={handleChange}
              length={6}
              display="flex"
              border="none"
            />
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
              endIcon={
                loading && (
                  <CircularProgress
                    size={20}
                    sx={{
                      color: 'white',
                    }}
                  />
                )
              }
            >
              {Sign}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default GenerateOtp;
