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
import './Footer.css'

const Fotter = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                left: 0,
                width: "100%",
                height: "auto",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                bottom: '80px'
            }}
        >
            <Container maxWidth="lg" >
                <Grid container >
                    <Grid item md={4} xs={12} paddingLeft='50px'
                        sx={{ paddingLeft: { xs: '3rem', md: '2rem' }, paddingRight: { xs: '3rem', md: '2rem' } }}
                    >
                        <Typography variant="h5" fontWeight={500} textAlign='left' >
                            React Starter App
                        </Typography>
                        <Typography lineHeight={2} textAlign='left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deserunt ex consequatur beatae expedita sunt dignissimos voluptates eum cum debitis
                        </Typography>
                    </Grid>
                    <Grid item md={4} xs={12} sx={{ paddingLeft: { xs: '3rem', md: '2rem' }, paddingRight: { xs: '3rem', md: '2rem' } }} >

                        <div className="alignment">
                            <div className="icon-wrapper" >
                                <LocationOnIcon textAlign='left' style={{ color: Palette.colorAccent, fontSize: '22px' }} />
                            </div>
                            <Typography variant="h5" fontWeight={500} >
                                Address
                            </Typography>
                        </div>
                        <Typography variant="body2" paddingLeft='60px' paddingRight='30px'
                            sx={{ paddingLeft: { xs: '3rem', md: '2rem' }, paddingRight: { xs: '3rem', md: '2rem' }, lineHeight: { xs: '2rem' } }}
                            textAlign='left' lineHeight='20px'>
                            Suzy Queue
                            4455 Landing Lange, APT 4
                            Louisville, KY 40018-1234
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
                            hzdkv@example.com
                        </Typography>
                    </Grid>
                    <Grid item md={4} xs={12} >

                        <Stack flexDirection='row' justifyContent='center' gap={3}>
                            <Link href='#' color={Palette.Dark} >
                                <InstagramIcon />
                            </Link>
                            <Link href='#' color={Palette.Dark}>
                                <FacebookIcon />
                            </Link>
                            <Link href='#' color={Palette.Dark}>
                                <LinkedInIcon />
                            </Link>
                            <Link href='#' color={Palette.Dark}>
                                <TwitterIcon />
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

