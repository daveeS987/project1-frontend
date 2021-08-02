import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontWeight: 600,
    textAlign: 'center',
    color: '#05a77e',
    margin: '2rem',
  },
  button: {
    textTransform: 'none',
    color: theme.palette.text.secondary,
  },
  menuItem: {
    color: '#05a77e',
  },
}));

function SmallHeading() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} variant="h6" noWrap>
        The simpler way to buy and sell locally!
      </Typography>
    </div>
  );
}

export default SmallHeading;
