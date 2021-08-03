import { Grid, Box, Paper, makeStyles, Typography } from '@material-ui/core';

import AccountSettingsForm from './AccountSettingsForm';
import AccountSettingAvatar from './AccountSettingAvatar';

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

function AccountSettingsView() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <AccountSettingAvatar />
      </Grid>
      <Grid item xs={12}>
        <AccountSettingsForm />
      </Grid>
    </Grid>
  );
}

export default AccountSettingsView;
