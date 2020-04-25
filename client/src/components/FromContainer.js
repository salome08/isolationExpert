import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectForm from "./SelectForm";
import {
  Paper,
  Button,
  Container,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

const FormContainer = () => {
  const classes = useStyles();
  return (
    <Grid item container justify="center" style={{ paddingTop: "2em" }}>
      <Paper className={classes.paper}>
        <Grid item container justify="center" style={{ paddingTop: "2em" }}>
          <img
            src="//www.programme-energie.org/hosted/images/fb/762742a4d64a68adfb9206f03faf9d/partenaire-ministere-ecologie-dev-durable-energie.jpg"
            width="210"
          />
        </Grid>
        <SelectForm />
      </Paper>
    </Grid>
  );
};

export default FormContainer;

const useStyles = makeStyles((theme) => ({
  paper: {
    // display: "flex",
    maxWidth: "50%",
    padding: "2em",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
}));
