import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import {
  Stack,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
  Grid,
  Box
} from "@mui/material";
import { Link } from "react-router-dom";
import { CropContext } from '../../context/crops';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

function SearchCard() {

  const { crops } = useContext(CropContext);
  console.log(crops);

  const random = Math.floor(Math.random() * 3);

  let image = crops?.cropData['images'][random];

  let name = crops?.cropData.name;
  let humidity = crops?.cropDetails[0]?.humidity;
  let nitrogen = crops?.cropDetails[0]?.nitrogen;
  let pH = crops?.cropDetails[0]?.pH;
  let phosphorous = crops?.cropDetails[0]?.phosphorous;
  let potassium = crops?.cropDetails[0]?.potassium;
  let rainfall = crops?.cropDetails[0]?.rainfall;
  let temperature = crops?.cropDetails[0]?.temperature;




  return (

    <Container maxWidth="lg">

      <Box margin='auto'
        sx={{
          width: { lg: '40%', md: '50%', xs: '80%' }
        }}

      >
        <Card
          sx={{ display: "flex", flexDirection: "column", width: '100%' }}
        >
          <Link to="/content" style={{ textDecoration: "none" }}>
            <CardMedia
              style={{
                height: "300px",
              }}
              className="brighten"
              component="img"
              image={image}
              alt="crops"
            />
          </Link>

          <CardContent>
            <Typography textAlign='center' gutterBottom variant="h4" component="div" lineHeight={3}>
              {name}
            </Typography>
            <Stack display='flex' justifyContent='center' alignItems='center'>

            </Stack>
            <Stack display='flex' alignItems='center' justifyContent='center'>
              <Typography variant="h7" lineHeight={2} >
                pH = {pH} <RadioButtonCheckedIcon
                  style={{
                    color: pH > 7 ? '#1fc531' : pH >= 5 && pH < 7 ? '#f2db00' : '#ba1d00'
                  }}
                />
              </Typography>
              <Typography>
                rainfall = {rainfall}
                <RadioButtonCheckedIcon
                  style={{
                    color: rainfall >= 200 ? '#1fc531' : rainfall >= 100 && rainfall < 200 ? '#f2db00' : '#ba1d00'
                  }} />
              </Typography>
              <Typography>
                temperature = {temperature}
                <RadioButtonCheckedIcon
                  style={{
                    color: temperature >= 30 ? '#1fc531' : temperature >= 20 && temperature < 30 ? '#f2db00' : '#ba1d00'
                  }} />
              </Typography>
            </Stack>

          </CardContent>
          <Stack alignItems="center">
            <Link to="/content" style={{ textDecoration: "none" }}>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Link>
          </Stack>
        </Card>

      </Box>

    </Container >
  );
}

export default SearchCard;
