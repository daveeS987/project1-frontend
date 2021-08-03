import { Grid, Box, Paper, makeStyles, Typography } from '@material-ui/core';

import SettingsNameModal from './SettingsNameModal';
import SettingsEmailModal from './SettingsEmailModal';
import SettingsLocationModal from './SettingsLocationModal';
import SettingsPhoneNumModal from './SettingsPhoneNumModal';
import SettingsPwModal from './SettingsPwModal';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '2rem',
    marginBottom: '1.4rem',
  },
  root: {
    marginLeft: '0.8rem',
  },
}));

function AccountSettingsForm() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>
          Account
        </Typography>
        <SettingsNameModal />
        <SettingsEmailModal />
        <SettingsLocationModal />
        <SettingsPhoneNumModal />
        <SettingsPwModal />
      </div>
    </div>
  );
}

export default AccountSettingsForm;
