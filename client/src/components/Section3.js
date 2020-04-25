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

const Section3 = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.section3}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          align="center"
          style={{ color: "#eee", fontWeight: "bold" }}
        >
          Nos partenaires énergie
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        style={{ paddingTop: "1em", paddingBottom: "1em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          xs={3}
          style={{ padding: "2em" }}
        >
          <img
            src="//www.programme-energie.org/hosted/images/4f/72c9e66d824d649959e6db5ea98b1c/5dd40a8b0203a5618f6036e9_logo-total-white-p-500.png"
            width="150"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          xs={3}
          style={{ padding: "2em" }}
        >
          <img
            src="//www.programme-energie.org/hosted/images/38/42aa28a05d4ded9630011c1ef7db88/5dd4187243566214f084e9a0_logo-antargaz-white.png"
            width="160"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          xs={3}
          style={{ padding: "2em" }}
        >
          <img
            src="//www.programme-energie.org/hosted/images/d7/80121785d2496ebf4d12d2b6ad0f60/5dd40a79435662a60e84558f_logo-edf-white-p-500.png"
            width="100"
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justify="center"
          xs={3}
          style={{ padding: "2em" }}
        >
          <img
            src="//www.programme-energie.org/hosted/images/cc/2fa8c7243a4c96a0295726b38716ad/5dd40a6516d5e6138fe73804_engie-logo-white.png"
            width="100"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Section3;

const useStyles = makeStyles((theme) => ({
  section3: {
    paddingTop: "2em",
    backgroundColor: "rgb(23, 49, 116)",
  },
}));
