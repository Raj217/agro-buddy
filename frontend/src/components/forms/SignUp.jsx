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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Palette from "../../configs/pallete";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { UserContext } from "../../context/user";
import toast from 'react-hot-toast';

const theme = createTheme();

export default function SignUp() {
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const { user, setUser } = React.useContext(UserContext);
  const navigate = useNavigate();
  const { signup } = React.useContext(AuthContext);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmPassword!== user.password) {
      toast.error('Passwords do not match');
      return;
    }
    if (user.firstName && user.lastName && user.email && user.password) {
      console.log(user);
      await signup(user);
      navigate("/otp");
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
                    onChange={(e)=>setUser({ ...user, password: e.target.value })}
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
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
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
            >
              Sign Up
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
