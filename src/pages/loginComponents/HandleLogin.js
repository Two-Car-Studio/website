import { Box, Typography, TextField, Button } from '@mui/material'
import {react, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

function HandleLogin () {

    const responseMessage = (response) => {
        console.log(response);
    };

    const errorMessage = (error) => {
        console.log(error);
    };

    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);

        fetch('http://localhost:4000/Login',{
            method: "POST",
            body: {
                email,
                password
            }
        })
        .then(res => res.json())
        .then(data => responseMessage(data))
        .catch(err => errorMessage(err))
    }
    
    return (

        <Box 
            component='form' 
            onSubmit={handleSubmit}
            autoComplete='off' 
            sx={{
                display:'flex', 
                flexDirection:'column', 
                justifyContent:'space-around'}}>  
            <Typography variant='h4' sx={{fontWeight:600, display:'flex', justifyContent:'center'}}> Welcome Back!</Typography>
            <Box>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography> Email *</Typography>
                    <TextField 
                        required
                        id='loginEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <Typography component={Link} to='/ForgotEmail' sx={{ display:'flex', justifyContent:'flex-end'}}>Forgot Email?</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography> Password *</Typography>
                    <TextField 
                        required
                        id='loginPassword'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <Typography component={Link} to='/PasswordReset' sx={{ display:'flex', justifyContent:'flex-end'}}>Forgot Password?</Typography>
                </Box>
            </Box>
            <Button type='submit' variant='contained' sx={{display:'flex', justifyContent:'center', width:400}}>Continue</Button>
        </Box>
    )
}

export default HandleLogin;