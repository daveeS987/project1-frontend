import React from 'react';
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
    justifyContent: 'space-between',
    width: '99%',
    zIndex: 2000,
  },
  bar: {
    zIndex: 2000,
  },
}));

export default function HeaderCategory({ categories }) {
  const classes = useStyles();

  return (
    <div className={classes.bar}>
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
