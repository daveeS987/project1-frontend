import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Case, Default } from 'react-if';

import PropTypes from 'prop-types';
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from '@material-ui/core';

import AccountPurchaseSalesView from './AccountPurchaseSalesView';
import AccountPaymentMethodsView from './AccountPaymentMethodsView';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    width: '40rem',
    border: `.1px solid ${theme.palette.text.secondary}`,
    borderRadius: '.3rem .3rem 0 0',
    boxShadow: 'none',
  },
  panels: {
    width: '20rem',
  },
  tabs: {},
}));

export default function AccountTransactions() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="secondary"
          className={classes.tabs}
        >
          <Tab label="Accounts" {...a11yProps(0)} className={classes.panels} />
          <Tab
            label="Transactions"
            {...a11yProps(1)}
            className={classes.panels}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AccountPaymentMethodsView />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountPurchaseSalesView />
      </TabPanel>
    </div>
  );
}
