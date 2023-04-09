import * as React from "react";
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(user);
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
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
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
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs style={{ cursor: 'pointer' }}>
                                <Typography variant="body2" color={Palette.triadic1}>
                                    Forgot password?
                                </Typography>
                            </Grid>
                            <div style={{ cursor: 'pointer' }} onClick={() => navigate("/sign-up")}>
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