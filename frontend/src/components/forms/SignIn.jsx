import React, { useContext, useState } from 'react';
import { Typography, TextField, Button, OutlinedInput, InputAdornment, IconButton, Stack, FormControl, InputLabel, Input, FilledInput, FormHelperText } from '@mui/material';
import { withStyles } from '@mui/styles';
import './styles.css';
import { styles } from './styling.jsx';
import { AuthContext } from '../../context/auth';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function SignIn(props) {


    const { classes } = props;

    const { login } = useContext(AuthContext);

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(user);
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (

        <form className={classes.root}>
            <Typography variant='h4' fontWeight={700}>
                Helo There!
            </Typography>
            <Typography fontSize={12} lineHeight={4}>
                Welcome back! Please enter your details
            </Typography>

            <TextField type='email' label="Email" variant="filled" required onChange={e => setUser({ ...user, email: e.target.value })}
            />


            {/* <FormControl sx={{ m: 1, width: '33ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl> */}


            <FormControl sx={{ m: 1, width: '33ch' }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? 'text' : 'password'}
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
                    onChange={e => setUser({ ...user, password: e.target.value })}
                />
            </FormControl>


            <div>
                <Button type='submit' variant='contained' onClick={handleSubmit} >login</Button>
            </div>

        </form >
    )
}

export default withStyles(styles)(SignIn)