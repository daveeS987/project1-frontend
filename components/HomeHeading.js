import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    textAlign: 'center',
    color: theme.palette.text.primary,
    margin: '3rem',
  },
}));

function HomeHeading() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title} variant="h5" noWrap>
        The simpler way to buy and sell locally!
      </Typography>
    </div>
  );
}

export default HomeHeading;
