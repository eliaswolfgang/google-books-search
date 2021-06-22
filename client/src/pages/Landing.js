import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Signup from '../components/Signup';
import { useEffect, useState } from 'react';

export default function Landing() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <LineStyleIcon />
                    <h3>Bookkeepr</h3>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div id='landing'>
                <Signup />
            </div>
            
        </>
    )
}