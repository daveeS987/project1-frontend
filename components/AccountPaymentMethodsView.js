import React from 'react';
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    width: '40rem',
  },
  panels: {
    width: '20rem',
  },
}));

function AccountPaymentMethodsView() {
  const classes = useStyles();
  return (
    <div>
      <h3>This is the payment & deposit view</h3>
    </div>
  );
}

export default AccountPaymentMethodsView;
