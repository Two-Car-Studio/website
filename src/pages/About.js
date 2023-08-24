import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import WcIcon from '@mui/icons-material/Wc';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import WeekendIcon from '@mui/icons-material/Weekend';
import WbIridescentIcon from '@mui/icons-material/WbIridescent';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AirIcon from '@mui/icons-material/Air';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CheckroomIcon from '@mui/icons-material/Checkroom';

function About() {
    return (
        <Box className='main container'>
            <Box className='main picture'>

            </Box>
            <Container className='main text'>
                <Box className='text1'>

                </Box>
                <Box className='Keo Info'>

                </Box>
                <Box className='studio space pictures'>
    
                </Box>
                <Box className='studio specs'>
                    <Box>
                        <Typography>
                            What the studio offers
                        </Typography>
                    </Box>
                    <Box className='specs' sx={{ display: 'flex', justifyContent: 'center'  }}>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mr:5}}>
                            <Typography><CropSquareIcon/>15.1ft x 18.3ft Wood Flooring</Typography>
                            <Typography><WcIcon/>Full Bathroom</Typography>
                            <Typography><MusicNoteIcon/>Bose S1 Pro Speaker</Typography>
                            <Typography><WifiIcon/>Wifi</Typography>
                            <Typography><TvIcon/>Smart TV: screen mirroring, Youtube, Netflix</Typography>
                            <Typography><AcUnitIcon/>LG air conditioning unit</Typography>
                            <Typography><ImportExportIcon></ImportExportIcon>Ceiling to floor mirrors</Typography>
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', ml:5}}>
                            <Typography><WeekendIcon/>Seating/lounge area</Typography>
                            <Typography><WbIridescentIcon/>Color chaning LED flood lights</Typography>
                            <Typography><SettingsBrightnessIcon/>Dimmable main house lights</Typography>
                            <Typography><AirIcon/>UV air purifier</Typography>
                            <Typography><KitchenIcon/>Fridge space with drinks for $1</Typography>
                            <Typography><CheckroomIcon/>Vintage clothes for sale</Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default About;