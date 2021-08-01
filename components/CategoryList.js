import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    borderBottom: '1px solid #e0e0e0',
  },
  button: {
    textTransform: 'none',
  },
}));

export default function CategoryList({ categories }) {
  const classes = useStyles();
  console.log('categories: ', categories);

  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" color="inherit" fullWidth>
        {categories.map((obj) => (
          <Button className={classes.button} key={obj.id}>
            {obj.name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
