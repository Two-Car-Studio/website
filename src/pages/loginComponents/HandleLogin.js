import { Box, Typography, TextField, Button } from '@mui/material'
import {react, useState } from 'react';
import { Link } from 'react-router-dom';

function HandleLogin () {

    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        
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
                    <Typography component={Link}  sx={{ display:'flex', justifyContent:'flex-end'}}>Forgot Email?</Typography>
                </Box>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography> Password *</Typography>
                    <TextField 
                        required
                        id='loginPassword'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    <Typography component={Link} sx={{ display:'flex', justifyContent:'flex-end'}}>Forgot Password?</Typography>
                </Box>
            </Box>
                <Button type='submit' variant='contained' sx={{display:'flex', justifyContent:'center', width:400}}>Continue</Button>
            </Box>
    )
}

export default HandleLogin;