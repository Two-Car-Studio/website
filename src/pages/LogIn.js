import { Container, Box, TextField, Button } from "@mui/material";
import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HandleLogin from "./loginComponents/HandleLogin";

function LogIn() {
    
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