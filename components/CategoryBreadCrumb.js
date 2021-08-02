import React from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumbs, Link, makeStyles } from '@material-ui/core';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  bread: {
    margin: '1rem',
  },
}));

export default function CategoryBreadCrumb() {
  const classes = useStyles();
  const activeCategoryName = useSelector(
    (state) => state.activeCategory.active.name
  );

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

      <Link color="inherit" onClick={handleClick}>
        {activeCategoryName}
      </Link>
    </Breadcrumbs>
  );
}
