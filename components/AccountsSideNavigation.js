import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  makeStyles,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';

import FormCondition from './FormCondition';
import { changeAccountView } from '../store/accountView';

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
  divide: {
    marginTop: '1rem',
    marginBottom: '0.8rem',
  },
  viewProfile: {
    paddingLeft: '1rem',
    paddingTop: '0.4rem',
    marginBottom: '0.3rem',
  },
}));

export default function AccountsSideNavigation() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
      <div className={classes.window}>
        <Typography variant="h5">Account</Typography>
        <Typography variant="h6" className={classes.indent1}>
          Transactions
        </Typography>

        <Button
          onClick={() => dispatch(changeAccountView('PurchasesAndSales'))}
        >
          <Typography
            variant="body1"
            color="inherit"
            className={classes.indent2}
          >
            Purchases & Sales
          </Typography>
        </Button>

        <Button onClick={() => dispatch(changeAccountView('PaymentMethods'))}>
          <Typography
            variant="body1"
            color="inherit"
            className={classes.indent2}
          >
            Payment & Deposit methods
          </Typography>
        </Button>

        <Typography variant="h6" className={classes.indent1}>
          Saves
        </Typography>

        <Button onClick={() => dispatch(changeAccountView('SavedItems'))}>
          <Typography
            variant="body1"
            color="inherit"
            className={classes.indent2}
          >
            Saved Items
          </Typography>
        </Button>

        <Typography variant="h6" className={classes.indent1}>
          Account
        </Typography>

        <Button onClick={() => dispatch(changeAccountView('Settings'))}>
          <Typography
            variant="body1"
            color="inherit"
            className={classes.indent2}
          >
            Account Settings
          </Typography>
        </Button>

        <Divider variant="middle" className={classes.divide} />

        <Typography className={classes.viewProfile}>
          View Public Profile
        </Typography>
      </div>
    </div>
  );
}
