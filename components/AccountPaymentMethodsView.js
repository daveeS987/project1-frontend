import React from 'react';
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Divider,
  ListItemText,
  ListItem,
  List,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f7f7f7',
    height: '100%',
    width: '38rem',
    padding: '1rem',
  },
  listitem: {
    backgroundColor: theme.palette.primary.main,
    padding: '1.4rem',
    border: `0.1rem solid ${theme.palette.grey[200]}`,
  },
  topgroup: {
    marginBottom: '1rem',
  },
  bold: {
    fontWeight: 600,
  },
  creditcard: {
    color: theme.palette.primary.contrastText,
  },
}));

function AccountPaymentMethodsView() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topgroup}>
        <ListItem className={classes.listitem}>
          <Typography variant="h6" className={classes.bold}>
            Balance
          </Typography>
        </ListItem>
        <ListItem className={classes.listitem}>
          <Typography>$0.00</Typography>
        </ListItem>
      </div>

      <div>
        <ListItem className={classes.listitem}>
          <Typography variant="h6" className={classes.bold}>
            Payment methods
          </Typography>
        </ListItem>
        <ListItem className={classes.listitem}>
          <Typography>Visa Card Example</Typography>
        </ListItem>
        <ListItem className={classes.listitem} button>
          <Typography variant="h6" className={classes.creditcard}>
            Add credit/debit card
          </Typography>
        </ListItem>
      </div>
    </div>
  );
}

export default AccountPaymentMethodsView;
