// // import React from "react";

// // import InstagramIcon from "@mui/icons-material/Instagram";
// // import FacebookIcon from "@mui/icons-material/Facebook";
// // import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import { BiUserCircle } from "react-icons/bi";
// // import { MdLocationOn } from "react-icons/md";
// // import { MdSend } from "react-icons/md";
// // import { BsFillTelephoneFill } from "react-icons/bs";
// // import Logo from "../../assets/logo.svg";
// // import "./Footer.css";
// // import { Link } from "react-router-dom";
// // const Footer = () => {
// //   return (
// //     <div className="footer-section">
// //       <div className="fcontainer">
// //         <div className="container1">
// //           <Link to="/">
// //             <img className="img-foot-centr" src={Logo} alt="logo" />
// //           </Link>
// //         </div>
// //         <div className="container2">
// //           <ul className="no-bullets">
// //             <li>
// //               <BiUserCircle className="f_icon" />
// //               <span className="i-text">Agro-Buddy</span>
// //             </li>
// //             <li>
// //               <MdLocationOn className="f_icon" />
// //               <span className="i-text"> NIT Silchar</span>
// //             </li>
// //             <li>
// //               <BsFillTelephoneFill className="f_icon" />
// //               <span className="i-text">+91 6263 943 064</span>
// //             </li>
// //           </ul>
// //         </div>

// //         <div className="container3">
// //           <h2 className="h2">
// //             <span className="s_head">Social</span>
// //           </h2>
// //           <a href="/" className="footer_social_Logo">
// //             <FacebookIcon />
// //             <span className="i-text">Facebook</span>
// //           </a>
// //           <a href="/" className="footer_social_Logo" id="link_ln">
// //             <LinkedInIcon />
// //             <span className="i-text">Linkedln</span>
// //           </a>
// //           <a href="/" className="footer_social_Logo">
// //             <InstagramIcon className="foot_insta" />
// //             <span className="i-text">Instagram</span>
// //           </a>
// //         </div>
// //         <div className="container5">
// //           <p className="p2">All Rights Reserved @Agro-Buddy</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Footer;


// import React from 'react';
// import './Footer.css'

// function Footer() {
//   return (
//     <div className='footer-container'>
//       <section className='footer-subscription'>
//         <p className='footer-subscription-heading'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsum, laborum enim saepe magni sint nisi dolor ducimus fugit et
//         </p>

//         <div children=''>

//         </div>
//       </section>
//     </div>
//   )
// }

// export default Footer

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
import './FooterStyles'


const Fotter = () => {
  return (
    <Box
      sx={{
        // position: 'fixed',
        width: "100%",
        // height: "auto",
        paddingTop: "4rem",
        paddingBottom: "1rem",
        bottom: '80px'
        // bottom: '0'
      }}
    >
      <Container maxWidth="lg" >
        <Grid container alignItems="center" rowSpacing='3rem'>
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
          <Grid item md={4} xs={12} sx={{ paddingLeft: { xs: '3rem', md: '2rem' }, paddingRight: { xs: '3rem', md: '2rem' } }}>
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
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | All rights reserved `}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
export default Fotter