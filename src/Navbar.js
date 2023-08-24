import * as React from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './styling/Navbar.css';


function Navbar() {

  return (
      
    <AppBar 
      className='nav' 
      position='static' 
      color='default'
      sx={{
        boxShadow: 0
      }}
      >
      <Toolbar>
        <Box>
          <Link to='/' className='site-title'>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
              TWO CAR STUDIO
            </Typography>
          </Link>
        </Box>
        <Box display='flex' >
          <ul>
            <CustomLink to='/About'>About</CustomLink>
            <CustomLink to='/Contacts'>Contacts</CustomLink>
          </ul>
          <Button component={Link} to="/BookNow" variant="contained" color="primary">
            Book Now
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
           
  );
}

function CustomLink({to, children, ...props}) {
  const path = window.location.pathname
  return (
    <li className={path === to ? 'active' : ''}>
      <Link to={to} {...props}> 
        {children}
      </Link>
    </li>
  )
}

export default Navbar;