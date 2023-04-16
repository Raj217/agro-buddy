import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';
import * as Palette from '../../configs/pallete';
import Logo from "../../assets/logo.svg";

import './Footer.css';

const Fotter = () => {
  return (
    <Box
      sx={{
        left: 0,
        width: "100%",
        height: "auto",
        paddingTop: "3rem",
        paddingBottom: "3rem",
        bottom: '80px',
        backgroundColor: '#d8f4e2',
        marginTop: '3rem',
      }}

    >
      <Container maxWidth="lg" >
        <Grid container >
          <Grid item md={4} xs={12} paddingLeft='50px' display='flex' flexDirection='column' justifyContent='center'
            sx={{ paddingLeft: { xs: '3rem', md: '2rem' }, paddingRight: { xs: '3rem', md: '2rem' } }}
          >
            <Typography textAlign='left'>
              <img className="logo" src={Logo} />
            </Typography>
            <Typography lineHeight={2} textAlign='left' fontWeight={500} >
              Revolutionizing Farming with AgroBuddy: The Ultimate Crop Analytics Tool
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sx={{ paddingLeft: { xs: '3rem', md: '2rem' }, paddingRight: { xs: '3rem', md: '2rem' }, paddingTop: { xs: '2rem' } }} >

            <div className="alignment">
              <div className="icon-wrapper" >
                <LocationOnIcon textAlign='left' style={{ color: Palette.colorAccent, fontSize: '22px' }} />
              </div>
              <Typography variant="h5" fontWeight={500} >
                Address
              </Typography>
            </div>
            <Typography variant="body2" paddingLeft='60px' paddingRight='30px'
              sx={{ paddingLeft: { xs: '3rem', md: '2rem' }, paddingRight: { xs: '3rem', md: '2rem' }, lineHeight: { md: '1.5rem', xs: '2rem' } }}
              textAlign='left' lineHeight='20px'>
              Nit Silchar,<br />
              Cachar, Assam,
              Pin Code : 788010
            </Typography>
            <div className="alignment">
              <div className="icon-wrapper" >
                <MailIcon style={{ color: Palette.colorAccent, fontSize: '22px' }} />
              </div>
              <Typography variant="h5" fontWeight={500}>
                Email
              </Typography>

            </div>
            <Typography
              variant="body2" paddingLeft='60px' paddingRight='30px'
              sx={{ paddingLeft: { xs: '3rem', md: '2rem' }, paddingRight: { xs: '3rem', md: '2rem' }, lineHeight: { xs: '2rem' } }}
              textAlign='left' lineHeight='20px'
            >
              <a id="change" href="mailto:agrobuddy217@gmail.com">agrobuddy217@gmail.com</a>

            </Typography>
          </Grid>
          <Grid item md={4} xs={12} display='flex' flexDirection='column' justifyContent='center' sx={{ paddingTop: { xs: '2rem' } }}>
            <Stack flexDirection='row' justifyContent='center' gap={3}>
              <Link href='https://www.instagram.com/rajdristant/' color={Palette.dark} >
                <InstagramIcon />
              </Link>
              <Link href='https://www.facebook.com/profile.php?id=100014350572946' color={Palette.dark}>
                <FacebookIcon />
              </Link>
              <Link href='https://www.linkedin.com/in/akash-suklabaidya-435aa5227/' color={Palette.dark}>
                <LinkedInIcon />
              </Link>

            </Stack>

            <Typography color="textSecondary" variant="subtitle1" textAlign='center' >
              {`${new Date().getFullYear()} | All rights reserved `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Fotter