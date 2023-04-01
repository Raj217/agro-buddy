import React, { useState } from 'react'
import { TextField, Button, Box, Stack, Typography } from '@mui/material'

import './styles.css';
import { withStyles } from '@mui/styles';
const styles = {

    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        // marginTop: '100px',
        '& .MuiTextField-root': {
            margin: '8px',
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: '16px',
        },
    }
}

function SignUp(props, { handleClose }) {
    const { classes } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [paswords, setPaswords] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(firstName, lastName, email, paswords);
        handleClose();
    }

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <Typography variant='h5' fontWeight={700}>
                SignUp
            </Typography>
            <TextField label='First Name' variant='filled' required
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField label="Last Name" variant="filled" required
                onChange={e => setLastName(e.target.value)}
            />
            <TextField type='email' label="Email" variant="filled" required
                onChange={e => setEmail(e.target.value)}
            />
            <TextField type='password' label="Password" variant="filled" required
                onChange={e => setPaswords(e.target.value)}
            />
            <div>
                <Button variant='outline' onClick={handleClose}>Cancel</Button>
                <Button type='submit' variant='contained' onClick={handleSubmit} >Submit</Button>
            </div>



        </form>
    )
}

export default withStyles(styles)(SignUp);