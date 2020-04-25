import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Container,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

const Section4 = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.section4}
    >
      <Grid item xs={12}>
        <img
          src="//www.programme-energie.org/hosted/images/5d/ec80dff9104ac4b0e29864a90cae9a/Copie-de-Copie-de-Sans-titre-1-.png"
          width="100"
        />
      </Grid>
      <Grid
        container
        justify="center"
        direction="row"
        style={{ paddingTop: "2em", paddingBottom: "3em" }}
      >
        <Typography>
          <a
            href="https://www.cnil.fr/fr/donnees-personnelles"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            Politiques de protection des données personnelles
          </a>
        </Typography>
        <Typography style={{ color: "#eee" }}> | </Typography>
        <Typography>
          <a
            href="https://www.cnil.fr/fr/rgpd-exemples-de-mentions-dinformation"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            Informations Légales
          </a>
        </Typography>
        <Typography style={{ color: "#eee" }}>
          | © Copyright Conseils Énergie
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Section4;

const useStyles = makeStyles((theme) => ({
  section4: {
    paddingTop: "2em",
    backgroundColor: "rgb(25, 29, 29)",
  },
  link: {
    textDecoration: "none",
    margin: "1em",
  },
}));
