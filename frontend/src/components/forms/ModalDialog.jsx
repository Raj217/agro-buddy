import React from 'react';
import { Dialog } from '@mui/material';
import SignUp from './SignUp';

function ModalDialog({ open, handleClose }) {

    return (
        <Dialog open={open} onClose={handleClose}>
            <SignUp handleClose={handleClose} />
        </Dialog>
    )
}

export default ModalDialog;


