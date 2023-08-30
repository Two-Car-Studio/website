import { Link } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Title from './homeComponents/Title';

function Home() {

    return (
        <Box sx={{flex:1}}>  
            <Title/>
        </Box>
    )
}

export default Home;