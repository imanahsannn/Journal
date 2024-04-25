import React from "react";
import {Container, AppBar, Typography, Grow, Grid, dialogContentClasses} from '@mui/material';

import memories from './images/dina.jpeg';

import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";

const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="memories" height="1000"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
