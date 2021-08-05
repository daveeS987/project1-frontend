import React from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs, Link, makeStyles } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  bread: {
    margin: '2rem',
    marginLeft: '1rem',
  },
}));

export default function AccountsBreadCrumb() {
  const classes = useStyles();
  const accountView = useSelector((state) => state.accountView.active);

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      className={classes.bread}
    >
      <Link color="inherit" onClick={handleClick}>
        Home
      </Link>

      <Link color="inherit" onClick={handleClick}>
        Account
      </Link>

      <Link color="inherit" onClick={handleClick}>
        {accountView}
      </Link>
    </Breadcrumbs>
  );
}
