import { useState, useEffect } from 'react';
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
import { changeAccountView } from '../store/accountView';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: '2rem',
    width: '100%',
  },
  appbar: {
    width: '40rem',
    border: `.1px solid ${theme.palette.text.secondary}`,
    borderRadius: '.3rem .3rem 0 0',
    boxShadow: 'none',
  },
  tabs: {
    margin: 0,
    padding: 0,
  },
  tab: {
    width: '20rem',
  },
  tabpanel: {
    margin: 0,
    padding: 0,
  },
}));

function TabPanel(props) {
  const classes = useStyles();
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
        <Box p={3} className={classes.tabpanel}>
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

export default function AccountTransactions() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const view = useSelector((state) => state.accountView.active);

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      dispatch(changeAccountView('PaymentMethods'));
    } else {
      dispatch(changeAccountView('PurchasesAndSales'));
    }
    setValue(newValue);
  };

  useEffect(() => {
    if (view === 'PaymentMethods') {
      setValue(0);
    } else if (view === 'PurchasesAndSales') {
      setValue(1);
    }
  }, [view]);

  return (
    <>
      <div className={classes.title}>
        <Switch>
          <Case condition={view === 'PaymentMethods'}>
            <Typography variant="h5">Payment & Deposit Methods</Typography>
          </Case>
          <Case condition={view === 'PurchasesAndSales'}>
            <Typography variant="h5">Purchases & Sales</Typography>
          </Case>
          <Default>
            <Typography variant="h5">Payment & Deposit Methods</Typography>
          </Default>
        </Switch>
      </div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            indicatorColor="secondary"
            className={classes.tabs}
          >
            <Tab label="Accounts" {...a11yProps(0)} className={classes.tab} />
            <Tab
              label="Transactions"
              {...a11yProps(1)}
              className={classes.tab}
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
    </>
  );
}
