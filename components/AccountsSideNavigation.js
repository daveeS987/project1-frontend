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

import { changeAccountView } from '../store/accountView';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid grey',
    borderRadius: '.3rem',
    padding: '1.2rem',
    color: theme.palette.text.secondary,
  },
  indent1: {
    paddingTop: '0.4rem',
    paddingLeft: '.8rem',
    paddingBottom: '0.4rem',
  },
  buttons: {
    width: '100%',
    justifyContent: 'flex-start',
  },
  selections: {
    textAlign: 'left',
    paddingLeft: '1.6rem',
    textTransform: 'none',
    color: theme.palette.text.secondary,
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
      <div className={classes.root}>
        <Typography variant="h5">Account</Typography>
        <Typography variant="h6" className={classes.indent1}>
          Transactions
        </Typography>

        <Button
          className={classes.buttons}
          onClick={() => dispatch(changeAccountView('PurchasesAndSales'))}
        >
          <Typography
            variant="body1"
            color="inherit"
            className={classes.selections}
          >
            Purchases & Sales
          </Typography>
        </Button>

        <Button
          className={classes.buttons}
          onClick={() => dispatch(changeAccountView('PaymentMethods'))}
        >
          <Typography
            variant="body1"
            color="inherit"
            className={classes.selections}
          >
            Payment & Deposit methods
          </Typography>
        </Button>

        <Typography variant="h6" className={classes.indent1}>
          Saves
        </Typography>

        <Button
          className={classes.buttons}
          onClick={() => dispatch(changeAccountView('SavedItems'))}
        >
          <Typography
            variant="body1"
            color="inherit"
            className={classes.selections}
          >
            Saved Items
          </Typography>
        </Button>

        <Typography variant="h6" className={classes.indent1}>
          Account
        </Typography>

        <Button
          className={classes.buttons}
          onClick={() => dispatch(changeAccountView('Settings'))}
        >
          <Typography
            variant="body1"
            color="inherit"
            className={classes.selections}
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
