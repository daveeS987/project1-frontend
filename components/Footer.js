/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(4),
    color: theme.palette.primary,
    marginTop: '6rem',
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/daveeS987">
        Davee Sok
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom color="primary">
          Davee's Virtual Store
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          component="p"
          color="primary"
        >
          A mock offerup app built with NextJs, Material UI, MongoDB
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="primary"
          component="p"
        >
          work still in progress....
        </Typography>
        <Copyright />
      </footer>
    </>
  );
}

export default Footer;
