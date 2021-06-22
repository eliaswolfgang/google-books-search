import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("")

    const handleClose = (reason) => {
        if (reason === 'clickaway')
            return;
        setOpen(false);
    }
    const handleSignup = (e) => {
        e.preventDefault();
        if (document.getElementById('confirmEmail').value !== email) {
            setMessage('Emails do not match!');
            setOpen(true);
        } else if (document.getElementById('confirmPassword').value !== password) {
            setMessage('Passwords do not match!');
            setOpen(true);
        } else {
            setMessage('Signed up successfully!')
            setOpen(true);
        }
    }

    return (
        <Container maxWidth='xl'>
            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={message}></Snackbar>
            </div>
            <div className='row'>
                <TextField
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    variant="outlined"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='row'>
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    variant="outlined"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className='row'>
                <TextField
                    id="confirmEmail"
                    label="Confirm Email"
                    type="email"
                    variant="outlined"
                />
            </div>
            <div className='row'>
                <TextField
                    id="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                />
            </div>
            <div className='row'>
                <Button variant="outlined" color="primary" onClick={handleSignup}>
                    Sign Up
                </Button>
            </div>
        </Container>
    )
}