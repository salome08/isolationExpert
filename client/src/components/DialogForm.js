import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import {
  Paper,
  Container,
  Typography,
  Divider,
  Grid,
  Button,
  makeStyles,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Person, Home, Phone, Mail, Check } from "@material-ui/icons";
import api from "../utils/api";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const IconCustom = ({ name }) => {
  switch (name) {
    case "person": {
      return <Person />;
      break;
    }
    case "home": {
      return <Home />;
      break;
    }
    case "phone": {
      return <Phone />;
      break;
    }
    case "mail": {
      return <Mail />;
      break;
    }
  }
};

const fieldsLabels = [
  {
    label: "Nom complet",
    key: "name",
    icon: "person",
  },
  {
    label: "Code postal",
    key: "postalCode",
    icon: "home",
  },
  {
    label: "Téléphone",
    key: "phone",
    icon: "phone",
  },
  {
    label: "Adesse mail",
    key: "email",
    icon: "mail",
  },
];

const DialogForm = ({ setStep, step, selectedValues }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);
  const [submit, setSubmit] = React.useState(false);
  const [values, setValues] = React.useState({
    name: "",
    postalCode: "",
    phone: "",
    email: "",
  });

  console.log("values", values);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const onSubmit = () => {
    console.log("Submit ", values);
    setSubmit(true);
    if (values.name && values.postalCode && values.phone && values.email) {
      const user = { ...values, ...selectedValues };
      api.signup(user).then(() => {
        "got cha !";
      });
    }
  };

  const handleClose = () => {
    setStep(step - 1);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={classes.dialogContainer}
        PaperProps={{ style: { padding: "2em" } }}
      >
        <DialogContent style={{ padding: "2em" }}>
          <Grid container direction="column">
            <Grid
              item
              container
              spacing={2}
              justify="center"
              style={{ paddingBottom: "2em" }}
            >
              <Grid item xs={12}>
                <Typography
                  align="center"
                  variant="h4"
                  style={{
                    color: "#474747",
                    fontWeight: "bold",
                  }}
                >
                  Dernière étape : Recevez vos résultats
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  variant="h5"
                  style={{
                    color: "#474747",
                    fontWeight: "bold",
                  }}
                >
                  Je finalise ma demande
                </Typography>
              </Grid>
              {fieldsLabels.map((field) => (
                <Grid item xs={12}>
                  <TextField
                    label={field.label}
                    id="margin-none"
                    fullWidth
                    error={submit && !values[field.key] ? true : false}
                    variant="outlined"
                    defaultValue={values[field.key]}
                    onChange={(event) => {
                      const { value } = event.target;
                      setSubmit(false);
                      setValues({ ...values, [field.key]: value });
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconCustom name={field.icon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              ))}
              <Grid item container xs={10}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={onSubmit}
                  style={{
                    borderRadius: "30px",
                    fontSize: "25px",
                    backgroundColor: "#0092D5",
                    fontWeight: "bold",
                    color: "#eee",
                  }}
                  size="large"
                >
                  VALIDER
                </Button>
              </Grid>
            </Grid>

            <Grid item container>
              <Grid item xs={1}>
                <Check style={{ color: "green" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", color: "#474747" }}
                >
                  Test gratuit sans obligation d'achat
                </Typography>
              </Grid>
            </Grid>

            <Grid item container>
              <Grid item xs={1}>
                <Check style={{ color: "green" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", color: "#474747" }}
                >
                  Confidentialité des données
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="row"
              alignItems="center"
              alignItems="flex-start"
            >
              <Grid item xs={1}>
                <Check style={{ color: "green" }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" style={{ color: "#474747" }}>
                  En cliquant sur "valider" vous reconnaissez avoir accepté nos
                  conditions générales d'utilisation et notre politique de
                  protection des données
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogForm;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  dialogContainer: {
    backgroundColor: "#40333373",
  },
}));
