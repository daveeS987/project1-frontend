import { useSelector } from 'react-redux';
import {
  Grid,
  Box,
  Paper,
  makeStyles,
  Typography,
  Chip,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
  },
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  sort: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    marginRight: '1rem',
  },
}));

function ProductCategoryHeading() {
  const classes = useStyles();
  const currentCategory = useSelector((state) => state.activeCategory.active);
  const sortBy = useSelector((state) => state.sortProducts.by);

  return (
    <>
      <div className={classes.main}>
        <Typography variant="h5" className={classes.title}>
          {currentCategory}
        </Typography>
        <Typography variant="body1" className={classes.sort}>
          Sort by: {sortBy}
        </Typography>
      </div>
      <div>
        <Chip>Testing</Chip>
      </div>
    </>
  );
}

export default ProductCategoryHeading;
