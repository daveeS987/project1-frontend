import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import DropDownButton from './DropDownButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    borderBottom: '1px solid #e0e0e0',
    justifyContent: 'space-around',
  },
}));

export default function CategoryList({ categories }) {
  const classes = useStyles();

  return (
    <div>
      <ButtonGroup
        variant="text"
        color="inherit"
        fullWidth
        className={classes.root}
      >
        {categories.map((obj) => (
          <DropDownButton
            key={obj.id}
            name={obj.name}
            id={obj.id}
            subCategory={obj.subCategory}
          />
        ))}
      </ButtonGroup>
    </div>
  );
}
