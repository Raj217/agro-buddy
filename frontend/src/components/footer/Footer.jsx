import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as Palette from '../../configs/pallete'


const Footer = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                width: "100%",
                height: "auto",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                bottom: '80px'
            }}
        >
            <Container maxWidth="lg" >
                <Grid container alignItems="center" >
                    <Grid item md={4} xs={12}>
                        <Typography variant="h5" fontWeight={500} textAlign='left' >
                            React Starter App
                        </Typography>
                        <Typography variant="h7" lineHeight={2} textAlign='left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ea rem eaque esse odit at fugiat vel modi harum commodi optio qui quasg
                        </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography variant="h5" fontWeight={500}>
                            Address
                        </Typography>
                        <div className="icon-wrapper">
                            <LocationOnIcon style={{ color: Palette.colorAccent, fontSize: '22px' }} />
                        </div>
                        <Typography variant="h5" fontWeight={500}>
                            Email
                        </Typography>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            {`${new Date().getFullYear()} | React | Material UI | React Router`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer