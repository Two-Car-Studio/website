import { Typography, Container, TextField, Box, Button } from "@mui/material";


function ForgotEmail () {
    return (
        <Container>
            <Typography>
                Email Reset 
            </Typography>
            <Box>
                <Typography>
                 Phone Number*
                </Typography>
                <TextField></TextField>
            </Box>
            <Button> Continue </Button>
        </Container>
    )
}

export default ForgotEmail;