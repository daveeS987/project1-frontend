import { Grid, Box, Paper, makeStyles, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rightSide: {
    // border: '1px solid red',
  },
  aside: {
    // width: '18rem',
    // border: '1px solid red',
  },
  paper: {
    // padding: theme.spacing(2),
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
        <Paper className={classes.paper}>Left Side</Paper>
      </Box>

      <Grid spacing={2} container item xs className={classes.rightSide}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>RightSide</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>RightSide</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>RightSide</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>RightSide</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>RightSide</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>RightSide</Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
