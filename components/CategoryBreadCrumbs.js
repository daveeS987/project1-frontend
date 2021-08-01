import React from 'react';
import { When } from 'react-if';
import { useSelector } from 'react-redux';
import { Breadcrumbs, Link, makeStyles } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  bread: {
    margin: '1rem',
  },
}));

export default function CategoryBreadCrumbs() {
  const classes = useStyles();
  const activeCategory = useSelector((state) => state.activeCategory.active);
  console.log('activeCategory: ', activeCategory);

  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      className={classes.bread}
    >
      <Link color="inherit" onClick={handleClick}>
        Home
      </Link>

      <When condition={activeCategory}>
        <Link color="inherit" onClick={handleClick}>
          {activeCategory}
        </Link>
      </When>
    </Breadcrumbs>
  );
}
