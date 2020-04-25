import React from "react";
import FormContainer from "./FromContainer";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Container,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

const Section1 = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.section1}
    >
      <Grid item xs={10}>
        <Typography
          variant="h4"
          align="center"
          style={{ color: "#eee", fontWeight: "bold" }}
        >
          Vérifiez votre éligibilité pour isoler votre maison à 1€
        </Typography>
      </Grid>
      <Grid item xs={8} style={{ paddingTop: "1em" }}>
        <Typography variant="h6" align="center" style={{ color: "#eee" }}>
          Vérifiez votre éligibilité en 30 secondes en répondant aux 4 questions
          ci-dessous :
        </Typography>
      </Grid>
      <FormContainer />
    </Grid>
  );
};

export default Section1;

const useStyles = makeStyles((theme) => ({
  section1: {
    minHeight: "100vh",
    backgroundImage:
      "url(" +
      "//www.programme-energie.org/hosted/images/6e/e836ea8acd4588a6d57523917ec849/blue_skies.jpg" +
      ")",
    padding: "9em 3em 4em",
  },
}));
