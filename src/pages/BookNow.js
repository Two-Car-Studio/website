import { Container, Box, Typography, TextField, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

function BookNow () {

    const returningLink = <Link to='/LogIn'>here</Link>;

    return (

        <Container sx={{display:'flex', justifyContent:'space-around', flex:1}}>
            <Box sx={{mt:7}}>
                <ArrowBackIcon />
                <Typography sx={{mt:10}}> Let us help you rent out our space faster and easier.</Typography>
                <img src='images/10.png' alt='helpful'></img>
            </Box>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                <Box>
                    <Typography>Get Started</Typography>
                    <Typography>Create your account now</Typography>
                </Box>
                <Box>
                    <Typography>Email *</Typography>
                    <Typography>We will send a confirmation email once your reservation is complete.</Typography>
                    <TextField></TextField>
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
                <Typography>Returning? Click {returningLink} to log in</Typography>
            </Box>
        </Container>
    )
}

export default BookNow;