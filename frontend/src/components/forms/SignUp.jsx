import React, { useState, useContext } from 'react'
import { TextField, Button, Box, Stack, Typography, DialogTitle, Dialog } from '@mui/material'
import './styles.css';
import { withStyles } from '@mui/styles';
import { styles } from './styling.jsx';
import { AuthContext } from '../../context/auth';

function SignUp(props) {
    const { classes } = props;

    const { login, signup } = useContext(AuthContext);


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [paswords, setPaswords] = useState('');

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'ADMIN',
    });

    const [open, setOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await login(user);
        await signup(user);

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
                        onChange={e => setUser({ ...user, firstName: e.target.value })}
                    />
                    <TextField label="Last Name" variant="filled" required
                        onChange={e => setUser({ ...user, lastName: e.target.value })}
                    />
                    <TextField type='Email' label="Email" variant="filled" required
                        onChange={e => setUser({ ...user, email: e.target.value })}
                    />
                    <TextField type='password' label="Password" variant="filled" required
                        onChange={e => setUser({ ...user, password: e.target.value })}
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