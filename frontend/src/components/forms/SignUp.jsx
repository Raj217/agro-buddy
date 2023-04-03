import React, { useState } from 'react'
import { TextField, Button, Box, Stack, Typography, DialogTitle, Dialog } from '@mui/material'
import './styles.css';
import { withStyles } from '@mui/styles';

const styles = {

    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        '& .MuiTextField-root': {
            margin: '8px',
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: '16px',
        },
    }
}

function SignUp(props) {
    const { classes } = props;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [paswords, setPaswords] = useState('');

    const [open, setOpen] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, email, paswords);
        handleClose();
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (

        <form onSubmit={handleSubmit}>
            <Button variant='contained' onClick={handleClickOpen}>
                Signup
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <div className={classes.root}>
                    <DialogTitle fontSize={30} fontWeight={600}>
                        SignUp
                    </DialogTitle>
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
                </div>
            </Dialog>
        </form>
    )
}

export default withStyles(styles)(SignUp);