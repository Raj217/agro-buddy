import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import "./Contact.css";
import ReactGa from "react-ga";

const Contact = () => {
  React.useEffect(() => {
    ReactGa.pageview(window.location.pathname);
  }, []);

  return (
    <div className="contact">
      <Typography gutterBottom variant="h3" align="center" fontWeight="bold">
        Contact Us
      </Typography>
      <Grid>
        <Card
          elevation={5}
          style={{
            maxWidth: 450,
            padding: "20px 5px",
            margin: "20px auto",
            background: "transparent",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" textAlign={"center"}>
              Query Section
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form if you have any queries and our team will get
              back to you within 24 hours.
            </Typography>
            <form action="https://getform.io/f/db885520-3386-459e-83f3-7a9e3388cb08" method="POST">
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="FirstName"
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="lastName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    name="Message"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Contact;
