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
} from "@mui/material";
import { Link } from "react-router-dom";
import { CropContext } from '../../context/crops';


const cards = [1, 2, 3, 4, 5, 6];

function SearchCard() {

  const { cropData } = React.useContext(CropContext);
  let name = cropData.images[0].name;

  let image = cropData.images[0].images[0];
  let description = cropData.images[0].description;
  console.log(image);

  return (

    <Container maxWidth="lg" >
      <Grid container spacing={2}>
        {cards.map(() => (
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                style={{
                  height: "300px",
                }}
                component="img"
                image={image}
                alt="crops"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <Stack alignItems="center">
                <Link to="/content" style={{ textDecoration: "none" }}>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Link>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default SearchCard;
