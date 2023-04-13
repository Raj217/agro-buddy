import * as React from "react";
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


function SearchCard() {

  const { cropData } = React.useContext(CropContext);
  console.log(cropData);
  let name = cropData?.images[0]?.name;
  const randomNumber = Math.floor(Math.random() * 3);
  let image = cropData?.images[0]?.images[randomNumber];
  let description = cropData?.images[0]?.description;
  let humidity = cropData?.preview[0]?.humidity;
  let nitrogen = cropData?.preview[0]?.nitrogen;
  let pH = cropData?.preview[0]?.pH;
  let phosphorous = cropData?.preview[0]?.phosphorous;
  let potassium = cropData?.preview[0]?.potassium;
  let rainfall = cropData?.preview[0]?.rainfall;
  let temperature = cropData?.preview[0]?.temperature;

  return (

    <Container maxWidth="lg" >

      <Box margin='auto' width='40%'>
        <Card
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <Link to="/content" style={{ textDecoration: "none" }}>
            <CardMedia
              style={{
                height: "300px",
              }}
              component="img"
              image={image}
              alt="crops"
              className="brighten"
            />
          </Link>

          <CardContent>
            <Typography textAlign='center' gutterBottom variant="h4" component="div" lineHeight={3}>
              {name}
            </Typography>
            <Stack display='flex' justifyContent='center' alignItems='center'>
              <Typography variant="h7" lineHeight={2}>
                Humidity= {humidity}<br />
                Nitrogen={nitrogen}<br />
                pH={pH}<br />
                phosphorous={phosphorous}<br />
                rainfall={rainfall}<br />
                temperature={temperature}
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
