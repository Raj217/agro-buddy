import * as React from "react";
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as Palette from "../../configs/pallete";
import { AuthContext } from "../../context/auth";
import { forgotPassword } from "../../api";

const theme = createTheme();

function ForgotPassword() {
    const [user, setUser] = React.useState({
        email: "",
    });
    const navigate = useNavigate();
    const { forgotPassword } = React.useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await forgotPassword(user);
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
                        Forgot Password
                    </Typography>
                    <Box
                        component="form"
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

                        <Button
                            onCLick={handleSubmit}
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: Palette.accent,
                                "&:hover": { backgroundColor: Palette.accentDark },
                            }}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}


export default ForgotPassword