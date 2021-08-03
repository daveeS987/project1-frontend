import { Grid, Box, Paper, makeStyles } from '@material-ui/core';

import AccountsSideNavigation from './AccountsSideNavigation.js';
import AccountSettingsView from './AccountSettingsView.js';

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

export default function AccountsMain() {
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
        <AccountsSideNavigation />
      </Box>

      <Grid spacing={2} container item xs className={classes.rightSide}>
        <Grid container item xs={12}>
          <AccountSettingsView />
        </Grid>
      </Grid>
    </Grid>
  );
}
