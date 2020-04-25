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

const Section2 = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      className={classes.section2}
    >
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        xs
        style={{ padding: "2em" }}
      >
        <img
          src="//www.programme-energie.org/hosted/images/be/3bd794e40a4a90a94752a97c4afae4/Comparer3.png"
          width="200"
        />
        <Typography variant="h6" align="center" style={{ color: "#eee" }}>
          1. Vérifiez votre éligibilité en quelques secondes{" "}
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        xs
        style={{ padding: "2em" }}
      >
        <img
          src="//www.programme-energie.org/hosted/images/99/7546d741354da2835fc47a3d80e2cc/loupe4.png"
          width="200"
        />
        <Typography variant="h6" align="center" style={{ color: "#eee" }}>
          2. Nous étudions votre dossier en moins de 24h{" "}
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        xs
        style={{ padding: "2em" }}
      >
        <img
          src="//www.programme-energie.org/hosted/images/5c/396191f9bb4eb2bd8fb237f23f5297/euros3.png"
          width="200"
        />
        <Typography variant="h6" align="center" style={{ color: "#eee" }}>
          3. Économisez jusqu'à 70% sur vos factures d'énergie
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Section2;

const useStyles = makeStyles((theme) => ({
  section2: {
    backgroundColor: "rgb(23, 49, 116)",
  },
}));
