import { Container, Box, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function LogIn() {
    
    return (
        <Container sx={{display:'flex', justifyContent:'center', flex:1}}>
            <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>  
                <Typography variant='h4' sx={{fontWeight:600, display:'flex', justifyContent:'center'}}> Welcome Back!</Typography>
                <Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography> Email *</Typography>
                        <TextField sx={{width:800}}></TextField>
                        <Typography component={Link} sx={{ display:'flex', justifyContent:'flex-end'}}>Forgot Email?</Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography> Password *</Typography>
                        <TextField sx={{width:800}}></TextField>
                        <Typography component={Link} sx={{ display:'flex', justifyContent:'flex-end'}}>Forgot Password?</Typography>
                    </Box>
                </Box>
                <Button variant='contained' sx={{display:'flex', justifyContent:'center', width:400}}>Continue</Button>
            </Box>
        </Container>
    )
}

export default LogIn;