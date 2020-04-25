import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Container,
  Typography,
  Divider,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Grid,
} from "@material-ui/core";

const stepTitles = [
  "Vous êtes ? *",
  "Vous vivez dans ? *",
  "Quelle partie de votre maison souhaitez-vous isoler ? *",
  "Quel-est votre type de chauffage ? *",
];

const SelectForm = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [step, setStep] = React.useState(0);

  const move = () => {
    if (step < stepTitles.length) {
      let elem = document.getElementById("progressBar");
      let width = step ? step * (100 / stepTitles.length) : 10;
      const id = setInterval(frame, 10);
      function frame() {
        console.log("width", width, step);
        if (width >= (step + 1) * (100 / stepTitles.length)) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  };

  const handleClick = () => {
    move();
    setStep(step + 1);
  };

  const handleChange = (event) => {
    console.log("het");
    setValue(event.target.value);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <Typography
          variant="h5"
          style={{
            color: "blak",
            fontWeight: "bold",
            paddingTop: "2em",
            paddingBottom: "2em",
          }}
        >
          {stepTitles[step]}
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ paddingBottom: "2em" }}
        // xs={10}
      >
        <Grid item xs={10}>
          <div className={classes.bar}>
            <div id="progressBar" className={classes.progressBar} />
          </div>
        </Grid>
      </Grid>

      {/* STEP 1 */}
      <FormControl component="fieldset">
        <RadioGroup value={value} onChange={handleChange}>
          {/* <Grid
            container
            justify="space-between"
            direction="row"
            style={{ padding: "2em" }}
          > */}
          <FormControlLabel
            value="PROPRIETAIRE"
            label="Propriétaire"
            control={
              <Grid
                item
                container
                justify="center"
                className={classes.cardItem}
              >
                <img
                  className={classes.selectImage}
                  src="//www.programme-energie.org/hosted/images/9e/93da212b5b494a9d29227f7e6b2a3d/maison.png"
                ></img>
              </Grid>
            }
          />

          <FormControlLabel
            value="LOCATAIRE"
            label="Locataire"
            control={
              <Grid
                item
                container
                justify="center"
                className={classes.cardItem}
              >
                <img
                  className={classes.selectImage}
                  src="//www.programme-energie.org/hosted/images/d8/4e23a1e51743ffa33eb9ecd60ef791/Untitled-Design-1-.png"
                ></img>
              </Grid>
            }
          />
          {/* </Grid> */}
        </RadioGroup>
      </FormControl>

      {/* STEP 2 */}

      <button className="w3-button w3-light-grey" onClick={handleClick}>
        Click Me
      </button>
    </Grid>
  );
};

export default SelectForm;

const useStyles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "#ddd",
    borderRadius: "10px",
    height: "10px",
  },
  progressBar: {
    backgroundColor: "#96bd2c",
    borderRadius: "10px",
    height: "10px",
    width: "10%",
  },
  cardItem: {
    padding: "1em",
    width: "50%",
    borderRadius: "10px",
    "&:hover, &:focus": {
      backgroundColor: "#def2fa",
    },
  },
  selectImage: {
    width: "100%",
  },
}));
