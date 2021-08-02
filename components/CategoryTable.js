import { useState } from 'react';
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  makeStyles,
  Typography,
  Divider,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

import FormCondition from './FormCondition';

const useStyles = makeStyles((theme) => ({
  rightSide: {
    marginRight: '1rem',
    marginLeft: '0.6rem',
  },
  aside: {
    marginLeft: '1rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  window: {
    border: '1px solid grey',
    borderRadius: '.3rem',
    padding: '1.2rem',
    color: theme.palette.text.secondary,
  },
  list: {
    listStyleType: 'none',
    marginLeft: '1rem',
    marginTop: '0.1rem',
  },
  bolder: {
    color: theme.palette.grey[800],
    fontWeight: 500,
  },
}));

export default function CategoryTable() {
  const classes = useStyles();
  const activeCategory = useSelector((state) => state.activeCategory.active);

  return (
    <div>
      <div className={classes.window}>
        <Typography variant={'body1'}>All Categories</Typography>
        <Typography className={classes.bolder}>
          {activeCategory.name}
        </Typography>

        {activeCategory.subCategory.map((category) => (
          <li key={Math.random()} className={classes.list}>
            <Typography variant="body2" color="inherit">
              {category}
            </Typography>
          </li>
        ))}
        <br />
        <Divider variant="middle" />
        <br />
        <Typography variant="h6">Filters</Typography>
        <Typography>Price Range</Typography>
        <br />
        <Divider variant="middle" />
        <br />
        <FormCondition />
      </div>
    </div>
  );
}
