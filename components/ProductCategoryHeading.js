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
    marginBottom: '.6rem',
  },
  sort: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    marginRight: '1rem',
  },
  chips: {
    fontSize: '.9rem',
    padding: '.2rem',
    height: '2rem',
    margin: '.2rem',
  },
}));

function ProductCategoryHeading() {
  const classes = useStyles();
  const activeCategory = useSelector((state) => state.activeCategory.active);
  const sortBy = useSelector((state) => state.sortProducts.by);

  return (
    <>
      <div className={classes.main}>
        <Typography variant="h5" className={classes.title}>
          {activeCategory.name}
        </Typography>
        <Typography variant="body1" className={classes.sort}>
          Sort by: {sortBy}
        </Typography>
      </div>
      <div>
        {activeCategory.subCategory.map((category) => (
          <Chip
            label={category}
            variant="outlined"
            className={classes.chips}
            key={Math.random()}
          />
        ))}
      </div>
    </>
  );
}

export default ProductCategoryHeading;
