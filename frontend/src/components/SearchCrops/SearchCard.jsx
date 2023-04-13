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
  let name = cropData.crops[0].name;

  let image = cropData.images[0];
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
                image="https://source.unsplash.com/random"
                alt="crops"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                  at id hic nihil eligendi asperiores placeat nostrum quis
                  voluptatibus itaque enim, recusandae aspernatur quisquam odio
                  nobis, impedit modi. Suscipit, eos.
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
