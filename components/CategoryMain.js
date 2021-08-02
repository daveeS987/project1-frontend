import { Grid, Box, Paper, makeStyles } from '@material-ui/core';

import Products from './Products.js';
import ProductCategoryHeading from './ProductCategoryHeading.js';
import CategoryTable from './CategoryTable.js';

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
}));

export default function CategoryMain() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      <Box
        component={Grid}
        xs={3}
        display={{ xs: 'none', lg: 'block' }}
        className={classes.aside}
        item
      >
        <CategoryTable />
      </Box>

      <Grid spacing={2} container item xs className={classes.rightSide}>
        <Grid item xs={12}>
          <ProductCategoryHeading />
        </Grid>
        <Grid container item xs={12}>
          <Products />
        </Grid>
      </Grid>
    </Grid>
  );
}
