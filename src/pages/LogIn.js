import { Container, Box, TextField, Button } from "@mui/material";
import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HandleLogin from "./loginComponents/HandleLogin";
import LoginButton from "./loginComponents/LoginButton";
import LogoutButton from "./loginComponents/LogoutButton";
import { useEffect } from "react";
import { gapi } from 'gapi-script';

const client_id = '114621697421-mjpg7jhohl9t5g0bld4rlunr2hko5hud.apps.googleusercontent.com';


function LogIn() {

    // useEffect(() => {
    //     function start() {
    //         gapi.client.init({
    //             client_id: client_id,
    //             scope:''
    //         })
    //     }

    //     gapi.load('client:auth2', start);
    // })

    
    return (

        <Container sx={{display:'flex', justifyContent:'space-around', flex:1}}>
            <Box sx={{mt:7}}>
                <ArrowBackIcon />
                <Typography sx={{mt:10}}> Let us help you rent out our space faster and easier.</Typography>
                <img src='images/10.png' alt='helpful'></img>
            </Box>
            <HandleLogin/> 
        </Container>
    )
}

export default LogIn;