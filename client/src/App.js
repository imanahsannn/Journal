import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material';

import memories from './images/dina.jpeg';

import Posts from "./components/Posts/posts";
import Form from "./components/Form/form";
import useStyles from './styles';


const App = () => {
  const classes = useStyles( );

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="1000"></img>
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
