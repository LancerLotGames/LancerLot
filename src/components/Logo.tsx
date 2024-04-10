import React from 'react';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import logo from '../assets/media/logo.png';

function Logo() {
  return (
    <>
      <Link to={'/'}>
        <img style={{height:100}} src={logo} className='App-logo' alt='logo'/>
      </Link>
      <Typography
        variant='h6'
        noWrap
        component='a'
        href='/'
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'flex' },
          fontFamily: 'cursive',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        LancerLot
      </Typography>
    </>
  );
}

export default Logo;
