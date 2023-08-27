import { Link } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

function Title() {

    const returningLink = <Link to='/LogIn'>here</Link>;

    return (
        <Box className='main container'>
            <Box className='primary container'>
                <Box className='primary text'>
                    <Typography>
                        two car studio
                    </Typography>
                    <Typography>
                        your dance home
                    </Typography>
                    <Typography>

                    </Typography>
                    <Button 
                        component={Link} 
                        to="/BookNow"
                        variant="contained" 
                        color="primary"
                        >
                        Book Now
                    </Button>
                    <Typography>
                        Returning? Click {returningLink} to log in
                    </Typography>
                </Box>
                <Box className='primary pictures'>

                </Box>
            </Box>
            <Box className='secondary container'>

            </Box>
        </Box>
    )
}

export default Title;