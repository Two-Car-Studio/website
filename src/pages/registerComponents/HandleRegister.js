import { Box, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function HandleRegister () {
    return (
        <Box component='form' sx={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                <Box>
                    <Typography>Get Started</Typography>
                    <Typography>Create your account now</Typography>
                </Box>
                <Box>
                    <Typography>Email *</Typography>
                    <Typography>We will send a confirmation email once your reservation is complete.</Typography>
                    <TextField
                        id='registerEmail'
                    ></TextField>
                </Box>
                <Box>
                    <Typography>Password *</Typography>
                    <TextField></TextField>
                </Box>
                <Box>
                    <Typography>Re-enter Password *</Typography>
                    <TextField></TextField>
                </Box>
                <Button variant='contained'> Continue </Button>
        </Box>
    )
}

export default HandleRegister; 