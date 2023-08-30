import { Link } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

function Title() {

    const returningLink = <Link to='/LogIn'>here</Link>;

    return (
        <Box className='main container' >
            <Box className='primary container' sx={{display:'flex', justifyContent:'space-evenly' }}>
                <Box className='primary text' sx={{maxWidth:true, mt:25}}>
                    <Typography variant='h4' sx={{wordSpacing:10, lineHeight: 1.2, fontWeight:700}}>
                        two car studio
                    </Typography>
                    <Typography>
                        your dance home
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
                    <img src='images/dancingFromBehind.jpg' alt='placeholder' style={{height:500}} />
                </Box>
            </Box>
            <Box className='secondary container'>
                <Button>

                </Button>
            </Box>
        </Box>
    )
}

export default Title;