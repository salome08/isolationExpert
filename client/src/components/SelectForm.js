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
import DialogForm from "./DialogForm";

const stepTitles = [
  "Vous êtes ? *",
  "Vous vivez dans ? *",
  "Quelle partie de votre maison souhaitez-vous isoler ? *",
  "Quel-est votre type de chauffage ? *",
];

const step3Labels = [
  { label: "Les rampants", value: "RAMPANTS" },
  { label: "Les murs intérieurs", value: "MURS_INTERIEURS" },
  { label: "Le sous-sol", value: "SOUS_SOL" },
  { label: "Les combles", value: "COMBLES" },
  { label: "Le vide sanitaire", value: "VIDE_SANITAIRE" },
  { label: "Plusieurs parties", value: "PLUSIEURS_PARTIES" },
];

const step4Labels = [
  {
    label: "Gaz",
    value: "GAZ",
    srcImg:
      "//www.programme-energie.org/hosted/images/0e/46dc3944634bf29c52d6a3dbd05c33/3.png",
  },
  {
    label: "Fioul",
    value: "FIOUL",
    srcImg:
      "//www.programme-energie.org/hosted/images/c5/c46aebca7d423185e82d889d01d5a1/2.png",
  },
  {
    label: "Électricité",
    value: "ELECTRICITE",
    srcImg:
      "//www.programme-energie.org/hosted/images/d8/c86ec34c4c482da3e19465000a8de1/1.png",
  },
  {
    label: "Autre",
    value: "AUTRE",
    srcImg:
      "//www.programme-energie.org/hosted/images/33/f2744d948b40c491f6e498b9dcd3c7/4.png",
  },
];

const SelectForm = () => {
  const classes = useStyles();
  const [step, setStep] = React.useState(0);
  const [dialogOpen, setDialogopen] = React.useState(false);
  const [values, setValues] = React.useState({});

  const move = () => {
    if (step <= stepTitles.length) {
      let elem = document.getElementById("progressBar");
      let width = step ? step * (100 / (stepTitles.length - 1)) : 10;
      const id = setInterval(frame, 10);
      function frame() {
        if (width >= (step + 1) * (100 / (stepTitles.length - 1))) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  };

  const handleClick = (label, value) => {
    console.log(label, value);
    console.log(values);
    console.log(step);

    setValues({ ...values, [label]: value });
    if (step < 3) {
      move();
    }
    if (step === 3) setStep(4);
    else setStep(step + 1);
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
      {step === 0 && (
        <Grid
          container
          justify="space-between"
          direction="row"
          style={{ padding: "2em" }}
        >
          <Grid
            item
            container
            justify="center"
            className={classes.cardItem}
            onClick={() => handleClick("realEstateSituation", "PROPRIETAIRE")}
          >
            <img
              className={classes.selectImage}
              src="//www.programme-energie.org/hosted/images/9e/93da212b5b494a9d29227f7e6b2a3d/maison.png"
            ></img>
            <Typography variant="h5">Propriétaire</Typography>
          </Grid>

          <Grid
            item
            container
            justify="center"
            className={classes.cardItem}
            onClick={() => handleClick("realEstateSituation", "LOCATAIRE")}
          >
            <img
              className={classes.selectImage}
              src="//www.programme-energie.org/hosted/images/d8/4e23a1e51743ffa33eb9ecd60ef791/Untitled-Design-1-.png"
            ></img>
            <Typography variant="h5">Locataire</Typography>
          </Grid>
        </Grid>
      )}

      {/* STEP 2 */}
      {step === 1 && (
        <Grid
          container
          justify="space-between"
          direction="row"
          style={{ padding: "2em" }}
        >
          <Grid
            item
            container
            justify="center"
            className={classes.cardItem}
            onClick={() => handleClick("propertyType", "MAISON")}
          >
            <img
              className={classes.selectImage}
              src="//www.programme-energie.org/hosted/images/b7/770bf4554447328108667e2be94f78/maison-transparant.png"
            ></img>
            <Typography variant="h5">Maison</Typography>
          </Grid>

          <Grid
            item
            container
            justify="center"
            className={classes.cardItem}
            onClick={() => handleClick("propertyType", "APPARTEMENT")}
          >
            <img
              className={classes.selectImage}
              src="//www.programme-energie.org/hosted/images/ab/f75525c6334c5ea4c3d1bc23756739/Untitled-Design-1-.png"
            ></img>
            <Typography variant="h5">Appartement</Typography>
          </Grid>
        </Grid>
      )}

      {/* STEP 3 */}
      {step === 2 &&
        step3Labels.map((row) => (
          <Grid
            container
            justify="center"
            direction="column"
            key={row.label}
            onClick={() => handleClick("partToIsolate", row.value)}
          >
            <Grid
              item
              container
              alignItems="center"
              className={classes.rowItem}
            >
              <img
                src="//www.programme-energie.org/hosted/images/44/df365fc91244fcb9c4e43e5a670d21/icone-rampants.png"
                width="60"
              />
              <Typography variant="h5" style={{ paddingLeft: "1em" }}>
                {row.label}
              </Typography>
            </Grid>
          </Grid>
        ))}

      {/* STEP 4 */}
      {step >= 3 &&
        step4Labels.map((row) => (
          <Grid
            container
            justify="center"
            direction="column"
            key={row.label}
            onClick={() => handleClick("heaterType", row.value)}
          >
            <Grid
              item
              container
              alignItems="center"
              className={classes.rowItem}
            >
              <img src={row.srcImg} width="60" />
              <Typography variant="h5" style={{ paddingLeft: "1em" }}>
                {row.label}
              </Typography>
            </Grid>
          </Grid>
        ))}

      {/* STEP 5 */}
      {step === 4 && <DialogForm setStep={setStep} step={step} />}
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
    maxWidth: "15em",
    borderRadius: "10px",
    "&:hover, &:focus": {
      backgroundColor: "#def2fa",
    },
  },
  selectImage: {
    paddingBottom: "1em",
    width: "100%",
  },
  rowItem: {
    padding: "0.5em",
    borderRadius: "10px",
    "&:hover, &:focus": {
      backgroundColor: "#def2fa",
    },
  },
}));
