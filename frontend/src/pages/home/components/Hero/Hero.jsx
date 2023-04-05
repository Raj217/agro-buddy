import React from 'react';
import { Typography, Stack, Button, Grid, TextField, Container, Box } from '@mui/material';
import Banner from '../../../../components/general/img/Banner';
import './Hero.css';
import SignUp from '../../../../components/forms/SignUp';

function Hero() {
  return (
    <Box paddingTop='80px' >
      <Grid container rowSpacing='30px'>
        <Grid display='flex' flexDirection='column' alignItems='start' justifyContent='center' paddingLeft='100px' item md={6} sm={6} xs={12}  >
          <Typography
            fontWeight={700}
            textAlign='left'
            sx={{ fontSize: { lg: '3rem', xs: '2.5rem' } }}
          >
            We Are Cella Agriculture
          </Typography>
          <Typography
            fontSize='1rem'
            fontWeight={500}
            textAlign='left'
            sx={{ lineHeight: { lg: '60px', xs: '80px' }, fontSize: { lg: '1rem', xs: '0.8rem' } }}
          >
            we believe Future of Food is here
          </Typography>
          {/* <Button variant='contained'>Sign Up</Button> */}
          <SignUp />
        </Grid>
        <Grid
          sx={{ paddingLeft: { lg: '120px' } }}
          item md={6} sm={6} xs={12}>
          <Banner url={'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} type={'bottom-right'}
            sx={{ width: { lg: '400px', xs: '300px' } }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Hero