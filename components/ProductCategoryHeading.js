import { useSelector } from 'react-redux';
import { makeStyles, Typography, Chip } from '@material-ui/core';

import ProductSortDropDown from './ProductSortDropDown';

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
    fontSize: '.8rem',
    padding: '.2rem',
    height: '1.8rem',
    margin: '.2rem',
    flexWrap: 'nowrap',
  },
  // chipsContainer: {
  //   display: 'flex',
  //   flexWrap: 'nowrap',
  // },
}));

function ProductCategoryHeading() {
  const classes = useStyles();
  const activeCategory = useSelector((state) => state.activeCategory.active);
  // const sortBy = useSelector((state) => state.sortProducts.by);

  return (
    <>
      <div className={classes.main}>
        <Typography variant="h5" className={classes.title}>
          {activeCategory.name}
        </Typography>
        <ProductSortDropDown />
      </div>
      <div className={classes.chipsContainer}>
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
