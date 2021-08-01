import { Grid, Box, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rightSide: {
    marginRight: '1rem',
    marginLeft: '0.6rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Products() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper className={classes.paper}>RightSide</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper className={classes.paper}>RightSide</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper className={classes.paper}>RightSide</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Paper className={classes.paper}>RightSide</Paper>
      </Grid>
    </Grid>
  );
}

export default Products;
