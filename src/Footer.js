import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Paper sx={{
        width: '100%',
        bottom: 0,
        height:150,
        background: '#262626',
        }} component='footer' square variant='outlined'>
            <Box sx={{
            flexDirection: 'column',
            display: 'flex',
            ml:10
            }}
            >
                <Typography sx={{flexWrap:'wrap', justifyContent:'space-around', fontSize:14, fontWeight:'600', color:'white'}}>
                    TWO CAR STUDIO
                </Typography >
                <Typography sx={{fontSize:10, color:'white'}}>
                    Copyright 2023 Two Car Studio.
                </Typography>
            </Box>

            <Box
            sx={{
            }}
            >
                <Typography variant='caption' sx={{m:5, color:'white'}}>
                    Instagram
                </Typography>
                <Typography variant='caption'sx={{m:5, color:'white'}}>
                    Terms & Conditions
                </Typography>
                <Typography variant='caption'sx={{m:5, color:'white'}}>
                    Cookie Policy
                </Typography>
                <Typography variant='caption'sx={{m:5, color:'white'}}>
                    Contact
                </Typography>
            </Box>
        </Paper>
    )
}

export default Footer;