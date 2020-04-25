import React from "react";
import logo from "./logo.svg";
import Section1 from "../src/components/Section1";
import Section2 from "../src/components/Section2";
import Section3 from "../src/components/Section3";
import Section4 from "../src/components/Section4";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Container,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";
import "./App.css";

const App = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" spacing={3}>
      <Section1 />
      <Section2 />
      {/* <Divider style={{ border: "solid #eee" }} /> */}
      <Divider style={{ height: "0.5px" }} />
      <Section3 />
      <Divider variant="middle" />
      <Section4 />

      {/* <div className={classes.section4}>Hello World !</div> */}
    </Grid>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  section4: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    height: "30vh",
  },
}));
