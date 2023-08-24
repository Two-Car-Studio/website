import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Paper sx={{marginTop: 'calc(10% + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        width: '100%'
        }} component='footer' square variant='outlined'>
            <Grid display='flex'  justifyContent='space-between'>
                <Box sx={{
                flexGrow: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                display: 'flex',
                my:1
                }}
                >
                    <Typography>
                        TWO CAR STUDIO
                    </Typography>
                    <Typography>
                        Copyright 2023 Two Car Studio.
                    </Typography>
                </Box>

                <Box
                sx={{
                    m:5,
                    pt:2
                }}
                >
                    <Typography variant='caption' sx={{m:5}}>
                        Instagram
                    </Typography>
                    <Typography variant='caption'sx={{m:5}}>
                        Terms & Conditions
                    </Typography>
                    <Typography variant='caption'sx={{m:5}}>
                        Cookie Policy
                    </Typography>
                    <Typography variant='caption'sx={{m:5}}>
                        Contact
                    </Typography>
                </Box>
            </Grid>
        </Paper>
    )
}

export default Footer;