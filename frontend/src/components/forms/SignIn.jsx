import React, { useContext, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import './styles.css';
import { styles } from './styling.jsx';
import { AuthContext } from '../../context/auth';


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
            <TextField type='password' label="Password" variant="filled" required onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <div>
                <Button type='submit' variant='contained' onClick={handleSubmit} >login</Button>
            </div>

        </form>
    )
}

export default withStyles(styles)(SignIn)