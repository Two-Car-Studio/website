import * as React from 'react';
import { Link} from 'react-router-dom'
import { AppBar, Tab, Tabs, Toolbar, Typography, Button } from '@mui/material/';
import ProfileDropdown from './pages/NavbarComponents/ProfileDropdown';

function Navbar() {

  return (


      
    <AppBar 
      className='nav' 
      position='static' 
      sx={{
        backgroundColor: 'white',
        boxShadow: 0,
        maxWidth: true,
        maxHeight: 64
      }}
      >
      <Toolbar >
        <Typography variant='h6' sx={{fontWeight:700}}>
          <Link to='/' className='site-title' style={{textDecoration: 'none', color: 'black'}}> TWO CAR STUDIO </Link>
        </Typography>
        <Tabs sx={{ marginLeft: 'auto'}}>
          <Tab component={Link} to='/About' label='About' sx={{color: 'black'}}/>
          <Tab component={Link} to='/Contacts' label='Contacts' sx={{color: 'black'}}/>
        </Tabs>
        <Button component={Link} to='/BookNow' variant='contained' sx={{marginLeft: 'auto', fontWeight: 600, background:'black', ml:2}}> Book Now </Button>
        {/* {
          auth ? <ProfileDropdown/> : <></>
        } */}
      </Toolbar>
    </AppBar>
           
  );
}



export default Navbar;