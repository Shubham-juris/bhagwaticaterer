import React from 'react'
import BannerImage from '../../assets/BannerImage.webp'
import BannerImage2 from '../../assets/BannerImage2.webp'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, Button } from '@mui/material';
import Sitemaintenance from '../SiteMaintenance/Sitemaintenance';

const Banner = () => {
  return (
    <>
    
    <Container sx={{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        opacity:'0.6',
        flexDirection:{xs:'column', md:'row'}
    }}>
        <Box sx={{ backgroundColor: '#E36B12',overflowX:'hidden', px: 3, height:{xs:'400px',md:'999px'}, width:{xs:'100%'}, display:'flex', alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
        <img style={{
            width:'100%',
            overflowX:'hidden',
        }} src={BannerImage2} alt="BannerImage2"/>
        <Typography sx={{
            color:'white',
            my: 2
        }}>
        Create Unforgettable Moments with Bhagwati Caterers.
        </Typography>
        <Button sx={{
            border:'2px solid white',
            color:'white',
            borderRadius:'20px',
            my:2
        }}>FIND OUT MORE</Button>
    </Box>
    <Box sx={{
        height:{md:'999px',xs:'400px'},
        width:'100%',
        overflow:'hidden',
        background:`url(${BannerImage})`,
        backgroundSize:'cover'
    }}>
       {/* <img style={{
        // height: '500px',
        // width:'70vw'
       }} src={BannerImage} alt="BannerImage" /> */}
    </Box>
  </Container>

  </>
  )
}

export default Banner