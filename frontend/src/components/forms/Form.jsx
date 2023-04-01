import React, { useState } from 'react';
import { Button } from '@mui/material';
import ModalDialog from './ModalDialog';
import './styles.css'

function Form() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div className='Form'>
            <Button variant='contained'
                onClick={handleOpen}>
                Signup
            </Button>
            <ModalDialog open={open} handleClose={handleClose} />
        </div>
    )
}

export default Form