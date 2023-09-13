import { Typography, Container, TextField, Box, Button } from "@mui/material";


function PasswordReset () {
    return (
        <Container>
            <Typography>
                Password Reset 
            </Typography>
            <Box>
                <Typography>
                 Email Associated with Account*
                </Typography>
                <TextField></TextField>
            </Box>
            <Button> Continue </Button>
        </Container>
    )
}

export default PasswordReset;