import React, { useContext } from "react";
import { Typography, Stack, Button, Grid, Box } from "@mui/material";
import Banner from "../../../../components/general/img/Banner";
import { AuthContext } from "../../../../context/auth";
import { useNavigate } from "react-router-dom";
import * as Palette from '../../../../configs/pallete'
import "./Hero.css";

function Hero() {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <Box paddingTop="80px">
        {/* <Box> */}
        <Grid container rowSpacing="30px">
          <Grid
            minWidth="50%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              paddingLeft: {
                'md': '100px',
                'sm': '70px'
              }
            }}
            item
            md={6}
            sm={6}
            xs={12}
          >
            <Box width='80%'>
              <Typography
                fontWeight={700}
                textAlign="left"
                sx={{ fontSize: { lg: "3.5rem", xs: "2.5rem" } }}
              >
                Empowering Farmers with Data-Driven Insights
              </Typography>
              <Typography
                // fontSize="3rem"
                padding='20px 0'
                fontWeight={500}
                textAlign="left"
                sx={{
                  // lineHeight: { lg: "60px", xs: "80px" },
                  fontSize: { lg: "1rem", xs: "0.8rem" },
                  color: Palette.secondary
                }}
              >
                Empowering Farmers for Success: Maximize Your Crop Yields and Minimize Risks with AgroBuddy's Comprehensive Data-Driven Insights and Analytics
              </Typography>
              {loggedIn ? (
                <Button variant="contained" onClick={() => navigate("/search")}>Explore</Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => navigate("/sign-in")}
                >
                  Sign In
                </Button>
              )}
            </Box>
          </Grid>
          <Grid
            minWidth="40%"
            // sx={{ paddingLeft: { lg: "120px" } }}
            item
            md={6}
            sm={6}
            xs={12}
          >
            <Banner
              url={
                "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              }
              type={"bottom-right"}
              sx={{ width: { lg: "400px", xs: "300px" } }}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
  //   <Box paddingTop='80px' style={{backgroundColor:'#dcedaf'}}>
  //     <Grid container rowSpacing='30px'>
  //       <Grid display='flex' flexDirection='column' alignItems='start' justifyContent='center' paddingLeft='100px' item md={6} sm={6} xs={12}  >
  //         <Typography
  //           fontWeight={700}
  //           textAlign='left'
  //           sx={{ fontSize: { lg: '3rem', xs: '2.5rem' } }}
  //         >
  //           We Are Cella Agriculture
  //         </Typography>
  //         <Typography
  //           fontSize='1rem'
  //           fontWeight={500}
  //           textAlign='left'
  //           sx={{ lineHeight: { lg: '60px', xs: '80px' }, fontSize: { lg: '1rem', xs: '0.8rem' } }}
  //         >
  //           we believe Future of Food is here
  //         </Typography>
  //         { loggedIn ? (
  //           <Button variant='contained' >Explore</Button>
  //         ) : (
  //           <Button variant='contained' onClick={()=>navigate('/sign-in')}>Sign In</Button>
  //         ) }
  //       </Grid>
  //       <Grid
  //         sx={{ paddingLeft: { lg: '120px' } }}
  //         item md={6} sm={6} xs={12}>
  //         <Banner url={'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'} type={'bottom-right'}
  //           sx={{ width: { lg: '400px', xs: '300px' } }}
  //         />
  //       </Grid>
  //     </Grid>
  //   </Box>
  // )
}

export default Hero;
