import { useState } from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  makeStyles,
  Typography,
  Divider,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

import FormCondition from './FormCondition';

const useStyles = makeStyles((theme) => ({
  window: {
    border: '1px solid grey',
    borderRadius: '.3rem',
    padding: '1.2rem',
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  indent1: {
    paddingTop: '0.4rem',
    paddingLeft: '1rem',
    paddingBottom: '0.4rem',
  },
  indent2: {
    paddingLeft: '2rem',
    paddingBottom: '0.4rem',
  },
}));

export default function FormAccount() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.window}>
        <Typography variant="h5">Account</Typography>
        <Typography variant="h6" className={classes.indent1}>
          Transactions
        </Typography>

        <Typography variant="body1" color="inherit" className={classes.indent2}>
          Purchases & Sales
        </Typography>

        <Typography variant="body1" color="inherit" className={classes.indent2}>
          Payment & Deposit methods
        </Typography>

        <br />
        <Typography variant="h6" className={classes.indent1}>
          Saves
        </Typography>

        <Typography variant="body1" color="inherit" className={classes.indent2}>
          Saved Items
        </Typography>

        <br />
        <Typography variant="h6" className={classes.indent1}>
          Account
        </Typography>

        <Typography variant="body1" color="inherit" className={classes.indent2}>
          Account Settings
        </Typography>
        <br />
        <Divider variant="middle" />
        <br />
        <Typography>View Public Profile</Typography>
      </div>
    </div>
  );
}
