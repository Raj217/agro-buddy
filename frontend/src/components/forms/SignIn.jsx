import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import './styles.css';
import { styles } from './styling.jsx';

function SignIn(props) {
    const { classes } = props;

    return (

        <form className={classes.root}>
            <Typography variant='h4' fontWeight={700}>
                Helo There!
            </Typography>
            <Typography fontSize={12} lineHeight={4}>
                Welcome back! Please enter your details
            </Typography>

            <TextField type='email' label="Email" variant="filled" required
            />
            <TextField type='password' label="Password" variant="filled" required
            />
            <div>
                <Button type='submit' variant='contained' >login</Button>
            </div>

        </form>
    )
}

export default withStyles(styles)(SignIn)