import { Container, Typography, Box } from '@mui/material';
import React from 'react';
import FoodItem from '../../assets/FoodItem1.png';

const Welcome = () => {
  return (
    <Container
      sx={{
        opacity: '0.75',
      }}
    >
      <Box>
        <h1
          style={{
            margin: '50px 0px',
            textAlign: 'center',
          }}
        >
          Savor the Flavors of Bhagwati Caterers
        </h1>
      </Box>
      <h3
        style={{
          margin: '20px 0',
          textAlign: 'center',
        }}
      >
        Welcome to Bhagwati Caterers
      </h3>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          my: 5,
        }}
      >
        <Typography
          sx={{
            my: 2,
            textAlign: 'left',
          }}
        >
          {' '}
          Welcome to Bhagwati Caterers, your ultimate destination for exquisite
          vegetarian Indian cuisine in India. Indulge in a culinary journey
          crafted with authentic flavors, traditional recipes, and impeccable
          service. Whether it's weddings, corporate events, or special
          occasions, we elevate your experience with our delectable dishes and
          passion for perfection. Explore our menu, discover our expertise, and
          let us cater to your every gastronomic need{' '}
        </Typography>
        <img src={FoodItem}></img>
      </Box>
    </Container>
  );
};

export default Welcome;
